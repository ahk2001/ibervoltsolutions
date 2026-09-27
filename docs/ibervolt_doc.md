# ⚡ DOCUMENTO BASE DE CRIAÇÃO DO SITE (SPECIFICATION BLUEPRINT)

**Projeto:** Website Institucional & Landing Page High-End
**Empresa:** IberVolt Solutions
**Conceito Selecionado:** Architectural Luxury / Industrial Tech
**Plataforma de Desenvolvimento:** Antigravity

## 1. DIREÇÃO DE ARTE & IDENTIDADE VISUAL

### 1.1. Conceito Visual & Estética

* **Nome de Posicionamento:** IberVolt Solutions // High-Performance Electrical Engineering.

* **Estética Geral:** High-End Architectural / Editorial Minimalista.

* **Sensação Transmitida:** Sofisticação discreta, engenharia cirúrgica, exclusividade, arquitetura contemporânea e alta confiabilidade técnica.

* **Público Impactado:** Proprietários de residências/pisos de alto padrão, investidores de Airbnb, gestores de hotéis, diretores de colégios, comerciantes e indústrias em Valência e região.

* **Linguagem Visual:** Fundo escuro profundo estilo obsidiana, uso generoso de espaço negativo (respiro), tipografia artística marcante com palavras em itálico elegante, acentos em amarelo elétrico nobre e superfícies translúcidas com acabamento focado em elegância sóbria.

### 1.2. Paleta de Cores

* **Fundo Principal (Dark Obsidian):** `#050505` (RGB: 5, 5, 5). Ausência total de ruído visual, proporcionando profundidade e contraste elevado.

* **Fundo de Cards & Seções (Graphite Glass):** `#0D0D0D` / `rgba(13, 13, 13, 0.60)` com `backdrop-filter: blur(16px)` e borda sutil `rgba(255, 255, 255, 0.08)`.

* **Cor de Acento / Destaque VIP (Electric Gold Yellow):** `#FFE600` (RGB: 255, 230, 0). Utilizado exclusivamente em botões de conversão (CTAs), ícones principais, detalhes em itálico de destaque e estados ativos.

* **Gradiente Nobre de Acento (Opção de Destaque):** `linear-gradient(135deg, #FFFFFF 0%, #FFE600 60%, #FFB800 100%)`. Aplicado em títulos principais e selos especiais.

* **Texto Primário (Pure White):** `#FFFFFF`. Aplicado em títulos, chamadas de alto impacto e botões.

* **Texto Secundário / Corpo (Muted Platinum):** `#A1A1AA` (RGB: 161, 161, 170). Aplicado em parágrafos, especificações técnicas e descrições, garantindo leitura descansada.

* **Linhas e Divisórias:** `#1F1F22` / `rgba(255, 230, 0, 0.15)` para micro-acentos de borda.

### 1.3. Tipografia Oficial

* **Importação Google Fonts:** `Syne` + `Plus Jakarta Sans` + `JetBrains Mono`.

* **Tipografia de Títulos & Destaques (Display Headings):** `Syne`

  * Característica: Geométrica, moderna, expressiva e artística.

  * Pesos em Uso: `Bold (700)` para palavras de impacto e `Light Italic` para o contraste de luxo (ex: "*Engenharia de Precisão*").

  * Letter-spacing: `-0.03em` (compacto e elegante).

* **Tipografia de Corpo, Menu & Subtítulos:** `Plus Jakarta Sans`

  * Característica: Limpa, contemporânea e de altíssima legibilidade em telas de alta resolução.

  * Pesos em Uso: `Light (300)` para corpo de texto, `Regular (400)` para descrições e `SemiBold (600)` para botões e links.

* **Tipografia de Suporte / Dados Técnicos:** `JetBrains Mono`

  * Característica: Monospaçada técnica.

  * Uso: Codificação de normas, certificações NR, indicação de região e especificações elétricas.

### 1.4. Estilo de Elementos Visuais & Micro-interações

* **Bordas & Cantos (Border Radius):**

  * Botões Primários (CTAs): Pílulas totalmente arredondadas (`rounded-full` / `9999px`).

  * Cards e Contêineres de Serviço: Cantos suaves e modernos (`rounded-3xl` / `24px`).

  * Badges e Tags: Pílulas pequenas (`rounded-full` com padding `px-4 py-1.5`).

