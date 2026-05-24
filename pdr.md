# PRD — Plyo

> **Documento:** Product Requirements Document
> **Produto:** Plyo
> **Versão:** 0.1 (pré-MVP)
> **Data:** Maio 2026
> **Status:** Discovery → Validação
> **Autor:** [seu nome]

---

## 1. Resumo executivo

**Plyo é um SaaS que automatiza o lançamento profissional de música para artistas independentes brasileiros.** Em poucos minutos, o produto gera EPK (Electronic Press Kit), release pra imprensa, lista curada de contatos, kit de redes sociais e cronograma de divulgação — tudo em português, com IA treinada no formato editorial brasileiro.

**A tese central:** assessoria de imprensa musical no Brasil cobra entre R$ 2.000 e R$ 8.000 por lançamento. O músico independente médio não pode pagar isso, mas tem vergonha de soar amador. Plyo entrega ~70% do mesmo resultado por 1% do preço (R$ 39/mês), graças à combinação de IA generativa + curadoria humana + foco em PT-BR.

**Estado atual:** ideia validada conceitualmente. Próximo passo é validar disposição a pagar com público real antes de qualquer código de produção.

---

## 2. Problema

### 2.1 Quem sofre

O músico independente brasileiro que:

- Lança entre 2 e 12 faixas por ano
- Faz tudo sozinho (composição, produção, marketing, distribuição)
- Não tem agente, assessor de imprensa nem empresário
- Sabe que precisa "se profissionalizar" mas não tem tempo nem dinheiro
- Usa DistroKid, ONErpm ou Tratore pra distribuição
- Já gasta R$ 50–200/mês em ferramentas digitais (Canva, ChatGPT, Linktree, etc.)

### 2.2 A dor concreta

Toda vez que vai lançar uma música, ele:

1. **Escreve release no Google Docs** copiando estrutura de outros artistas, sem saber se está bom
2. **Monta EPK precário no Canva** ou compartilha pasta no Drive (visualmente fraco, não profissional)
3. **Manda DM no Instagram** pra blogs e podcasts, geralmente sem resposta
4. **Posta no feed sem estratégia** definida, fica olhando engajamento baixo
5. **Sente que "tá faltando algo"** toda vez que compara com artistas com assessoria

O resultado: música boa que **morre por falta de apresentação profissional**.

### 2.3 Por que isso importa

- O Brasil tem mais de **500 mil artistas independentes ativos** distribuindo música digitalmente (estimativa baseada em dados de Tratore + DistroKid + ONErpm)
- A maior parte deles **nunca terá acesso a assessoria** pelos preços atuais
- A música deles é tão boa quanto a dos artistas com gravadora — falta só infraestrutura de apresentação
- IA generativa em 2026 já consegue produzir material de qualidade jornalística com prompt bem desenhado

---

## 3. Solução

### 3.1 Em uma frase

Plyo transforma o lançamento da sua música num kit profissional pronto pra impressionar imprensa, curadores e fãs — em minutos, não semanas.

### 3.2 Como funciona, em 3 passos

1. **Sobe a faixa** (MP3, WAV ou link do SoundCloud), a capa e responde 6 perguntas-chave sobre a música (gênero, referências, história, créditos, momento da carreira, próximo passo). Leva 2 minutos.

2. **Plyo gera o kit completo** em segundos: EPK web, release, lista de contatos, conteúdo de redes e cronograma. Leva 3 minutos pra revisar e ajustar.

3. **Solta no mundo:** compartilha link do EPK, dispara release com um clique, segue o cronograma de redes. Leva 5 min/dia ao longo do ciclo de 30 dias.

### 3.3 Posicionamento

| Quem é         | O que faz                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------ |
| **Plyo é**     | Camada de marketing e apresentação entre "música pronta" e "música lançada com profissionalismo" |
| **Plyo não é** | Distribuidor (você continua usando DistroKid/ONErpm), DAW, plataforma de streaming, gravadora    |

### 3.4 Proposta de valor única

> **"O músico independente não pode pagar R$ 5.000 numa assessoria. Mas pode pagar R$ 39 num app que entrega 70% do mesmo resultado."**

Três diferenciais defensáveis:

1. **IA generativa em PT-BR**, treinada na estrutura editorial brasileira (não tradução do gringo)
2. **Curadoria humana de imprensa BR** (banco de dados próprio de blogs, podcasts e curadores)
3. **Preço em real, pagamento via Pix** (sem dólar, sem cartão internacional)

