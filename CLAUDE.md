# CLAUDE.md — BeaSide Website Project

## Visão Geral

Site institucional da **BeaSide**, agência de comunicação estratégica e PR. O projeto replica fielmente os layouts fornecidos como screenshots. Cada página possui um screenshot de referência na pasta `/screenshots/`.

---

## Stack & Ferramentas

- **HTML5 + CSS3 + JavaScript vanilla** (sem frameworks, salvo indicação contrária)
- Fontes via **Google Fonts**: `Tenor Sans` (principal)
- Sem dependências externas desnecessárias

---

## Tipografia

| Uso | Fonte | Peso | Observações |
|-----|-------|------|-------------|
| Headlines, nav, labels | Tenor Sans | 400 | Única weight disponível |
| Body text | Tenor Sans | 400 | Letra-espaçamento suave |
| Botões, CTAs | Tenor Sans | 400 | Uppercase com letter-spacing |

```css
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');

body {
  font-family: 'Tenor Sans', serif;
}
```

---

## Paleta de Cores

```css
:root {
  --cream:        #F9F8F0;  /* background principal */
  --black:        #1A1A1A;  /* texto principal */
  --dark-brown:   #2C1A0E;  /* hero overlay, seções escuras */
  --warm-sand:    #C4A882;  /* acentos, bordas sutis */
  --card-dark:    #1E1510;  /* cards de serviço */
  --white:        #FFFFFF;  /* textos em fundos escuros */
  --grey-light:   #E8E7DF;  /* divisores, backgrounds alternativos */
}
```

**Regra geral:**
- Fundo padrão das seções: `--cream`
- Texto sobre fundo claro: `--black`
- Seções de destaque (hero, CTA final): fundo escuro `--dark-brown`, texto `--white`
- Cards de serviços: fundo `--card-dark`, texto `--white`

---

## Princípios de Layout

- **Max-width do container:** `1280px`, centralizado com `margin: 0 auto`
- **Padding lateral padrão:** `80px` (desktop) / `24px` (mobile)
- **Espaçamento entre seções:** `120px` vertical (desktop)
- Grid: CSS Grid e Flexbox nativos — sem frameworks CSS
- Layout fiel ao screenshot: respeitar proporções, alinhamentos e hierarquia visual

---

## Estrutura de Arquivos

```
/
├── index.html
├── CLAUDE.md
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.svg
│       └── [imagens por página]
├── screenshots/
│   ├── home.png
│   └── [outras páginas].png
└── pages/
    ├── metodo.html
    ├── servizi.html
    ├── collaborazioni.html
    ├── journal.html
    └── contatti.html
```

---

## Navegação (Nav)

- Logo `BeaSide` à esquerda (texto ou SVG)
- Links à direita: `Home · Metodo · Servizi · Collaborazioni · Journal · Contatti`
- Nav transparente sobre o hero
- Fonte uppercase, letter-spacing amplo
- position static

---

## Seções da Home (`index.html`)

Replicar exatamente conforme `/screenshots/screenshot_home.png`:

### 1. Hero
- background: background.png
- Headline: *"Strategia, non rumore"* — grande, serif, branco
- Subtítulo menor abaixo
- Elemento decorativo: assinatura cursiva `Bea` à direita
- Altura: `100vh`

### 2. Logos de Clientes
- Logos em linha horizontal: Burberry, Adidas, Gucci, Chanel, Zara, etc.
- Logos em branco/monocromático
- Padding vertical reduzido (~40px)

### 3. Apresentação BeaSide
- Duas colunas: logo/nome à esquerda, texto descritivo à direita
- Texto corrido, sem bullets

### 4. Servizi (Serviços)
- Título `Servizi` + subtítulo à esquerda
- Cards horizontais com swiper.js
- Cada card: background-image, título, descrição, link `Scopri >`
- Link `Scopri servizi >` abaixo dos cards

### 5. Way of Work
- Duas colunas: texto/accordion à esquerda, imagem à direita
- Accordion com 5 itens numerados (1–5)
- Imagem: foto de evento real
- Link `Scopri il metodo →` na lateral direita e embaixo, dentro da imagem 

### 6. Collaborazioni
- Fundo `--cream`
- Título + subtítulo
- Grid de 4 cards: fundo branco, sombra sutil, nome, texto curto, link `Scopri >`
- Link `Scopri collaborazioni >`

### 7. Journal
- Título + subtítulo à esquerda
- Cards de artigos em swiper.js
- Cada card: imagem, categoria badge, título, link `Scopri`
- Link `Scopri journal →`

### 8. CTA Final "Parliamo del tuo progetto"
- Fundo background.png
- Título grande à esquerda
- Botão/link `Iniziamo una conversazione` à direita
- Padding 60px 100px

### 9. Footer
- Fundo branco
- Logo `BeaSide` + tagline à esquerda
- Colunas de links: Studio, Servizi, Info
- Coluna de contato: endereço, email, telefone
- Social icons: facebook, x, instagram, whatsapp
- Copyright

---

## Componentes Reutilizáveis

### Botão / Link CTA
```css
.cta-link {
  font-family: 'Tenor Sans', serif;
  font-size: 13px;
  letter-spacing: 0.12em;
  color: var(--black);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
```

### Card de Serviço
- Padding interno `32px`
- Título branco, corpo branco com opacidade 0.7
- Hover: leve brilho ou borda

### Badge de Categoria (Journal)
- Pill pequeno, fundo branco
- Texto branco, uppercase, tamanho 10–11px

---

## Responsividade

| Breakpoint | Comportamento |
|-----------|---------------|
| `< 768px` | Single column, nav vira menu hamburger |
| `768–1024px` | 2 colunas onde aplicável |
| `> 1024px` | Layout completo conforme screenshot |

---

## Instruções de Trabalho para Claude

1. **Sempre consultar o screenshot** da página antes de escrever qualquer código
2. **Replicar proporções e hierarquia visual** com fidelidade — não inventar layouts
3. **Usar apenas as cores e fontes definidas** neste documento
4. **Não usar frameworks CSS** (Bootstrap, Tailwind) salvo indicação explícita
5. **Comentar seções no HTML** com o nome da seção (ex: `<!-- SECTION: Servizi -->`)
6. **Imagens placeholder:** usar `https://placehold.co/` com dimensões corretas enquanto assets reais não estiverem disponíveis
7. **Textos:** manter em italiano conforme os screenshots
8. **Acessibilidade mínima:** `alt` em todas as imagens, contraste adequado, `aria-label` em links sem texto visível

---

## O que NÃO fazer

- ❌ Não usar `Inter`, `Roboto`, `Arial` ou fontes genéricas
- ❌ Não inventar seções que não estejam no screenshot
- ❌ Não usar gradientes roxos ou estéticas genéricas de IA
- ❌ Não adicionar animações excessivas que não estejam implícitas no design
- ❌ Não quebrar o layout de referência por "melhorias" não solicitadas
