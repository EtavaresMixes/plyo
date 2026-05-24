<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  let { form }: { form: ActionData } = $props();

  let submitting = $state(false);
  let waitlistEmail = $state('');

  const buttonLabel = $derived(
    submitting ? 'Enviando…' : form?.success ? '✓ Na lista' : 'Entrar'
  );

  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Plyo — Solte sua música como gente grande</title>
</svelte:head>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" class="logo">
      <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6 L8 34" stroke="#f5f1ea" stroke-width="3" stroke-linecap="round" />
        <path
          d="M8 6 L22 6 C28 6 32 10 32 16 C32 22 28 26 22 26 L8 26"
          stroke="#f5f1ea"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <path
          d="M32 16 Q36 14, 38 16"
          stroke="#ff2d6f"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
        />
        <path
          d="M34 20 Q38 18, 40 20"
          stroke="#ff2d6f"
          stroke-width="2"
          stroke-linecap="round"
          fill="none"
          opacity="0.6"
        />
        <circle cx="26" cy="16" r="2.5" fill="#d4ff3a" />
      </svg>
      <span class="logo-text">Plyo</span>
    </a>
    <div class="nav-links">
      <a href="#produto">Produto</a>
      <a href="#como">Como funciona</a>
      <a href="#precos">Preços</a>
      <a href="#cta" class="nav-cta">Entrar na lista</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-tag">Em breve · Lista de espera aberta</div>
    <h1 class="hero-title">
      Você fez a música.<br />
      <em>A gente solta</em> ela<br />
      <span class="strike">como amador</span> como gente grande.
    </h1>
    <p class="hero-sub">
      Plyo é o <strong>kit completo de lançamento</strong> pro músico independente. EPK profissional,
      release pra imprensa, lista curada de blogs e conteúdo pra redes — gerado por IA em PT-BR.
      <strong>Em minutos, não semanas.</strong>
    </p>
    <div class="hero-cta-row">
      <a href="#cta" class="btn-primary">
        Quero soltar direito
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <a href="#como" class="btn-secondary">Ver como funciona</a>
    </div>
    <div class="hero-meta">
      <div><strong>0</strong> · Sem assessoria de R$ 5 mil</div>
      <div><strong>5 min</strong> · do upload ao kit completo</div>
      <div><strong>R$ 39/mês</strong> · cancele quando quiser</div>
    </div>
  </div>

  <!-- Marquee -->
  <div class="marquee-wrap">
    <div class="marquee">
      <span>EPK em segundos</span>
      <span>Release pronto pra imprensa</span>
      <span>Contatos curados de blogs BR</span>
      <span>Legendas pra Instagram</span>
      <span>Roteiros pra Reels</span>
      <span>Cronograma de 30 dias</span>
      <span>Mídia kit em PDF</span>
      <span>Smart link agregado</span>
      <span>EPK em segundos</span>
      <span>Release pronto pra imprensa</span>
      <span>Contatos curados de blogs BR</span>
      <span>Legendas pra Instagram</span>
      <span>Roteiros pra Reels</span>
      <span>Cronograma de 30 dias</span>
      <span>Mídia kit em PDF</span>
      <span>Smart link agregado</span>
    </div>
  </div>
</section>