* **Efeitos de Iluminação (Glow & Glassmorphism):**

  * Brilho Amarelo sutil: `box-shadow: 0 0 35px rgba(255, 230, 0, 0.20)` em hover de cards e botões principais.

  * Placas Flutuantes: Fundo translúcido com desfoque `backdrop-blur-xl` e borda ultrafina de `1px` em `rgba(255, 230, 0, 0.25)`.

* **Estilo dos Botões de Ação (CTAs):**

  * CTA Primário (WhatsApp Comercial): Preenchimento em Amarelo Elétrico `#FFE600`, texto em Preto Absoluto `#000000`, fonte `Plus Jakarta Sans Bold`, elevação suave (`scale: 1.02`) ao passar o mouse.

  * CTA Secundário (Consultar Serviços): Formato transparente com borda fina de `1px` em `#262626`, texto em Branco `#FFFFFF`, alterando a borda para `#FFE600` no hover.

* **Iconografia:** Ícones vetoriais em traços finos (estilo *Lucide Icons*, espessura `1.5px`), na cor Amarelo Elétrico com fundo em círculo de opacidade `10%` (`bg-brand-yellow/10`).

## 2. ARQUITETURA E ESTRUTURA DA PÁGINA

### 2.1. Header / Navegação Principal

* **Logo:** IberVolt Solutions com ícone discreto de engenharia.

* **Menu de Navegação:**

  * `01. Especialidades` (Manutenção, Reformas, Painéis)

  * `02. Venda de Painéis` (Sob Encomenda)

  * `03. Certificações & Normas` (NR-10, NR-10 SEP, NR-35)

  * `04. Áreas Atendidas` (Valência e Região)

* **Ação Direta no Header:** Botão CTA em formato pílula Amarelo Elétrico: *"Contato Directo WhatsApp"*.

### 2.2. Hero Section (Apresentação Principal)

* **Tag de Topo (Badge Técnico):** `[ ATENDIMENTO EM VALÊNCIA E REGIÃO // CERTIFICADO NR-10 & NR-35 ]` em fonte monospaçada e fundo translúcido com borda amarela.

* **Título Principal (Headline H1):**

  * "Engenharia Elétrica de Precisão. 

    Segurança Absoluta para o seu Imóvel."

* **Subtítulo:**

  * *"Soluções elétricas de alta performance para residências, edifícios, hotéis, colégios e indústrias em Valência e arredores. Da manutenção preventiva ao projeto de painéis sob medida."*

* **Chamadas para Ação (CTAs da Hero):**

  * Botão Principal: *"Solicitar Orçamento via WhatsApp"* (Atendimento comercial direto).

  * Botão Secundário: *"Conhecer Nossos Serviços"*.

* **Elemento Visual de Apoio:** Card translúcido flutuante com especificações diretas:

  * Certificações Oficiais NR-10, SEP e NR-35

  * Cobertura em Valência e Arredores

  * Projetos Customizados para Residencial, Comercial e Industrial

### 2.3. Seção de Especialidades & Serviços (4 Pilares Oficiais)

* **Pilar 1: Manutenção Preventiva e Corretiva**

  * Foco: Identificação e solução imediata de falhas, curtos, sobrecargas e diagnóstico preventivo para evitar interrupções operacionais e riscos elétricos.

* **Pilar 2: Reforma de Instalações Elétricas em Geral**

  * Foco: Modernização completa da fiação e quadros elétricos em residências (casas/pisos), imóveis de locação/Airbnb, estabelecimentos comerciais, colégios e hotéis.

* **Pilar 3: Montagem e Reforma de Painéis Elétricos**

  * Foco: Adequação e reestruturação de quadros de distribuição elétricos para ambientes residenciais, comerciais e industriais dentro dos rígidos padrões normativos.

* **Pilar 4: Venda de Painéis Elétricos Sob Encomenda**

  * Foco: Projetos e montagens personalizadas de painéis elétricos customizados segundo a necessidade e especificação exata fornecida pelo cliente.

### 2.4. Seção "Rigidez Técnica & Certificações de Segurança"

* **Conceito:** Demonstrar autoridade técnica, segurança operacional e cumprimento rigoroso das normas técnicas.

