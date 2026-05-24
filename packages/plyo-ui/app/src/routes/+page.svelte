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
  <title>Plyo — Sua música, pronta pra ser enviada</title>
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
      Sua música tá pronta.<br />
      <em>O lançamento</em> que não.
    </h1>
    <p class="hero-sub">
      Plyo é a ferramenta que <strong>prepara seu lançamento profissional</strong>: EPK em web,
      release pra imprensa, kit de redes e cronograma de 30 dias. Gerado por IA em PT-BR. Em
      minutos. <strong>Aí você manda pra quem quiser</strong> — imprensa, curadores, Groover,
      contratante. Pronto pra ser ouvido como gente grande.
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
      <div><strong>5 min</strong> · do upload ao kit pronto</div>
      <div><strong>R$ 39/mês</strong> · cancele quando quiser</div>
    </div>
  </div>

  <!-- WORKFLOW DIAGRAM -->
  <div class="container">
    <div class="workflow">
      <div class="workflow-eyebrow">
        Onde o Plyo entra <strong>na sua jornada de lançamento</strong>
      </div>
      <div class="workflow-grid">
        <div class="workflow-step">
          <div class="workflow-icon">🎧</div>
          <div class="workflow-name">Música pronta</div>
          <div class="workflow-desc">Faixa mixada<br />e masterizada</div>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step highlight">
          <div class="workflow-badge">Plyo entra aqui</div>
          <div class="workflow-icon">📦</div>
          <div class="workflow-name"><em>Preparação</em></div>
          <div class="workflow-desc">EPK, release, redes,<br />cronograma. Tudo pronto.</div>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="workflow-icon">📣</div>
          <div class="workflow-name">Envio</div>
          <div class="workflow-desc">Você manda pra<br />imprensa, Groover,<br />curadores, DM</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Marquee -->
  <div class="marquee-wrap">
    <div class="marquee">
      <span>EPK profissional</span>
      <span>Release pra imprensa</span>
      <span>Bio em 3 versões</span>
      <span>Legendas pra Instagram</span>
      <span>Roteiros pra Reels</span>
      <span>Cronograma de 30 dias</span>
      <span>Mídia kit em PDF</span>
      <span>Smart link agregado</span>
      <span>EPK profissional</span>
      <span>Release pra imprensa</span>
      <span>Bio em 3 versões</span>
      <span>Legendas pra Instagram</span>
      <span>Roteiros pra Reels</span>
      <span>Cronograma de 30 dias</span>
      <span>Mídia kit em PDF</span>
      <span>Smart link agregado</span>
    </div>
  </div>
</section>