---

## 4. Mercado e concorrência

### 4.1 Tamanho do mercado (estimativa)

- **TAM (mercado total endereçável):** ~500.000 músicos independentes ativos no Brasil
- **SAM (mercado servível):** ~150.000 que lançam música regularmente e gastam em ferramentas
- **SOM (mercado obtível em 3 anos):** ~5.000 clientes pagantes = ARR de R$ 2,3 milhões @ R$ 39/mês

### 4.2 Concorrência

#### Concorrentes diretos no Brasil

**Nenhum.** Não existe SaaS brasileiro que faça geração de EPK e release por IA em PT-BR.

#### Concorrentes indiretos

| Concorrente                   | O que faz                          | Por que Plyo vence                                              |
| ----------------------------- | ---------------------------------- | --------------------------------------------------------------- |
| **Bandzoogle**                | Construtor de site/EPK pra músicos | Em inglês, US$ 19,95/mês, sem IA generativa                     |
| **Sonicbids**                 | EPK + plataforma de booking        | Em inglês, US$ 5/mês (limitado), foco EUA                       |
| **ReverbNation**              | EPK + ferramentas pra músico       | Em inglês, modelo antigo, sem IA                                |
| **Canva + ChatGPT**           | Combinação remendada manual        | Não é vertical, sem lista de contatos BR, custo combinado maior |
| **Assessoria de imprensa BR** | Serviço humano profissional        | R$ 2.000–8.000/lançamento, fora do orçamento do nicho           |

#### Concorrentes adjacentes (não competem mas vivem ao lado)

- **DistroKid / ONErpm / Tratore:** distribuição (Plyo se integra, não substitui)
- **Linktree / Beacons:** smart link simples (Plyo já inclui essa camada)
- **Showband / Sua Música / Palco MP3:** booking e descoberta (Plyo serve de input pra eles)

### 4.3 Por que ninguém fez isso ainda

1. **Janela de oportunidade nova:** IA generativa só ficou boa o suficiente em PT-BR em 2024–2025
2. **Mercado pulverizado e de baixo ticket:** não interessa pra players globais grandes
3. **Curadoria de imprensa BR é trabalho braçal:** barrera natural de entrada
4. **Foco vertical é incomum:** mais fácil construir genérico (tipo Notion) do que específico

---

## 5. Personas

### 5.1 Persona primária — "Marina, a artista solo"

- **Idade:** 24–35
- **Localização:** capitais e regiões metropolitanas (SP, RJ, BH, POA, Recife)
- **Gênero musical:** indie, R&B, eletrônica, MPB alternativa, rap
- **Renda:** R$ 2.500–6.000/mês (mistura música + outro trabalho)
- **Lança:** 3–8 singles por ano + 1 EP a cada 2 anos
- **Ferramentas que já usa:** DistroKid, Canva, ChatGPT, Linktree, CapCut, Instagram, TikTok
- **Frustração principal:** "Eu sei que minha música é boa, mas quando comparo meu lançamento com o de gente com gravadora, parece amador"
- **Disposição a pagar:** R$ 30–50/mês confortavelmente

### 5.2 Persona secundária — "Banda Pequenina"

- **Composição:** 3–5 integrantes
- **Estágio:** já tocaram em casas pequenas e festivais regionais, querem dar próximo passo
- **Frustração:** divisão de tarefas confusa, ninguém quer ser o "do marketing"
- **Disposição a pagar:** R$ 70–100/mês (dividido entre integrantes)

### 5.3 Persona terciária — "Selo independente DIY"

- **Tamanho:** 5–20 artistas no roster
- **Frustração:** trata cada artista no manual, demora pra escalar
- **Disposição a pagar:** R$ 200–500/mês (plano agência futuro)

---

## 6. Funcionalidades

### 6.1 MVP (V1) — lançamento em 6 semanas

**Princípio do MVP:** entregar **uma** dor de cabeça resolvida com profundidade, não 5 superficiais.