* **Badges de Certificação em Destaque:**

  * NR-10: Segurança em Instalações e Serviços em Eletricidade.

  * NR-10 SEP: Segurança no Sistema Elétrico de Potência (Alta Voltagem).

  * NR-35: Capacitação e Segurança para Trabalhos em Altura.

* **Galeria de Equipamentos e Equipe:** Espaço dedicado para fotos reais de instalações finalizadas, painéis montados e profissionais paramentados com EPIs de segurança.

### 2.5. Seção de Clientes Atendidos & Setores de Atuação

* **Módulos de Atuação:**

  * Residencial & Airbnb: Apartamentos, casas e gestão de imóveis turísticos com resposta rápida.

  * Redes Hoteleiras & Colégios: Manutenção preventiva e reformas sem interromper o funcionamento contínuo.

  * Comércio & PMEs: Soluções elétricas comerciais com máxima estabilidade de energia.

  * Pequena e Grande Indústria: Montagem de painéis de alta carga e reformas industriais pesadas.

### 2.6. Seção "Área de Atendimento & Cobertura Geográfica"

* **Mensagem Principal:** Atendimento focado na cidade de Valência e arredores.

* **Nota de Transparência:** Módulo explicando que para regiões vizinhas é feita uma avaliação prévia do projeto/orçamento para garantir o melhor custo-benefício de deslocamento para o cliente.

### 2.7. Seção de Contato & Fluxo de Conversão Direta

* **Fluxo Principal:** Direcionamento direto para o WhatsApp Comercial / Plantão.

* **Formulário de Pré-Avaliação (Opcional):**

  * Campo para seleção do tipo de imóvel (Residencial, Comercial, Hotel/Escola, Industrial).

  * Campo para tipo de serviço (Manutenção, Reforma, Painel Sob Encomenda).

  * Botão: *"Iniciar Atendimento no WhatsApp com Dados Preenchidos"*.

### 2.8. Footer (Rodapé Institucional)

* **Dados da Empresa:** IberVolt Solutions.

* **Atendimento:** Valência - Espanha.

* **Links Rápidos:** Serviços, Certificações NR, Painéis Customizados, WhatsApp.

* **Nota de Conformidade:** Cumprimento de normas técnicas de segurança e regulamentações locais.

## 3. COMPONENTES INTERATIVOS E EXPERIÊNCIA DO USUÁRIO (UI/UX)

### 3.1. Filtros & Seletor de Portfólio

* **Categorização por Setor:** Abas interativas de navegação rápida para filtrar fotos e projetos reais executados: `[ Todos ]`, `[ Residencial & Airbnb ]`, `[ Hotéis & Colégios ]`, `[ Comércio ]`, `[ Indústria & Painéis ]`.

* **Cards da Galeria:** Estrutura em `Graphite Glass` com imagem real em alta definição, título técnico do projeto, badge da norma/certificação aplicada e ícone para expansão visual.

* **Modal de Detalhes Técnicos:** Ao clicar no card, abre-se uma camada translúcida de ampliação com fundo escurecido (`backdrop-blur-md`), exibindo imagens adicionais, escopo do trabalho realizado e detalhes técnicos da montagem/reforma.

### 3.2. Formulários & Botões de Ação (CTAs)

* **Gerador de Mensagem Dinâmica para WhatsApp:** Integração onde a seleção de dados no site compõe automaticamente a mensagem de abertura do WhatsApp (ex: *"Olá! Gostaria de solicitar uma cotação para Reforma Elétrica em um Hotel em Valência."*).

* **Formulário de Pré-Avaliação Rápida:**

  * Campo 1: Nome do cliente ou razão social.

  * Campo 2: Telefone / WhatsApp de contato.

  * Seletor 3: Tipo de imóvel (Residencial, Comercial, Hotel/Escola, Industrial).

  * Seletor 4: Serviço (Manutenção Corretiva/Preventiva, Reforma Geral, Painel sob Encomenda).

  * Campo 5: Cidade / Região (Valência ou arredores).

  * Campo 6: Observações do projeto (opcional).

* **Validação em Tempo Real:** Indicação imediata de campos obrigatórios com contorno sutil em amarelo elétrico, mantendo a experiência fluida sem recarregar a página.

### 3.3. Transições, Efeitos de Scroll & Animações

