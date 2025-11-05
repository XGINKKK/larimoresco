# Landing Page - Larissa Moresco Nutricionista

Landing page ultra moderna e de alta conversão para a nutricionista Larissa Moresco (CRN10 10005), especializada em Nutrição Clínica e Esportiva.

## 🎯 Sobre o Projeto

Landing page desenvolvida com **Vite.js**, focada em conversão e experiência do usuário. O design é moderno, responsivo e otimizado para todos os dispositivos, com animações suaves e interatividade fluida.

### Características Principais

- ✨ Design ultra moderno com gradientes suaves
- 🎨 Paleta de cores acolhedora (rosa/bege/pêssego)
- 📱 100% Responsivo (Mobile First)
- 🚀 Performance otimizada
- ♿ Acessibilidade (ARIA labels, navegação por teclado)
- 🎭 Animações e microinterações
- 📊 SEO otimizado com Schema Markup
- 💬 Integração completa com WhatsApp

## 🛠️ Tecnologias Utilizadas

- **Vite.js** - Build tool moderna e rápida
- **Vanilla JavaScript** - Sem dependências pesadas
- **CSS3** - Design system completo com variáveis CSS
- **HTML5 Semântico** - Estrutura otimizada para SEO
- **Google Fonts** - Cormorant Garamond + Poppins

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd larimoresco

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### Build para Produção

```bash
# Gera build otimizado na pasta dist/
npm run build

# Preview do build de produção
npm run preview
```

## 🎨 Design System

### Cores

```css
--primary: #E8B4B8      /* Rosa suave */
--secondary: #F5E6D3    /* Bege/Pêssego */
--accent: #D4A5A5       /* Rosa médio (CTAs) */
--dark: #3D3D3D         /* Textos */
--light: #FDFBF7        /* Backgrounds */
--success: #A8C5A8      /* Verde suave */
--gradient: linear-gradient(135deg, #E8B4B8 0%, #F5E6D3 100%)
```

### Tipografia

- **Display (Títulos grandes)**: Cormorant Garamond, 700
- **Headings (Subtítulos)**: Poppins, 600-700
- **Body (Textos)**: Poppins, 300-400

### Espaçamento

```css
--space-xs: 8px
--space-sm: 16px
--space-md: 32px
--space-lg: 64px
--space-xl: 96px
```

## 📄 Estrutura de Seções

1. **Hero Section** - Primeira impressão com CTA principal
2. **Prova Social** - Números e credenciais
3. **Problemas** - Identificação com o público
4. **Soluções** - Como a Lari resolve os problemas
5. **Sobre** - Apresentação humanizada
6. **Como Funciona** - Timeline do processo
7. **Planos** - Opções de investimento
8. **Benefícios** - O que está incluso
9. **FAQ** - Perguntas frequentes com accordion
10. **CTA Final** - Chamada para ação com urgência suave
11. **Footer** - Informações de contato e links

## 🔧 Customização

### Alterar Número do WhatsApp

Edite a constante no arquivo `src/main.js`:

```javascript
const WHATSAPP_NUMBER = '5547999999999' // Substitua pelo número real
```

### Alterar Imagens

As imagens estão usando Unsplash como placeholder. Substitua pelas fotos reais da Larissa:

```html
<!-- Hero Image -->
<img src="https://images.unsplash.com/photo-..." alt="...">
<!-- Substitua por: -->
<img src="/caminho/para/foto-larissa.jpg" alt="...">
```

Coloque as imagens na pasta `public/` e referencie sem a barra inicial:

```html
<img src="larissa-hero.jpg" alt="Larissa Moresco">
```

### Adicionar Favicon

Coloque o favicon na pasta `public/` e atualize o `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🎯 Funcionalidades JavaScript

### Animações ao Scroll

Todas as seções com classe `.fade-in` são animadas quando entram na viewport usando `IntersectionObserver`.

### Menu Mobile

Hamburger menu funcional com transições suaves.

### FAQ Accordion

Perguntas expansíveis com apenas uma aberta por vez.

### Contador Animado

Números animados na seção de prova social.

### Scroll to Top

Botão que aparece após rolar 500px.

### Navegação Sticky

Menu fixo que aparece com background blur ao rolar.

### Smooth Scroll

Navegação suave entre seções com offset para o header fixo.

## 📱 Responsividade

Breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

A abordagem é **Mobile First**, com todos os estilos otimizados primeiro para mobile e então expandidos para telas maiores.

## 🔍 SEO

### Meta Tags Incluídas

- ✅ Title e Description otimizados
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org LocalBusiness markup
- ✅ Canonical URL
- ✅ Alt text em todas as imagens
- ✅ Estrutura semântica HTML5

### Melhorias Recomendadas

1. Adicionar `robots.txt`
2. Criar `sitemap.xml`
3. Configurar Google Analytics / Tag Manager
4. Adicionar meta tags de verificação (Google Search Console, etc)
5. Implementar lazy loading para imagens below-the-fold

## 🚀 Performance

### Otimizações Aplicadas

- ✅ CSS minificado em produção
- ✅ JavaScript minificado
- ✅ Fontes otimizadas com `preconnect`
- ✅ Imagens com lazy loading
- ✅ Smooth scroll com `requestAnimationFrame`
- ✅ Intersection Observer para animações

### Melhorias Recomendadas

1. Comprimir e otimizar imagens (WebP, AVIF)
2. Adicionar service worker para PWA
3. Implementar estratégia de cache
4. Code splitting se crescer muito

## 🎨 Componentes Reutilizáveis

### Botões

```html
<!-- Primary Button -->
<a href="#" class="btn btn-primary">Texto</a>

<!-- Secondary Button -->
<a href="#" class="btn btn-secondary">Texto</a>

<!-- Large Button -->
<a href="#" class="btn btn-primary btn-lg">Texto Grande</a>
```

### Cards

```html
<div class="card">
  <div class="card-icon">🎯</div>
  <h3 class="card-title">Título</h3>
  <p class="card-text">Descrição</p>
</div>
```

### Badges

```html
<span class="badge">Badge Normal</span>
<span class="badge badge-success">Badge Sucesso</span>
```

## 📞 Contato e Informações

- **Nome**: Larissa Moresco (Lari)
- **CRN**: CRN10 10005
- **Especialidade**: Nutrição Clínica e Esportiva
- **Instagram**: [@nutrilarissamoresco](https://instagram.com/nutrilarissamoresco)
- **Linktree**: [linktr.ee/nutrilarissamoresco](https://linktr.ee/nutrilarissamoresco)
- **Localização**: Penha/SC

## 📝 Licença

Este projeto foi desenvolvido especificamente para Larissa Moresco. Todos os direitos reservados.

## 🤝 Contribuição

Para sugestões ou melhorias, entre em contato com a equipe de desenvolvimento.

---

Desenvolvido com ❤️ para transformar vidas através da nutrição.