| #   | Feature                       | Descrição                                                                                    | Por que é MVP                      |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1   | **Onboarding do artista**     | Cadastro com perfil básico, gênero, links de streaming, fotos                                | Fundação                           |
| 2   | **Geração de EPK por IA**     | Página web responsiva em `plyo.fm/[slug]` com bio (3 versões), player, fotos, links, contato | Dor #1                             |
| 3   | **Geração de release por IA** | Texto pronto pra imprensa, formato jornalístico BR, 3 versões (curto/médio/longo)            | Dor #2                             |
| 4   | **Editor de revisão**         | Usuário ajusta tom, regenera trechos, troca palavras                                         | Sem isso, IA fica "fechada" demais |
| 5   | **Export PDF do mídia kit**   | Versão PDF do EPK pra anexar em e-mail                                                       | Imprensa ainda pede PDF            |
| 6   | **Painel simples**            | Lista de lançamentos do artista, edição posterior                                            | Gestão básica                      |
| 7   | **Sistema de assinatura**     | Stripe + Pix, plano Free e Solo (R$ 39)                                                      | Monetização                        |

**Fora do MVP** (pra V2/V3): lista de contatos de imprensa, kit de redes sociais, cronograma de 30 dias, follow-up automático, integração com distribuidores, plano Banda.

### 6.2 V2 (3 meses após lançamento)

- **Lista curada de contatos de imprensa** segmentada por gênero (a feature mais valiosa, mas a mais cara de construir — exige curadoria humana contínua)
- **Pitch personalizado por contato** ("Notei que vocês cobriram X, achei que Y poderia interessar porque...")
- **Disparo de e-mails direto da plataforma** com tracking de abertura
- **Plano Banda** (R$ 79/mês, múltiplos artistas no painel)

### 6.3 V3 (6 meses após lançamento)

- **Kit de redes sociais:** legendas em 3 tons, hashtags por gênero, roteiros de Reels
- **Cronograma de 30 dias** automático (teaser → pre-save → drop → follow-up)
- **Integração com DistroKid/ONErpm** pra puxar dados de release
- **Detecção de menções** via Google Alerts + scraping

### 6.4 V4+ (futuro)

- Plano Selo (R$ 299/mês, 20+ artistas)
- Analytics agregado (quantos blogs cobriram, streams estimados)
- Marketplace de fotógrafos, mixers e produtores parceiros
- Expansão para mercado latino (espanhol)

---

## 7. Stack técnica

### 7.1 Princípios

- **Velocidade > sofisticação:** stack que você consegue fazer deploy em horas, não dias
- **Custo baixo no início:** tudo com tier gratuito até ter pagantes
- **Familiar:** preferir tecnologias maduras com comunidade grande
- **IA-first:** todo o pipeline pensado pra usar APIs de LLM

### 7.2 Stack proposta

| Camada                       | Tecnologia                                     | Por quê                                              |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| **Frontend**                 | Next.js 15 (App Router) + Tailwind + shadcn/ui | Padrão de mercado, SSR pra SEO das páginas de EPK    |
| **Backend**                  | Next.js API Routes + Server Actions            | Sem servidor separado no início                      |
| **Banco**                    | Supabase (Postgres)                            | Auth + DB + Storage num lugar, generoso no free tier |
| **Auth**                     | Supabase Auth                                  | Email + Google + magic link                          |
| **Storage de áudio/imagens** | Supabase Storage ou Cloudflare R2              | R2 mais barato em escala                             |
| **IA — texto**               | Claude API (Anthropic)                         | Melhor pra PT-BR e instruções longas                 |
| **IA — backup**              | OpenAI GPT-4o                                  | Fallback se Claude falhar                            |
| **PDF generation**           | React-PDF ou Puppeteer                         | Pra mídia kit                                        |
| **Pagamento**                | Stripe + Mercado Pago (Pix)                    | Stripe internacional, MP pra Pix                     |
| **E-mail transacional**      | Resend                                         | Simples, bom DX, free tier ok                        |
| **Hosting**                  | Vercel                                         | Deploy 1-clique pra Next.js                          |
| **Domínio**                  | `plyo.fm` (preferido) ou `plyo.app`            | Próximo passo: checar disponibilidade                |
| **Analytics**                | PostHog                                        | Open source, eventos + funnels + heatmaps            |
| **Error tracking**           | Sentry                                         | Free tier resolve no início                          |

### 7.3 Custos estimados de infraestrutura

**Até 100 usuários ativos:**

- Vercel: R$ 0 (Hobby) ou R$ 100/mês (Pro)
- Supabase: R$ 0 (Free tier)
- Claude API: ~R$ 5/usuário ativo/mês = R$ 500/mês
- Resend: R$ 0 (Free tier)
- Stripe + Mercado Pago: ~5% sobre receita