* **Navegação Suave (Smooth Scroll):** Deslocamento contínuo e fluido ao clicar em links do menu superior.

* **Animações de Entrada (Scroll Reveal):** Surgimento suave dos elementos conforme o usuário rola a página (`opacity-0 translate-y-4` para `opacity-100 translate-y-0`), utilizando CSS nativo leve para máxima velocidade.

* **Micro-interações de Hover:** Elevação suave dos cards (`transform: translateY(-4px)`), aumento de opacidade nas bordas e brilho localizado nos botões de conversão.

* **Princípio de Fluidez:** Efeitos discretos e funcionais que reforçam o aspecto contemporâneo sem atrasar o carregamento ou criar poluição visual.

### 3.4. Simuladores / Calculadoras Interativas de Projeto

* **Configurador Interativo de Orçamento & Painéis:** Ferramenta guiada em 3 etapas intuitivas:

  * *Etapa 1:* Perfil da instalação (Residência/Piso, Hotel, Escola, Comércio, Planta Industrial).

  * *Etapa 2:* Necessidade técnica (Manutenção urgente, Reforma de fiação, Montagem de novo painel ou Fabricação sob medida).

  * *Etapa 3:* Localização do imóvel (Valência ou região vizinha).

* **Resultado & Encaminhamento:** Exibição imediata do resumo da solicitação e botão direto: *"Transferir Especificação para Atendimento Técnico no WhatsApp"*.

## 4. ESTRATÉGIA DE COPYWRITING E CONTEÚDO

### 4.1. Tom de Voz & Posicionamento

* **Atitude da Marca:** Sória, técnica, altamente responsável e sofisticada. A IberVolt Solutions se posiciona como uma autoridade em engenharia elétrica e não como um prestador de serviço genérico de reparos breves.

* **Diretriz Gramatical e Estilística:**

  * Uso restrito de adjetivos vazios ou frases apelativas.

  * Construções frasais claras, com verbos no infinitivo e imperativo direto em chamadas para ação.

  * Utilização correta de termos da engenharia elétrica (ex: *fator de potência*, *disjuntores termomagnéticos*, *balanceamento de fases*, *quadro de distribuição de luz e força*).

  * Total ausência de pontuação dramática ou frases exaggerated.

### 4.2. Definição Exata do Público-Alvo & Dores Específicas

* **Proprietários de Imóveis Residenciais & Gestores de Airbnb:**

  * Necessidades: Segurança contra acidentes elétricos, estética limpa nos acabamentos, valorização do imóvel e atualização de fiações antigas em edifícios tradicionais de Valência.

  * Mensagem principal: *Instalações elétricas seguras que protegem seu patrimônio e garantem conforto contínuo.*

* **Diretores de Hotéis, Pousadas & Instituições de Ensino (Colégios):**

  * Necessidades: Manutenção programada sem interrupção de hóspedes/alunos, cumprimento estrito de normas de segurança contra incêndios e atendimento preventivo contínuo.

  * Mensagem principal: *Continuidade operacional e conformidade técnica para estabelecimentos de alta rotatividade.*

* **Gestores Comerciais & Indústrias (Pequeno a Grande Porte):**

  * Necessidades: Dimensionamento de carga para máquinas pesadas, painéis elétricos customizados sob demanda e eliminação de quedas frequentes de energia.

  * Mensagem principal: *Montagem técnica de painéis sob medida e infraestrutura elétrica dimensionada para alta demanda.*

### 4.3. Mensagens-Chave, Headlines Principais & Proposta de Valor

* **Headline Principal (Hero):**

  * "Engenharia Elétrica de Precisão. 

    Segurança Absoluta para o seu Imóvel."

* **Proposta de Valor Central:**

  * *"Projetamos, executamos e modernizamos infraestruturas elétricas em Valência e região. Atendimento focado em conformidade técnica, segurança normativa e acabamento impecável."*

* **Chamadas para Ação (CTAs Claras):**

  * *"Solicitar Orçamento via WhatsApp"*

  * *"Consultar Projetos de Painéis Sob Encomenda"*

  * *"Enviar Detalhes do Projeto para Avaliação"*

### 4.4. Estrutura de Prova Social & Quebra de Objeções

