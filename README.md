# Plyo

> Kit completo de lançamento pro músico independente brasileiro. EPK, release, contatos de imprensa e conteúdo pra redes — gerado por IA em PT-BR.

**Status:** pré-MVP · em validação · maio/2026

Detalhes de produto, personas, modelo de negócio e roadmap em [`pdr.md`](./pdr.md).

---

## Stack

| Camada              | Tecnologia                                                                              |
| ------------------- | --------------------------------------------------------------------------------------- |
| Monorepo            | Nx 22 + pnpm 11 workspaces (Node 24)                                                    |
| Frontend            | SvelteKit 2 (Svelte 5) + Tailwind v4 + Vite 6                                           |
| Backend (form/API)  | SvelteKit server actions (`+page.server.ts`)                                            |
| Banco + Auth        | Supabase (Postgres) com RLS — chave publishable no cliente                              |
| Validação           | Zod                                                                                     |
| IA (planejado)      | Gemini 2.5 Flash (dev) → Claude (prod), via adapter `llm.ts`                            |
| Storage (planejado) | Cloudflare R2 (audio/PDF) + Cloudflare Images (fotos)                                   |
| Pagamento (planeja) | Mercado Pago (Pix Automático + CC) + eNotas/NFe.io para NFSe                            |
| Deploy              | Vercel Hobby (frontend SSR)                                                             |

---

## Estrutura

```
plyo/
├── pdr.md                         # PRD — fonte de verdade do produto
├── plyo.html                      # design da landing original (referência)
├── nx.json, pnpm-workspace.yaml   # config do monorepo
├── .env.example                   # variáveis de ambiente (template)
└── packages/
    └── plyo-ui/app/               # SvelteKit landing + waitlist
        ├── src/
        │   ├── app.html, app.css
        │   └── routes/
        │       ├── +layout.{svelte,ts}
        │       ├── +page.svelte           # landing
        │       └── +page.server.ts        # form action de waitlist
        ├── static/                # plyo-logo.svg, plyo-symbol.svg (favicon)
        ├── svelte.config.js       # adapter-auto, kit.env.dir → workspace root
        ├── vite.config.ts         # envDir → workspace root
        ├── vercel.json            # config de deploy
        └── project.json           # Nx targets (serve / build / preview / check)
```

A lógica do monorepo segue o padrão de `workspace/core` (DashCore) e `workspace/atilho` — vendora `@dash-core/tooling-svelte` se/quando fizer sentido reusar.

---

## Desenvolvimento local

```sh
# instalar
pnpm install

# rodar a landing em http://localhost:5173
pnpm nx run plyo-ui-app:serve

# typecheck (svelte-check)
pnpm nx run plyo-ui-app:check

# build estático/SSR
pnpm nx run plyo-ui-app:build

# preview do build de produção
pnpm nx run plyo-ui-app:preview
```

---

## Variáveis de ambiente

Ficam **no workspace root** (`/.env.local`, `/.env.example`) — `vite.config.ts` e `svelte.config.js` apontam `envDir` / `kit.env.dir` pra cá.

```env
PUBLIC_SUPABASE_URL=https://<projeto>.supabase.co
PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_<chave>
```

A chave `publishable` (anon) é exposta no cliente; segurança vem do RLS no Supabase.

---

## Setup do Supabase

Roda no SQL editor:

```sql
create table public.waitlist (
  id          uuid        primary key default gen_random_uuid(),
  email       text        not null,
  source      text        default 'landing',
  user_agent  text,
  created_at  timestamptz not null default now()
);

create unique index waitlist_email_unique on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

create policy "anon_can_insert_waitlist"
  on public.waitlist for insert to anon with check (true);

create index waitlist_created_at_idx on public.waitlist (created_at desc);
```

A action em [`+page.server.ts`](./packages/plyo-ui/app/src/routes/+page.server.ts) insere com a chave anon — RLS deixa só `INSERT` passar, `SELECT/UPDATE/DELETE` ficam bloqueados pra evitar vazamento de emails.

Pra consultar os inscritos, use o dashboard do Supabase ou a service-role key (não commitar):

```sql
select email, source, created_at
  from public.waitlist
 order by created_at desc;
```

---

## Deploy

Vercel detecta SvelteKit via `adapter-auto`. Settings na UI do Vercel:

- **Root Directory:** `packages/plyo-ui/app`
- **Framework:** SvelteKit (auto)
- **Install / Build commands:** vêm do [`vercel.json`](./packages/plyo-ui/app/vercel.json)
- **Environment Variables:** `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Cada push pra `main` deploya prod; cada PR vira preview deploy.

---

## Roadmap curto

- [x] Landing + waitlist funcional (validação Fase 1 do PRD §9.1)
- [ ] Configurar domínio (`plyo.app` ou `getplyo.com` — adiar `.fm`)
- [ ] Postar em 10 grupos de músicos BR + 5 entrevistas WTP
- [ ] **Gate:** 100+ inscritos + 5+ "pagaria hoje" → seguir pra MVP
- [ ] MVP features 1–7 (PRD §6.1) — sem editor de regenerate-trecho no V1

---

## Referências

- [`pdr.md`](./pdr.md) — PRD completo
- [`plyo.html`](./plyo.html) — design original da landing (referência visual)
- [Bandzoogle](https://bandzoogle.com), [Sonicbids](https://sonicbids.com) — concorrentes indiretos gringos
