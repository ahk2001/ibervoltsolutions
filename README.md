# ⚡ IberVolt Solutions — Website Institucional & Landing Page

Website institucional e comercial de alto padrão da **IberVolt Solutions** (Engenharia Elétrica de Alta Performance em Valência, Espanha). Projeto desenvolvido com foco em estética *Architectural Luxury / Industrial Tech*, conformidade técnica (REBT, NR-10, NR-35) e suporte multilíngue dinâmico (Português, Espanhol e Inglês).

---

## 📁 Estrutura do Projeto

```text
ibervolt-solutions/
│
├── assets/                     # Recursos estáticos otimizados
│   └── images/                 # Identidade visual, fotos de engenharia e mapas
│       ├── favicon.png         # Ícone de favoritos da aba do navegador
│       ├── logo.png            # Logo oficial transparente de alta resolução
│       ├── hero-engenharia.jpg # Imagem de cabeçalho / Hero
│       ├── mapa-valencia.jpg   # Mapa de cobertura de atendimento em Valência
│       ├── projeto-termografia.jpg # Pilar 01: Manutenção & Inspeção Térmica
│       ├── projeto-residencial.jpg # Pilar 02: Retrofit & Reforma Elétrica
│       ├── projeto-painel.jpg      # Pilar 03: Montagem de Quadros QDLF
│       └── projeto-fabricacao.jpg  # Pilar 04: Fabricação Customizada
│
├── docs/                       # Especificações e diretrizes técnicas do projeto
│   └── ibervolt_doc.md         # Blueprint completo de arquitetura, cores e redação
│
├── index.html                  # Código-fonte principal da aplicação web
├── robots.txt                  # Diretivas de rastreamento para buscadores (SEO)
├── sitemap.xml                 # Mapa do site indexável para o Google
├── .gitignore                  # Regras de exclusão de arquivos de sistema e temporários
└── README.md                   # Documentação do repositório e guia de publicação
```

---

## 🚀 Como Publicar / Fazer o Deploy

O site foi estruturado sem dependências de compilação (*zero build step*), o que possibilita deploy instantâneo em qualquer plataforma de hospedagem moderna:

### Opção 1: Vercel / Netlify / Cloudflare Pages (Recomendado)
1. Faça o upload ou push desta pasta para o seu repositório (GitHub / GitLab).
2. Conecte o repositório na **Vercel** ou **Netlify**.
3. Deixe o diretório raiz como `./` (sem comandos de build). O deploy será concluído em segundos.

### Opção 2: Netlify Drop (Arrastar e Soltar)
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arraste toda a pasta do projeto diretamente para o navegador. O site ficará no ar imediatamente.

### Opção 3: Hospedagem Tradicional (cPanel / Apache / Nginx / FTP)
1. Conecte-se ao seu servidor via FTP ou Gerenciador de Arquivos do cPanel.
2. Copie os arquivos da pasta raiz diretamente para a pasta pública (`public_html` ou `/var/www/html/`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Acessibilidade, SEO otimizado com Open Graph e Twitter Cards.
- **Tailwind CSS (CDN):** Estilização moderna e responsiva sob o tema Dark Obsidian (`#050505`) e Electric Yellow (`#FFE600`).
- **Google Fonts:** Tipografia arquitetônica Syne, Plus Jakarta Sans e JetBrains Mono.
- **Lucide Icons:** Biblioteca vetorial de ícones minimalistas (versão fixada para segurança de CDN).
- **JavaScript Vanilla:** Sistema de internacionalização (i18n), efeitos de canvas geométrico, parallax e console dinâmico.

---

## 🔒 Segurança da Aplicação (Security Hardening)

O projeto foi blindado com práticas recomendadas de segurança web defensiva:

1. **Cabeçalhos de Segurança HTTP (CSP, HSTS, X-Frame-Options):**
   - Configurações prontas incluídas para **Vercel** (`vercel.json`), **Netlify/Cloudflare** (`_headers`) e **Apache/cPanel** (`.htaccess`).
   - `Content-Security-Policy (CSP)` restritivo para bloquear injeções de script externo não autorizadas.
   - `X-Frame-Options: DENY` e proteção JavaScript contra ataques de Clickjacking / Framing malicioso.
   - `X-Content-Type-Options: nosniff` contra ataques de MIME sniffing.
   - `Referrer-Policy: strict-origin-when-cross-origin` para prevenir vazamento de dados via cabeçalho Referer.

2. **Segurança de Formulário & Prevenção de Abuso:**
   - **Sanitização de Input (Anti-XSS):** Filtro rigoroso de caracteres `<>` e caracteres de controle no preenchimento do formulário.
   - **Armadilha Anti-Bot (Honeypot):** Campo invisível a humanos que intercepta e descarta envios automatizados de robôs.
   - **Limitação de Taxa (Rate Limiting / Cooldown):** Prevenção contra disparos repetidos ou inundações no WhatsApp via cooldown do botão.
   - **Limites de Tamanho (`maxlength`):** Restrição de tamanho em todos os campos de texto.

3. **Proteção de Links e Cadeia de Suprimentos (Supply Chain):**
   - Todos os links externos (`target="_blank"`) utilizam `rel="noopener noreferrer"` para impedir ataques de *Reverse Tabnabbing*.
   - Versão da biblioteca de ícones fixada (`lucide@1.48.0`) evitando surpresas por alterações não homologadas em CDNs públicas.
   - Arquivos internos de documentação (`docs/`) e temporários bloqueados no `robots.txt` e no `.htaccess`.

---

## 📄 Licença e Propriedade
© 2026 **IberVolt Solutions**. Todos os direitos reservados.