* **Apresentação de Casos Práticos:** Exibição de projetos executados em redes hoteleiras, colégios e residências, detalhando o problema inicial e a solução técnica aplicada.

* **Transparência Geográfica:** Esclarecimento objetivo sobre a área principal de cobertura (cidade de Valência) e a política justa de avaliação prévia de viabilidade de deslocamento para cidades vizinhas.

* **Garantia de Qualidade:** Destaque para o cumprimento integral das diretrizes de segurança NR-10, NR-10 SEP e NR-35 em todas as intervenções executadas.

## 5. INTEGRAÇÕES TECNOLÓGICAS E RECURSOS TÉCNICOS

### 5.1. Integração com WhatsApp & Automações

* **API de Redirecionamento Dinâmico:** Estruturação de links dinâmicos no padrão `https://wa.me/34XXXXXXXXX?text=...` com codificação adequada de caracteres (`encodeURIComponent`).

* **Formatador de Parâmetros de Entrada:** O sistema compila automaticamente as respostas selecionadas no simulador/formulário em uma mensagem estruturada e de fácil leitura para a equipe técnica:

  * Exemplo de saída: *"Olá! Gostaria de solicitar um orçamento. Imóvel: Comercial (Hotel) | Serviço: Reforma e Montagem de Painel | Localização: Valência."*

* **Plano de Contingência (Fallback):** Caso a execução do WhatsApp Web ou aplicativo falhe no dispositivo do usuário, o sistema disponibiliza uma cópia instantânea da mensagem e um endereço de e-mail corporativo para envio alternativo.

### 5.2. Arquitetura Mobile-First, Usabilidade & Performance Crítica

* **Estratégia Native Mobile-First:** Desenvolvimento estruturado primariamente a partir de telas móveis (360px a 430px), garantindo experiência tátil fluida e livre de travamentos.

* **Barra Fixa Inferior de Ação Rápida (Sticky Action Bar):** Em dispositivos móveis, uma barra de contato limpa e discreta permanece acessível no rodapé da tela com o botão *"Atendimento WhatsApp"*, permitindo conversão com um toque sem obstruir o conteúdo da página.

* **Dimensionamento Tátil de Precisão:** Todos os elementos clicáveis (botões, seletores, filtros e menus) possuem área mínima de toque de `48px x 48px` com espaçamento de respiro adequado para navegação confortável com uma só mão.

* **Tipografia Fluida Adaptativa:** Utilização de funções CSS `clamp()` para ajuste contínuo dos tamanhos de fonte entre telas móbile e desktop, eliminando quebras de linha indesejadas e garantindo legibilidade impecável.

* **Otimização Extrema de Carregamento (Core Web Vitals):**

  * Target LCP (Largest Contentful Paint): Menor que 1.2 segundos em redes móbile 4G/5G.

  * Target CLS (Cumulative Layout Shift): 0.00 (estabilidade visual absoluta sem saltos de layout).

  * Asset Pipeline: Uso exclusivo de imagens em formatos modernos de alta compressão (WebP / AVIF) e gráficos vetoriais SVG leves.

  * CSS Crítico Inline: Renderização imediata do topo da página (Hero Section) antes da carga completa dos scripts auxiliares.

### 5.3. Configurações de SEO Local & Metadados Estruturados

* **Otimização de SEO Geolocalizado:** Foco em buscas estratégicas na região metropolitana de Valência (ex: *"eletricista credenciado em Valência"*, *"reforma de quadro elétrico Valência"*, *"montagem de painéis elétricos sob medida Valência"*).

* **Estrutura de Dados Schema.org (JSON-LD):** Inclusão de marcação técnica no padrão `LocalBusiness` e `Electrician`, informando coordenadas de geolocalização, área de atendimento, horários de funcionamento e certificações normativas.

* **Metadados Open Graph (OG) & Twitter Cards:** Configuração de títulos, descrições e imagem de pré-visualização de alta definição para compartilhamento limpo e profissional em aplicativos de mensagem (WhatsApp, Telegram) e redes sociais.

## 6. SEGURANÇA, PRIVACIDADE & CONFORMIDADE LEGAL

### 6.1. Certificado SSL / HTTPS & Criptografia de Dados

* **Protocolo de Conexão Segura:** Implementação obrigatória de criptografia TLS 1.3 de ponta a ponta via Cloudflare SSL / Let's Encrypt.