**Total mensal:** R$ 600 fixo + variável proporcional ao uso

**Margem bruta no plano Solo (R$ 39):** ~85% após pagar IA e infra.

---

## 8. Modelo de negócio

### 8.1 Planos

| Plano             | Preço      | Pra quem            | Inclui                                                            |
| ----------------- | ---------- | ------------------- | ----------------------------------------------------------------- |
| **Demo**          | R$ 0       | Pra testar          | 1 EPK, release com marca d'água, 5 contatos (V2)                  |
| **Solo**          | R$ 39/mês  | Músico independente | EPKs ilimitados, releases sem marca, lista completa, kit de redes |
| **Banda**         | R$ 79/mês  | Bandas e duplas     | Tudo do Solo + múltiplos artistas, divisão financeira             |
| **Selo** (futuro) | R$ 299/mês | Selos pequenos      | Tudo + 20 artistas, suporte prioritário, analytics avançado       |

### 8.2 Modelo financeiro (cenário base, ano 1)

| Mês | Pagantes | MRR       | Custo IA + infra | Lucro bruto |
| --- | -------- | --------- | ---------------- | ----------- |
| M1  | 20       | R$ 780    | R$ 700           | R$ 80       |
| M3  | 80       | R$ 3.120  | R$ 1.000         | R$ 2.120    |
| M6  | 200      | R$ 7.800  | R$ 1.500         | R$ 6.300    |
| M9  | 500      | R$ 19.500 | R$ 3.000         | R$ 16.500   |
| M12 | 1.000    | R$ 39.000 | R$ 5.500         | R$ 33.500   |

**Marca de break-even pra um operador solo:** ~80 pagantes (~mês 3).

### 8.3 Métricas-chave (North Star)

- **North Star:** lançamentos completados/mês (proxy de uso real, não só cadastro)
- **Secundárias:** MRR, churn mensal (alvo <5%), CAC, LTV
- **Antimetrics:** cadastros sem completar primeiro EPK (sinal de fricção no onboarding)

---

## 9. Roadmap e cronograma

### 9.1 Fase 1 — Validação (semanas 1–2)

- [ ] Landing page no ar (✅ já existe)
- [ ] Formulário de waitlist funcional (Tally, Formspree ou Google Forms)
- [ ] Postagem em 10 grupos de músicos BR (Facebook, Telegram, Discord)
- [ ] 20 conversas qualitativas em DM
- [ ] Meta: 100 inscritos + 5 entrevistas com perguntas de willingness-to-pay

**Critério de avanço:** se 100+ se inscreverem e 5+ entrevistados disserem "pagaria hoje", segue. Senão, pivota.

### 9.2 Fase 2 — MVP (semanas 3–8)

- [ ] Semana 3–4: setup do projeto, auth, banco, deploy
- [ ] Semana 5: feature 1 e 2 (onboarding + geração EPK)
- [ ] Semana 6: feature 3 e 4 (release + editor)
- [ ] Semana 7: feature 5, 6, 7 (PDF + painel + pagamento)
- [ ] Semana 8: bug fixing, polimento, onboarding dos primeiros usuários

### 9.3 Fase 3 — Beta fechado (semanas 9–12)

- [ ] Convidar 50 da waitlist pra beta gratuito
- [ ] Coletar feedback intensivo (1 call por semana)
- [ ] Iterar features 1–7 baseado no uso real
- [ ] Mensurar: % que completa primeiro EPK, satisfação (NPS)

### 9.4 Fase 4 — Lançamento público (mês 4)

- [ ] Abrir cadastro pago
- [ ] Campanha de marketing (orgânico em redes + parcerias com micro-influenciadores do meio)
- [ ] Meta: 100 pagantes em 30 dias

### 9.5 Fase 5 — V2 (meses 5–7)

- Construir lista curada de contatos BR
- Lançar plano Banda
- Sistema de envio de release com tracking

### 9.6 Fase 6 — V3 (meses 8–10)

- Kit de redes sociais
- Cronograma de 30 dias
- Integrações com distribuidores

---

## 10. Riscos e mitigações