<!-- PROBLEM -->
<section class="problem">
  <div class="container">
    <div class="problem-grid">
      <div>
        <div class="section-eyebrow">O problema</div>
        <h2 class="section-title">
          Você passou <em>3 meses</em> na música.<br />E 3 horas no release.
        </h2>
        <p class="section-intro">
          A maior parte do trabalho de lançamento não é música. É preparação. E é justamente onde
          músico independente trava.
        </p>
      </div>
      <ul class="problem-list">
        <li>
          <span class="problem-num">01</span>
          <span class="problem-text"
            >Você abre o Google Docs pra escrever release, copia estrutura de outros e
            <strong>nunca sabe se ficou bom</strong>.</span
          >
        </li>
        <li>
          <span class="problem-num">02</span>
          <span class="problem-text"
            >Monta EPK no Canva, manda PDF feio. Jornalista abre no celular e
            <strong>fecha em 3 segundos</strong>.</span
          >
        </li>
        <li>
          <span class="problem-num">03</span>
          <span class="problem-text"
            >Posta no Instagram sem estratégia. <strong>Algoritmo come</strong>. Reach baixo. Música
            morre.</span
          >
        </li>
        <li>
          <span class="problem-num">04</span>
          <span class="problem-text"
            >Quando vai mandar pra Groover, SubmitHub ou DM de blog, <strong>já cansou</strong>.
            Manda mal feito ou nem manda.</span
          >
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="features" id="produto">
  <div class="container">
    <div class="section-eyebrow">O que o Plyo faz por você</div>
    <h2 class="section-title">Cinco entregas. <em>Um clique.</em></h2>
    <p class="section-intro">
      O material profissional pronto. Aí é você que decide pra onde vai — imprensa direta, Groover,
      curador no DM, contratante de show. O Plyo prepara, você dispara.
    </p>

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

      <!-- Feat 3: Exports (replaces contacts) -->
      <div class="feat feat-3">
        <div class="feat-num">03 — Pra onde quiser</div>
        <h3 class="feat-title">Exporta em qualquer formato.</h3>
        <p class="feat-desc">
          Manda do jeito que cada destino pede. Plyo prepara, você dispara.
        </p>

        <div class="export-mock">
          <div class="export-row">
            <div class="export-icon" style="background: linear-gradient(135deg, #ff2d6f, #ff8c42);">
              📰
            </div>
            <div class="export-name">Release em PDF</div>
            <div class="export-tag">imprensa</div>
          </div>
          <div class="export-row">
            <div class="export-icon" style="background: linear-gradient(135deg, #1db954, #0d7d3c);">
              🎵
            </div>
            <div class="export-name">Link pra Groover</div>
            <div class="export-tag">curadores</div>
          </div>
          <div class="export-row">
            <div class="export-icon" style="background: linear-gradient(135deg, #d4ff3a, #a3cc1f);">
              💬
            </div>
            <div class="export-name">Mensagem pra DM</div>
            <div class="export-tag">blog/podcast</div>
          </div>
          <div class="export-row">
            <div class="export-icon" style="background: linear-gradient(135deg, #2a2a2e, #4a4a52);">
              📎
            </div>
            <div class="export-name">Mídia kit completo</div>
            <div class="export-tag">contratante</div>
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
            <div class="timeline-text"><strong>Pre-save</strong> + envio pra imprensa</div>
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
          EPK, release, kit de redes e cronograma. Você revisa, ajusta o tom, troca o que não
          curtir. Tudo em PT-BR.
        </p>
        <div class="step-time">3 minutos</div>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <h3 class="step-title">Manda pra quem quiser</h3>
        <p class="step-desc">
          Baixa o PDF pra imprensa, copia o link do EPK pra Groover, manda DM com mensagem pronta. O
          envio é seu, o material profissional é nosso.
        </p>
        <div class="step-time">5 minutos</div>
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
      que parece de gravadora — e o blogueiro responde.
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
          <li>1 EPK ativo público</li>
          <li>Release com marca "feito com Plyo"</li>
          <li>Export em PDF</li>
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
          <li>Kit completo de redes</li>
          <li>Cronograma de 30 dias</li>
          <li>Export em todos os formatos</li>
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
          <li>Múltiplos artistas no painel</li>
          <li>Painel de divisão financeira</li>
          <li>Suporte prioritário</li>
        </ul>
        <a href="#cta" class="price-cta">Entrar na lista</a>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="container">
    <div class="section-eyebrow">Dúvidas honestas</div>
    <h2 class="section-title">As <em>perguntas que importam.</em></h2>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q">Por que não usar <em>ChatGPT</em> direto?</div>
        <div class="faq-a">
          Porque o ChatGPT te dá um texto. Plyo te dá um
          <strong>sistema de lançamento completo</strong>: EPK em URL pública pra compartilhar
          (<code>plyo.fm/seunome</code>), release no formato editorial brasileiro, kit de redes,
          mídia kit em PDF, cronograma. Tudo num lugar só, atualizado a cada lançamento. ChatGPT
          esquece o que falou ontem. Plyo lembra de toda sua carreira.
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Plyo envia minha música pra blogs ou playlists?</div>
        <div class="faq-a">
          <strong>Não.</strong> Plyo é a etapa <em>antes</em> do envio. A gente prepara o material
          profissional, você decide pra onde mandar — direto pro jornalista, via
          <a href="https://groover.co" target="_blank" rel="noopener noreferrer">Groover</a>,
          SubmitHub, DM no Instagram, ou pra contratante de show. Cada destino tem suas regras, e o
          Plyo te dá o material certo pra cada um.
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Posso usar com Groover, SubmitHub ou Tratore?</div>
        <div class="faq-a">
          <strong>Sim, é exatamente a ideia.</strong> Pensa no Plyo como a etapa anterior. Antes de
          gastar Grooviz mandando música pra curador, você usa o Plyo pra ter EPK, release e bio
          profissionais. Aí o curador recebe um material que parece de artista sério — não de
          iniciante.
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Funciona pra que <em>gêneros</em> musicais?</div>
        <div class="faq-a">
          Todos. Mas a IA é especialmente boa em entender o <strong>contexto brasileiro</strong> de
          indie, R&B, MPB alternativa, eletrônica, rap/trap, funk experimental e pop. Pra gêneros
          mais tradicionais (sertanejo, gospel, samba), o material sai bom também, mas pedimos
          feedback pra calibrar.
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-q">E se eu cancelar? Meu EPK sai do ar?</div>
        <div class="faq-a">
          Seu EPK público (<code>plyo.fm/seunome</code>)
          <strong>fica no ar pra sempre no plano gratuito</strong>, mesmo se cancelar o plano pago.
          Só perde os recursos extras (releases ilimitados, kit de redes, cronograma). A gente não
          derruba o site de ninguém — sua URL é seu ativo, não nosso.
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-q">A música <em>toca</em> dentro do Plyo?</div>
        <div class="faq-a">
          Sim, via embed oficial do Spotify, Apple Music, YouTube ou SoundCloud. A gente não hospeda
          áudio próprio — isso protege seus direitos autorais e
          <strong>conta como stream oficial</strong> nas plataformas (você ganha royalty cada vez
          que alguém ouve no seu EPK).
        </div>
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
          A camada de preparação que faltava no seu lançamento. Pronto pra mandar pra onde quiser.
        </p>
      </div>
      <div class="footer-meta">
        © 2026 Plyo<br />
        Feito no Brasil · Pra quem solta som
      </div>
    </div>
  </div>
</footer>