* **Forçamento de HTTPS:** Redirecionamento automático de requisições HTTP para HTTPS através de cabeçalhos de segurança estritos (HSTS: `Strict-Transport-Security`).

* **Proteção na Transmissão de Formulários:** Sanitização de entradas em todos os campos antes de formatar mensagens de redirecionamento para o WhatsApp ou e-mail corporativo.

### 6.2. Proteção de Formulários & Anti-Spam (reCAPTCHA / Cloudflare Turnstile)

* **Verificação sem Fricção:** Utilização do Cloudflare Turnstile ou Google reCAPTCHA v3 para validação invisível de tráfego, evitando robôs e envios automatizados sem impactar a experiência do usuário.

* **Controle de Taxa de Requisição (Rate Limiting):** Bloqueio de múltiplas tentativas consecutivas de envio por um mesmo endereço IP para prevenir abusos nos formulários.

### 6.3. Conformidade com Regulamentações de Privacidade (RGPD / GDPR & LGPD)

* **Gestor de Consentimento de Cookies (Cookie Banner):** Banner discreto em conformidade com as diretrizes da União Europeia (RGPD e LSSI-CE na Espanha) e LGPD, permitindo ao visitante aceitar, recusar ou personalizar cookies não essenciais.

* **Política de Privacidade Transparente:** Página e modal dedicados explicando claramente a finalidade de coleta e processamento dos dados fornecidos espontaneamente no atendimento comercial.

* **Garantia de Direitos do Usuário:** Informação direta sobre procedimentos para solicitação de exclusão, atualização ou consulta de dados mantidos no cadastro comercial.

### 6.4. Termos de Uso, Aviso Legal & Responsabilidade Técnica

* **Aviso Legal (Aviso Legal / Legal Notice):** Documentação transparente contendo a identificação corporativa da IberVolt Solutions, sede operacional em Valência e responsabilidades do uso da plataforma digital.

* **Declaração de Conformidade Normativa:** Esclarecimento formal do cumprimento das diretrizes de segurança do trabalho e engenharia elétrica (NR-10, NR-10 SEP, NR-35 e normativas vigentes).

### 6.5. Rotinas de Backup & Proteção Contra Ataques (DDoS / WAF)

* **Proteção Perimetral Web Application Firewall (WAF):** Mitigação ativa contra ataques de negação de serviço (DDoS) e varreduras maliciosas.

* **Alta Disponibilidade (Uptime SRE):** Arquitetura estática hospedada em rede de distribuição global (CDN) garantindo tempo de resposta contínuo de 99.9%.

* **Rotinas de Backup de Código:** Armazenamento seguro de versões e arquivos do projeto em repositório privado com versionamento Git.

## 7. INFRAESTRUTURA, HOSPEDAGEM & DOMÍNIO

### 7.1. Estratégia de Deploy em Duas Fases & Domínio Próprio (.es / .com)

* **Fase 1 (Ambiente de Homologação & Validação):** Hospedagem inicial e imediata na plataforma **Vercel** através de um subdomínio temporário de desenvolvimento (ex: `ibervolt-preview.vercel.app`). Esta etapa permite a testes em tempo real e visualização direta por parte do cliente para validação e ajustes antes da publicação oficial.

* **Fase 2 (Migração Definitiva & Publicação Oficial):** Após a aprovação formal do cliente, o projeto será migrado para o provedor definitivo (**Hostinger** ou **HostGator**). Apontamento de zonas DNS (Registros A, AAAA, CNAME e MX) para o domínio próprio final da empresa.

### 7.2. Provedor de Hospedagem de Alta Performance & CDN Global

* **Ambiente de Testes (Vercel):** Servidor de deploy contínuo integrado ao repositório Git, garantindo compilação instantânea, preview de alterações e testes de velocidade de carregamento.

* **Ambiente de Produção (Hostinger / HostGator):** Hospedagem de alta disponibilidade com suporte a protocolo HTTP/3, criptografia SSL gratuita pré-ativada e integração com CDN global (Cloudflare) para garantir latência ultrabaixa no acesso a partir de Valência, Espanha e toda a Europa.

### 7.3. Configuração de E-mail Profissional Corporativo (Definição Posterior)