| Risco                                               | Probabilidade | Impacto | Mitigação                                                                 |
| --------------------------------------------------- | ------------- | ------- | ------------------------------------------------------------------------- |
| **Disposição a pagar menor que o esperado**         | Alta          | Crítico | Validar com 30+ entrevistas antes de codar                                |
| **Qualidade do output da IA não convencer músicos** | Média         | Alto    | Investir pesado em prompt engineering + revisão humana opcional           |
| **Lista de contatos fica desatualizada rápido**     | Alta          | Médio   | Sistema de comunidade pra usuários reportarem mudanças + curadoria mensal |
| **Concorrente gringo lança versão BR**              | Baixa         | Alto    | Mover rápido, construir base de usuários e dados antes                    |
| **OpenAI/Anthropic mudam preços de API**            | Média         | Médio   | Manter fallback entre provedores, otimizar uso de tokens                  |
| **Churn alto (músico cancela após 1 lançamento)**   | Alta          | Crítico | Construir features que ancoram (EPK fica no ar, histórico de lançamentos) |
| **Direitos autorais / questões legais**             | Média         | Alto    | Termos claros: usuário é dono do conteúdo, Plyo é ferramenta              |

---

## 11. Métricas de sucesso

### 11.1 Métricas de validação (fase 1)

- [ ] 100+ inscritos na waitlist em 30 dias
- [ ] 5+ entrevistas qualitativas com "pagaria hoje"
- [ ] CAC orgânico < R$ 20 nas primeiras campanhas

### 11.2 Métricas de produto (fase 2-3)

- [ ] 60%+ dos cadastros completam o primeiro EPK
- [ ] NPS > 40 entre beta testers
- [ ] Tempo médio "upload → kit gerado" < 5 minutos

### 11.3 Métricas de negócio (fase 4+)

- [ ] 100 pagantes em 30 dias após lançamento
- [ ] Churn mensal < 7% (excelente seria < 5%)
- [ ] MRR de R$ 10.000 no mês 6
- [ ] MRR de R$ 30.000 no mês 12

---

## 12. Decisões em aberto

Coisas que precisam ser definidas antes do desenvolvimento:

1. **Domínio definitivo:** `plyo.fm`, `plyo.app` ou `getplyo.com`? (depende de disponibilidade e custo)
2. **Plataforma de pagamento principal:** Stripe ou Mercado Pago primeiro? (provavelmente MP pelo Pix)
3. **Modelo do EPK:** template único elegante ou múltiplos templates? (sugiro: 1 perfeito > 5 medianos no MVP)
4. **Inglês desde o V1?** (sugiro: foco total em PT-BR no início, internacionalização depois)
5. **Time:** solo founder ou buscar cofundador técnico? (a stack proposta é solo-friendly)
6. **Captação:** bootstrap até MRR R$ 10k ou buscar pré-seed antes? (sugiro: bootstrap, evita diluição)

---

## 13. Apêndice

### 13.1 Glossário

- **EPK (Electronic Press Kit):** página web ou PDF com bio, fotos, música e contato do artista, usado pra apresentação à imprensa, festivais e contratantes
- **Release / Press Release:** texto no formato jornalístico que comunica um lançamento à imprensa
- **Smart link:** link único que redireciona o usuário pra plataforma de streaming preferida dele (Spotify, Apple Music, etc.)
- **Pre-save:** funcionalidade que permite o fã "salvar antecipadamente" uma música antes do lançamento

### 13.2 Referências de produto

- [Bandzoogle](https://bandzoogle.com) — construtor de EPK gringo
- [Sonicbids](https://sonicbids.com) — EPK + booking gringo
- [Showband](https://showband.com.br) — booking BR
- [Tratore](https://tratore.com.br) — distribuidora BR

### 13.3 Referências editoriais brasileiras

Veículos de imprensa musical brasileira que devem estar no banco de contatos da V2:

- Tenho Mais Discos Que Amigos
- Monkeybuzz
- Noize
- Embrulhador
- Mondo Tunes
- Rap Mídia
- Rolling Stone Brasil
- Música Instantânea (podcast)
- Volume Morto (podcast)

### 13.4 Histórico de revisões

| Versão | Data      | Mudanças              | Autor   |
| ------ | --------- | --------------------- | ------- |
| 0.1    | Maio/2026 | Versão inicial do PRD | [autor] |

---

**Status:** este documento é vivo. Atualize conforme o produto evolui — especialmente as seções 6 (funcionalidades), 9 (roadmap) e 10 (riscos).