<!-- COMPARISON -->
<section class="comparison">
  <div class="container">
    <div class="section-eyebrow">A matemática que importa</div>
    <h2 class="section-title">Assessoria custa caro. <em>Você não precisa dela.</em></h2>
    <p class="section-intro">
      A assessoria de imprensa entrega bom material — mas cobra preço de gravadora. Plyo entrega 70%
      do mesmo resultado por 1% do preço.
    </p>

    <div class="comparison-grid">
      <div class="comp-card bad">
        <div class="comp-label">Assessoria tradicional</div>
        <div class="comp-price">R$ 5.000</div>
        <div class="comp-period">por lançamento</div>
        <ul class="comp-list">
          <li>Release escrito por jornalista (1 semana)</li>
          <li>Mídia kit em PDF estático</li>
          <li>Pitch pra 30 veículos</li>
          <li>Follow-up manual por e-mail</li>
          <li>Relatório de clipping (se lembrarem)</li>
          <li>Reunião semanal de 1 hora</li>
        </ul>
      </div>

      <div class="versus">vs</div>

      <div class="comp-card good">
        <div class="comp-label">Plyo</div>
        <div class="comp-price">R$ 39</div>
        <div class="comp-period">por mês — lança quantas faixas quiser</div>
        <ul class="comp-list">
          <li>Release gerado por IA em segundos</li>
          <li>
            EPK web profissional em
            <code style="font-family:'DM Mono',monospace;font-size:12px;color:var(--lime)"
              >plyo.fm/voce</code
            >
          </li>
          <li>Lista curada de 30+ contatos por gênero</li>
          <li>Kit de legendas e roteiros pra redes</li>
          <li>Cronograma de 30 dias pronto</li>
          <li>Funciona enquanto você dorme</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="features" id="produto">
  <div class="container">
    <div class="section-eyebrow">O que o Plyo faz por você</div>
    <h2 class="section-title">Cinco entregas. <em>Um clique.</em></h2>

    <div class="features-grid">
      <!-- Feat 1: EPK -->
      <div class="feat feat-1">
        <div class="feat-num">01 — Press Kit</div>
        <h3 class="feat-title">EPK que parece feito por agência.</h3>
        <p class="feat-desc">
          Página web profissional, hospedada em <code>plyo.fm/seunome</code>. Bio em 3 versões,
          player embedado, smart link, fotos tratadas e download de mídia kit em PDF.
        </p>

        <div class="epk-mock">
          <div class="epk-mock-header">
            <div class="epk-cover"></div>
            <div>
              <div class="epk-artist">Marina Vega</div>
              <div class="epk-track">novo single · Saudade Modular</div>
            </div>
          </div>
          <div class="epk-body">
            Cantora e produtora paulistana que mistura <strong>R&B alternativo</strong> com texturas
            eletrônicas. Em 2025, foi capa do festival Coquetel Molotov e teve faixas no Indie Brasileiro
            do Spotify…
          </div>
          <div class="epk-footer">
            <span class="epk-chip">▶ Player</span>
            <span class="epk-chip">↓ PDF</span>
            <span class="epk-chip">@ Booking</span>
            <span class="epk-chip">↗ Spotify</span>
          </div>
        </div>
      </div>

      <!-- Feat 2: Release -->
      <div class="feat feat-2">
        <div class="feat-num">02 — Press Release</div>
        <h3 class="feat-title">Release que jornalista lê até o fim.</h3>
        <p class="feat-desc">
          IA treinada na estrutura jornalística brasileira. Gancho na primeira linha, contexto,
          quote do artista, parágrafo de futuro — nada de "estamos animados pra anunciar".
        </p>

        <div class="release-mock">
          <strong>Marina Vega esculpe o luto digital em "Saudade Modular"</strong><br /><br />
          Faixa de R&B alternativo, lançada em <strong>23 de maio</strong>, traduz em sintetizadores
          modulares a despedida de um relacionamento mantido inteiramente por mensagens<span
            class="release-typing"
          ></span>
        </div>
      </div>

      <!-- Feat 3: Contatos -->
      <div class="feat feat-3">
        <div class="feat-num">03 — Imprensa</div>
        <h3 class="feat-title">Lista curada de quem cobre seu som.</h3>
        <p class="feat-desc">
          Banco de dados de blogs, podcasts e curadores brasileiros — segmentados por gênero e
          região.
        </p>

        <div class="contacts-mock">
          <div class="contact-row">
            <div class="contact-dot indie"></div>
            <div class="contact-name">Tenho Mais Discos Que Amigos</div>
            <div class="contact-genre">indie</div>
          </div>
          <div class="contact-row">
            <div class="contact-dot indie"></div>
            <div class="contact-name">Monkeybuzz</div>
            <div class="contact-genre">indie</div>
          </div>
          <div class="contact-row">
            <div class="contact-dot elec"></div>
            <div class="contact-name">Mondo Tunes</div>
            <div class="contact-genre">eletrônica</div>
          </div>
          <div class="contact-row">
            <div class="contact-dot rap"></div>
            <div class="contact-name">Rap Mídia</div>
            <div class="contact-genre">rap/trap</div>
          </div>
        </div>
      </div>

      <!-- Feat 4: Social -->
      <div class="feat feat-4">
        <div class="feat-num">04 — Redes Sociais</div>
        <h3 class="feat-title">Conteúdo pronto pro Reels, story e feed.</h3>
        <p class="feat-desc">
          Legendas em 3 tons, hashtags certas pro gênero e roteiros curtos pra você gravar no
          celular.
        </p>

        <div class="social-mock">
          <div class="social-tile">"a faixa nasceu numa madrugada de outubro"</div>
          <div class="social-tile">novo single sexta · pre-save no link</div>
          <div class="social-tile">bastidor do estúdio →</div>
        </div>
      </div>

      <!-- Feat 5: Timeline -->
      <div class="feat feat-5">
        <div class="feat-num">05 — Cronograma</div>
        <h3 class="feat-title">Plano de 30 dias. Sem você pensar.</h3>
        <p class="feat-desc">
          Cronograma editorial automático, do teaser ao follow-up pós-lançamento.
        </p>

        <div class="timeline-mock">
          <div class="timeline-line"></div>
          <div class="timeline-item">
            <div class="timeline-dot">−30</div>
            <div class="timeline-text"><strong>Teaser</strong> de 7s pro Reels</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">−14</div>
            <div class="timeline-text"><strong>Pre-save</strong> + e-mail pra imprensa</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">0</div>
            <div class="timeline-text"><strong>Drop</strong> · post oficial</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">+7</div>
            <div class="timeline-text"><strong>História</strong> por trás da faixa</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how" id="como">
  <div class="container">
    <div class="section-eyebrow">O fluxo</div>
    <h2 class="section-title">Três passos. <em>Pronto.</em></h2>

    <div class="how-steps">
      <div class="step">
        <div class="step-num">01</div>
        <h3 class="step-title">Sobe sua faixa</h3>
        <p class="step-desc">
          MP3, WAV ou só o link do SoundCloud. Capa e umas perguntas rápidas sobre a música —
          gênero, história, referências.
        </p>
        <div class="step-time">2 minutos</div>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <h3 class="step-title">A IA monta o kit</h3>
        <p class="step-desc">
          EPK, release, lista de contatos, legendas e cronograma. Você revisa, ajusta o tom, troca o
          que não curtir.
        </p>
        <div class="step-time">3 minutos</div>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <h3 class="step-title">Solta no mundo</h3>
        <p class="step-desc">
          Compartilha o link do EPK, dispara o release com um clique, posta o conteúdo no
          calendário do Plyo. Pronto.
        </p>
        <div class="step-time">5 minutos por dia</div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIAL -->