* **Estruturação de Caixa Postal Corporativa:** Configuração da infraestrutura de e-mail atrelada ao domínio final do cliente para envio formal de propostas, laudos e orçamentos corporativos.

* **Registro de Endereços:** Os endereços de e-mail corporativos oficiais (ex: `contacto@...`, `comercial@...`) serão informados posteriormente pelo cliente antes do lançamento do site em ambiente de produção.

## 8. ACESSIBILIDADE, PERFORMANCE & QUALIDADE (QA)

### 8.1. Otimização de Core Web Vitals (Velocidade Máxima de Carregamento)

* **Métricas Alvo (Google Lighthouse Score 95+):**
  * **LCP (Largest Contentful Paint):** Menor que 1.2 segundos.
  * **INP (Interaction to Next Paint):** Menor que 50 milissegundos.
  * **CLS (Cumulative Layout Shift):** Exatamente 0.00 (estabilidade visual perfeita).

* **Técnicas de Carregamento de Recursos:**
  * Compressão de imagens em formatos de última geração (`.webp` e `.avif`) com múltiplos tamanhos de resolução via atributo `srcset`.
  * Pré-carregamento de fontes críticas (`font-display: swap`) e conexão prévia com servidores da CDN do Google Fonts (`dns-prefetch` / `preconnect`).
  * Injeção de CSS crítico diretamente na tag `<head>` para renderização instantânea da Seção Hero antes da leitura de scripts auxiliares.
  * Carregamento postergado (*lazy loading*) de imagens e mídias localizadas abaixo da dobra da página.

### 8.2. Diretrizes de Acessibilidade Web (Níveis de Contraste e Leitores de Tela)

* **Conformidade WCAG 2.1 Nível AA:**
  * Proporção de contraste rigorosamente testada entre o fundo Dark Obsidian (`#050505`) e os textos em Muted Platinum (`#A1A1AA`) e Pure White (`#FFFFFF`).
  * Texto em Amarelo Elétrico (`#FFE600`) aplicado exclusivamente em superfícies escuras com relação de contraste superior a `12:1`.

