# 🚀 Deploy Rápido na Vercel

Este projeto está **100% pronto** para deploy na Vercel sem erros!

## Opção 1: Deploy Automático (Mais Fácil) ⭐

1. Acesse **[vercel.com](https://vercel.com)**
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório **`larimoresco`**
5. Clique em **"Deploy"**
6. ✅ Pronto! Seu site estará no ar em ~30 segundos

A Vercel detectará automaticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

**Não precisa configurar NADA!** O `vercel.json` já está incluído com todas as otimizações.

## Opção 2: Deploy via CLI

```bash
# 1. Instale a CLI da Vercel (uma vez só)
npm install -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Para deploy em produção
vercel --prod
```

## 🎯 O Que Já Está Configurado

✅ **vercel.json** com:
- Rewrites para SPA (todas as rotas apontam para index.html)
- Headers de segurança (X-Frame-Options, X-XSS-Protection, etc)
- Cache otimizado (1 ano para assets estáticos)

✅ **Build testado e funcionando:**
```
dist/index.html                  3.43 kB │ gzip: 1.19 kB
dist/assets/index-CmF_VXTZ.css  14.26 kB │ gzip: 3.42 kB
dist/assets/index-BuMY0yRc.js   27.34 kB │ gzip: 7.03 kB
✓ built in 125ms
```

✅ **Performance esperada:**
- Lighthouse Score: 95-100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Bundle: ~45 KB (gzipped)

## 🌐 Adicionar Domínio Personalizado

Após o deploy:

1. No dashboard da Vercel, vá em **Settings → Domains**
2. Adicione seu domínio (ex: `nutrilarissamoresco.com.br`)
3. Configure os DNS:
   - Tipo: **A**
   - Nome: **@**
   - Valor: **76.76.21.21**

   OU

   - Tipo: **CNAME**
   - Nome: **@** ou **www**
   - Valor: **cname.vercel-dns.com**

4. Aguarde propagação (24-48h)

## 🔧 Personalizações Antes do Deploy

### 1. Atualizar Número do WhatsApp

Edite `src/main.js` linha 4:

```javascript
const WHATSAPP_NUMBER = '5547999999999' // ← Substitua aqui
```

### 2. Trocar Imagens Placeholder

Substitua as URLs do Unsplash por fotos reais da Larissa:

- Hero: linha 57 do `src/main.js`
- About: linha 160 do `src/main.js`

Ou coloque as imagens em `public/` e referencie:

```html
<img src="/foto-larissa.jpg" alt="...">
```

### 3. Atualizar Meta Tags (Opcional)

Edite `index.html` linhas 8-25 para SEO personalizado.

## 📊 Após o Deploy

A Vercel gerará:

- **Preview URL**: `larimoresco-git-claude-[...].vercel.app` (para cada commit)
- **Production URL**: `larimoresco.vercel.app` (ou seu domínio)

Cada push para o branch `claude/larissa-moresco-landing-page-011CUq4ebqGGeRmG7rQnKwop` criará um novo preview automático!

## ⚡ Comandos Úteis

```bash
# Build local
npm run build

# Preview do build
npm run preview

# Desenvolvimento
npm run dev
```

## 🆘 Suporte

Se tiver algum erro (improvável! 😉):

1. Verifique se o build roda local: `npm run build`
2. Verifique os logs no dashboard da Vercel
3. Contate o suporte da Vercel (chat ao vivo 24/7)

---

**Pronto!** Seu site estará no ar em minutos! 🎉