<section class="testimonial">
  <div class="container">
    <span class="quote-mark">"</span>
    <p class="quote">
      Antes do Plyo, eu mandava um <em>link do SoundCloud no DM</em> e torcia. Hoje, mando um EPK
      que parece de gravadora — e blogueiro responde.
    </p>
    <div class="quote-author">
      <strong>Marina V.</strong> · cantora · São Paulo · beta tester
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="precos">
  <div class="container">
    <div class="section-eyebrow">Preço de app · trabalho de assessoria</div>
    <h2 class="section-title">Sem fidelidade. <em>Sem dólar.</em></h2>

    <div class="price-grid">
      <div class="price-card">
        <div class="price-name">Demo</div>
        <div class="price-desc">Pra testar e sentir se faz pra você.</div>
        <div class="price-amount"><span class="currency">R$</span>0</div>
        <div class="price-period">grátis · pra sempre</div>
        <ul class="price-features">
          <li>1 EPK ativo</li>
          <li>Release com marca "feito com Plyo"</li>
          <li>5 contatos de imprensa</li>
          <li>Suporte por comunidade</li>
        </ul>
        <a href="#cta" class="price-cta">Começar grátis</a>
      </div>

      <div class="price-card featured">
        <div class="price-badge">Mais escolhido</div>
        <div class="price-name">Solo</div>
        <div class="price-desc">Pro músico independente que lança várias faixas por ano.</div>
        <div class="price-amount"><span class="currency">R$</span>39</div>
        <div class="price-period">por mês · cancele quando quiser</div>
        <ul class="price-features">
          <li>EPKs ilimitados</li>
          <li>Releases sem marca</li>
          <li>30+ contatos curados por release</li>
          <li>Kit completo de redes</li>
          <li>Cronograma de 30 dias</li>
          <li>Suporte por WhatsApp</li>
        </ul>
        <a href="#cta" class="price-cta">Entrar na lista</a>
      </div>

      <div class="price-card">
        <div class="price-name">Banda</div>
        <div class="price-desc">Pra projetos com vários integrantes ou selo independente.</div>
        <div class="price-amount"><span class="currency">R$</span>79</div>
        <div class="price-period">por mês · até 5 artistas</div>
        <ul class="price-features">
          <li>Tudo do Solo</li>
          <li>Múltiplos artistas no mesmo painel</li>
          <li>Painel de divisão financeira</li>
          <li>Lista de contatos expandida (100+)</li>
          <li>Suporte prioritário</li>
        </ul>
        <a href="#cta" class="price-cta">Entrar na lista</a>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta" id="cta">
  <div class="container">
    <h2 class="final-title">Sua próxima faixa<br /><em>merece mais</em> que torcer.</h2>
    <p class="final-sub">
      Entre na lista de espera. Primeiros 200 inscritos ganham 3 meses grátis no lançamento.
    </p>
    <form
      class="waitlist-form"
      method="POST"
      use:enhance={() => {
        submitting = true;
        return async ({ update }) => {
          await update({ reset: false });
          submitting = false;
          if (form?.success) waitlistEmail = '';
        };
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="seu@email.com"
        bind:value={waitlistEmail}
        disabled={submitting}
        required
      />
      <button type="submit" disabled={submitting}>{buttonLabel}</button>
    </form>
    {#if form?.error}
      <p class="waitlist-error">{form.error}</p>
    {/if}
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#" class="logo">
          <svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6 L8 34" stroke="#f5f1ea" stroke-width="3" stroke-linecap="round" />
            <path
              d="M8 6 L22 6 C28 6 32 10 32 16 C32 22 28 26 22 26 L8 26"
              stroke="#f5f1ea"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
            <path
              d="M32 16 Q36 14, 38 16"
              stroke="#ff2d6f"
              stroke-width="2"
              stroke-linecap="round"
              fill="none"
            />
            <path
              d="M34 20 Q38 18, 40 20"
              stroke="#ff2d6f"
              stroke-width="2"
              stroke-linecap="round"
              fill="none"
              opacity="0.6"
            />
            <circle cx="26" cy="16" r="2.5" fill="#d4ff3a" />
          </svg>
          <span class="logo-text">Plyo</span>
        </a>
        <p class="footer-tag">
          O kit completo de lançamento pro músico independente brasileiro.
        </p>
      </div>
      <div class="footer-meta">
        © 2026 Plyo<br />
        Feito no Brasil · Pra quem solta som
      </div>
    </div>
  </div>
</footer>
