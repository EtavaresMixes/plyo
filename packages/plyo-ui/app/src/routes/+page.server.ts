import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';

// Form action mutates state, can't be prerendered.
export const prerender = false;

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false }
});

const WaitlistInput = z.object({
  email: z.string().trim().toLowerCase().email('Email inválido')
});

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const parsed = WaitlistInput.safeParse({
      email: formData.get('email')
    });

    if (!parsed.success) {
      return fail(400, {
        email: String(formData.get('email') ?? ''),
        error: parsed.error.issues[0]?.message ?? 'Email inválido'
      });
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: parsed.data.email, source: 'landing' });

    // Postgres unique_violation = already on the list. Treat as success.
    if (error && error.code !== '23505') {
      console.error('waitlist insert failed', error);
      return fail(500, {
        email: parsed.data.email,
        error: 'Não conseguimos te adicionar agora. Tenta de novo em alguns segundos.'
      });
    }

    return { success: true };
  }
};