* **Navegação por Leitores de Tela (NVDA / TalkBack / VoiceOver):**
  * Uso de estrutura semântica HTML5 nativa (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
  * Inclusão de atributos `aria-label`, `aria-expanded` e `aria-live` em seletores interativos, modais e formulários.
  * Descrição textual (`alt`) detalhada e contextualizada em todas as fotografias técnicas e diagramas de painéis.

* **Navegação por Teclado:**
  * Foco visual destacado em tom Amarelo Elétrico sutil (`focus-visible: outline-2 outline-[#FFE600]`) para navegação sequencial via tecla `Tab`.

### 8.3. Testes de Compatibilidade Multi-browser e Dispositivos

* **Matriz de Testes em Navegadores:**
  * Google Chrome e Chromium Engine (versões recentes desktop e móbile).
  * Apple Safari (iOS/macOS, com verificação especial de renderização do efeito `backdrop-filter: blur()`).
  * Mozilla Firefox e Microsoft Edge.

* **Grade de Dispositivos e Breakpoints Responsivos:**
  * Smartphones compactos e padrão: `360px` a `430px`.
  * Tablets e visores intermediários: `768px` a `1024px`.
  * Monitores Full HD e Telas 4K Ultra-Wide: `1280px` até `3840px`.

* **Verificação de Usabilidade Física:**
  * Validação de margens de segurança para recorte de bordas e entalhes de câmeras (*notches*) em iPhones e celulares Android.
  * Teste tátil de resposta em redes móveis reais com variação de sinal (3G / 4G / 5G).

## 9. DIRETRIZES ANTI-CLICHÊ & DESIGN AUTÊNTICO (ELIMINAÇÃO DE PADRÕES SINTÉTICOS / IA)

### 9.1. Proibição de Elementos Fictícios de Status

* **Sem Luzes/Pontos Piscantes de "Online":** Proibido o uso de bolinhas verdes ou vermelhas piscantes (`animate-pulse`) simulando status em tempo real.

* **Sem Notificações Falsas:** Proibido pop-ups de "Alguém acabou de solicitar um orçamento" ou contadores regressivos artificiais de urgência.

### 9.2. Rigor de Pontuação & Formatação do Texto

* **Eliminação de Travessões Sintéticos:** Proibido o uso repetitivo de travessões (`—`) no meio das frases ou em tópicos explicativos. Toda a estrutura textual deve utilizar dois-pontos (`:`), pontos finais ou listas estruturadas com bullets limpos.

* **Linguagem Natural e Humana:** Redação focada em clareza técnica sem o uso de jargões genéricos de inteligência artificial (como *"ecossistema revolucionário"*, *"no mundo moderno"*, *"simbiose perfeita"* ou *"solução holística"*).

### 9.3. Design Moderno, Limpo e Funcional (Sem Clichês Visuais de IA)

* **Linguagem Visual Contemporânea e Marcante:** A modernidade se expressa através da tipografia de impacto (`Syne`), contraste acentuado entre fundo preto obsidiana e amarelo elétrico pontual, espaços de respiro equilibrados e hierarquia visual cirúrgica.

* **Eliminação de Elementos 3D e Ilustrações Sintéticas:** Proibida a inclusão de objetos 3D flutuantes (como esferas de vidro, cubos renderizados sem propósito ou vetores genéricos de inteligência artificial).

* **Ausência de Fundos em Degradê Excessivo:** Proibido fundos estilo "SaaS roxo/néon" ou manchas brilhantes desordenadas. A profundidade do site deve ser construída com contêineres translúcidos (`Glassmorphism` discreto), bordas ultrafinas em `rgba` e contraste de cores nobre.

* **Micro-interações Elegantes e Diretas:** Animações e estados de hover suaves (como elevação de cards em `scale: 1.02` e brilho discreto em botões), priorizando dinamismo sem prejudicar a velocidade de navegação.

* **Fotografia e Imagens Reais:** Uso exclusivo de fotos reais dos projetos, painéis e instalações da IberVolt Solutions ou imagens arquitetônicas/técnicas de altíssimo padrão com acabamento fotográfico autêntico.

## 10. SISTEMA DE INTERNACIONALIZAÇÃO (TRILÍNGUE PT / ES / EN) & SINCRONIZAÇÃO WHATSAPP

### 10.1. Alternância de Idiomas (PT / ES / EN)
* **Persistência de Idioma:** Preferência armazenada em `localStorage('ibervolt_lang')`, preservando a seleção do usuário entre recarregamentos.
* **Seletores no Header & Mobile:** Botões unificados com micro-interação nos formatos desktop (`PT | ES | EN`), mobile compacto no cabeçalho e menu gaveta mobile.
* **Atualização Reativa:** A função `switchLanguage(lang)` atualiza instantaneamente o DOM através de seletores semânticos `[data-i18n]`, `[data-i18n-html]` e `[data-i18n-placeholder]`, além de títulos, atributo `lang` do HTML (`pt-BR`, `es`, `en`), metadados de SEO e textos contextuais dos botões de WhatsApp.
* **Console Dinâmico de Especialidades:** Os 4 pilares técnicos de atuação são integralmente traduzidos em tempo real para os três idiomas (`servicesDataByLang.pt`, `servicesDataByLang.es`, `servicesDataByLang.en`).

### 10.2. Sincronização Dinâmica dos Dropdowns com o WhatsApp
* **Chaves Unívocas de Tradução:** Cada opção dos dropdowns customizados de *Tipo de Imóvel* e *Serviço Desejado* possui um atributo semântico `data-key` associado ao dicionário oficial de 134 chaves de tradução simétricas.
* **Captura Localizada no Envio:** Ao disparar a mensagem via WhatsApp (`#submit-whatsapp-btn`), a rotina `getDropdownLocalizedValue` recupera a tradução exata correspondente ao idioma ativo no momento do envio:
  * **Inglês (`en`):** `• Client:`, `• Property: Hotel or School`, `• Service: Preventive / Corrective Maintenance`, `• Location:`, `• Project Notes:`.
  * **Espanhol (`es`):** `• Cliente:`, `• Inmueble: Hotel o Colegio`, `• Servicio: Mantenimiento Preventivo / Correctivo`, `• Ubicación:`, `• Observaciones:`.
  * **Português (`pt`):** `• Cliente:`, `• Imóvel: Hotel ou Colégio`, `• Serviço: Manutenção Preventiva / Corretiva`, `• Localização:`, `• Observações:`.