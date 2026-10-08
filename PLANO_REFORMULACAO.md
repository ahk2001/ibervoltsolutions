# ⚡ IberVolt Solutions — Plano de Reformulação por Etapas

> **Documento Oficial de Especificação & Roadmap de Implementação**  
> **Origem dos Requisitos:** Solicitações enviadas pelo cliente (**Rafael Br**) via mensagens e capturas de tela do WhatsApp.  
> **Objetivo:** Execução modular e controlada, passo a passo, garantindo qualidade visual impecável, estabilidade de código e validação etapa por etapa.

---

## 📌 Resumo Executivo das Demandas

Ao analisar integralmente as 4 capturas de mensagens do WhatsApp, foram identificadas **22 solicitações específicas**. Para trabalharmos com máxima qualidade e sem sobrecarga ou erros, agrupamos todas as demandas em **7 Etapas Inteligentes e Funcionais**:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ROADMAP DE EXECUÇÃO MODULAR                            │
├─────────┬──────────────────────────────────┬────────────────────────────────┤
│ ETAPA 1 │ Identidade, Idioma & Limpeza UI  │ Logo maior, ES padrão, sem luz │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 2 │ Hero & Abertura da Casa          │ Vídeo lento, tela limpa, plx   │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 3 │ Seção "Problemas que Resolvemos" │ 7 Dores reais & Bloco Solução  │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 4 │ Serviços, REBT & Robótica KUKA   │ 5 Categorias, KUKA KRC04, REBT │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 5 │ "Por Que Escolher" & Frentes     │ 5 Pilares & 3 Frentes de Venda │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 6 │ Galeria Real & Depoimentos       │ Fotos reais & Avaliações 5★    │
├─────────┼──────────────────────────────────┼────────────────────────────────┤
│ ETAPA 7 │ Conversão Valência & WhatsApp    │ Form, botões e i18n sincronizado│
└─────────┴──────────────────────────────────┴────────────────────────────────┘
```

---

## 🗺️ Detalhamento das 7 Etapas

---

### 🔹 ETAPA 1: Identidade, Idioma & Limpeza Visual (Header & Base)
*Objetivo: Estabelecer a base do site para o mercado de Valência (Espanha) e eliminar ruídos visuais.*

- [x] **1.1. Idioma Padrão em Espanhol (`ES`):**
  - O site deve carregar nativamente em espanhol (`<html lang="es">`).
  - O seletor de idiomas no cabeçalho deve exibir `ES` ativo por padrão, preservando a alternância funcional para Português (`PT`) e Inglês (`EN`).
- [x] **1.2. Logotipo com Maior Presença:**
  - Aumentar o destaque e a escala do logotipo no cabeçalho (desktop e mobile), garantindo legibilidade e proporção elegante.
- [x] **1.3. Remoção do Ponto de Luz do Cursor:**
  - Remover o elemento `#luminous-cursor` e seus listeners no JavaScript para despoluir a navegação e deixá-la mais fluida.
- [x] **1.4. Remoção do Slogan Antigo:**
  - Excluir o texto: *"Engenharia Certificada. Segurança Absoluta em Cada Obra."*.

---

### 🔹 ETAPA 2: Abertura da Hero & Experiência da Casa Energizada
*Objetivo: Criar uma transição cinematográfica fluida, sem elementos disputando atenção antes da hora.*

- [x] **2.1. Tela 100% Limpa na Abertura:**
  - Antes e durante o início da animação da casa, nada deve aparecer na tela além do vídeo puro da casa em tela cheia (sem header, sem textos, sem botões de scroll).
- [x] **2.2. Play Automático e Velocidade Suave:**
  - O vídeo deve reproduzir automaticamente assim que a página carregar, com velocidade mais lenta e suave para valorizar o efeito de energização.
- [x] **2.3. Revelação dos Elementos com Efeito Parallax Escalonado:**
  - Apenas após a casa se iluminar por completo, os elementos da tela entram suavemente em tempos escalonados:
    1. Header desliza do topo.
    2. Taglines/Badges (*Valencia y alrededores // Atención personalizada*).
    3. Título Principal (H1).
    4. Subtítulo descritivo.
    5. Botões de ação (Orçamento / WhatsApp).
- [x] **2.4. Nova Cópia Oficial da Hero:**
  - **Título:** *"Instalaciones eléctricas con calidad, seguridad y confianza. Su casa o negocio merece una instalación bien hecha."*
  - **Subtítulo:** *"Soluciones eléctricas residenciales, comerciales e industriales en Valencia y alrededores. Realizamos instalaciones, reformas, iluminación, modernización de cuadros eléctricos y mantenimiento, siempre con atención al detalle y a las necesidades de cada cliente."*
  - **Badges:** *Valencia y alrededores • Atención personalizada • Calidad y profesionalismo*.

---

### 🔹 ETAPA 3: Nova Seção Comercial "Problemas que Resolvemos"
*Objetivo: Conectar com o visitante pelas dores reais que ele enfrenta no dia a dia antes de ver detalhes técnicos.*

- [x] **3.1. Título de Empatia e Impacto:**
  - *"¿Está enfrentando alguno de estos problemas?"* / *"Você está enfrentando algum desses problemas?"*
- [x] **3.2. Os 7 Problemas Frequentes (Lista Interativa FAQ Accordion):**
  - Implementado em formato de lista vertical estilo FAQ/Accordion: ao clicar no título/pergunta, o item se abre com animação suave e um feixe de luz elétrico dourado/branco que percorre continuamente todo o contorno do card (efeito Border Beam). Cada item possui botão com ícone do WhatsApp que redireciona diretamente com o problema específico selecionado.
  1. *¿El disyuntor salta constantemente?* (Disjuntor desarma com frequência).
  2. *¿Los enchufes se calientan o chispean?* (Tomadas esquentam ou soltam faíscas).
  3. *¿Su instalación es antigua y teme un cortocircuito?* (Fiação velha sem aterramento).
  4. *¿Faltan enchufes y usa demasiados adaptadores?* (Falta de tomadas e benjamins perigosos).
  5. *¿Su cuadro eléctrico es antiguo y no le transmite seguridad?* (Quadro obsoleto sem diferencial).
  6. *¿Necesita adaptar la instalación para nuevos electrodomésticos?* (Ar-condicionado, forno, carro elétrico).
  7. *¿Desea mejorar la iluminación de su vivienda o local comercial?* (Modernização em LED).
- [x] **3.3. Bloco de Solução Rápida:**
  - *Removido a pedido do cliente para manter a seção focada e minimalista na lista FAQ com conversão direta.*

---

### 🔹 ETAPA 4: Reestruturação dos Serviços, Normas REBT & Robótica KUKA
*Objetivo: Corrigir o escopo técnico real, remover termos indevidos e incluir especialidades industriais.*

#### 🔸 PARTE 4.1: Serviços, Visual & Robótica KUKA (Concluída - Pronta para Avaliação)
- [x] **4.1.1. Remoção do Raio Vertical Central:**
  - Remoção completa do raio gigante central, do canvas de partículas contínuo (`#lightning-canvas`), faíscas e cálculos pesados de scroll. Adoção de acabamento perimetral técnico (*Dark Luxury*).
- [x] **4.1.2. Grade Oficial de 5 Categorias de Serviços:**
  1. **Instalaciones Eléctricas:** reformas, substituição de fiação antiga, interruptores, tomadas e circuitos dedicados.
  2. **Cuadros Eléctricos y Protección:** trilhos DIN com folga, barramentos de cobre, proteção DPS e testes de disparo.
  3. **Iluminación y Automatización:** projetos LED embutidos/sobrepor, fitas LED arquiteturais e sensores de presença.
  4. **Instalaciones Comerciales, Industriales & Robótica:** infraestrutura para galpões, manutenção preventiva/corretiva e robótica KUKA KRC 04.
  5. **Otros Servicios / Soluciones Complementarias:** suportes de TV alinhados a laser, cabos ocultos, montagem de móveis e reparos.
- [x] **4.1.3. Eliminação da Termografia FLIR:**
  - Nenhuma menção a câmeras térmicas FLIR ou laudos termográficos na seção de serviços.
- [x] **4.1.4. Imagens de Alta Fidelidade Geradas & Integradas:**
  - `projeto-iluminacao.jpg`, `projeto-kuka.jpg` e `projeto-complementares.jpg` integradas aos cards e ao modal.
- [x] **4.1.5. Modal Interativo de Serviços & Pré-seleção no Orçamento:**
  - Navegação circular completa entre os 5 serviços (`01 / 05` a `05 / 05`) via botões e teclado. Botão "Solicitar Orçamento" do modal abre diretamente o Popup Modal com a opção do serviço pré-selecionada.
- [x] **4.1.6. Sincronização Multilíngue (ES / PT / EN):**
  - Títulos, descrições, tags e matrizes de micro-especificações traduzidos e sincronizados nos 3 idiomas.

#### 🔸 PARTE 4.2: Marco Regulatório Espanhol REBT & Limpeza Normativa (Concluída)
- [x] **4.2.1. Eliminação de Normas Brasileiras (NR-10, NR-35 e NR-10 SEP):**
  - Substituição da Seção 3 (`#certificacoes`) para eliminar completamente referências a normas do Brasil.
- [x] **4.2.2. Os 3 Pilares Regulatórios Espanhóis e Europeus:**
  1. **REBT (RD 842/2002):** Reglamento Electrotécnico para Baja Tensión.
  2. **Normas UNE (ex: UNE-EN 61439):** Padrões técnicos de painéis e cabeamento.
  3. **Marcação CE & Segurança Operacional Europeia (RD 614/2001):** Conformidade de componentes e práticas seguras.
- [x] **4.2.3. Atualização das Faixas de Conformidade & Badges:**
  - Remoção de 100% das citações de NR-10 e NR-35 em faixas, modais, cabeçalhos, rodapé e metatags, com sincronização i18n completa (ES / PT / EN).

---

### 🔹 ETAPA 5: Seção "Por Que Escolher a IberVolt" & Frentes de Atuação
*Objetivo: Demonstrar autoridade técnica, seriedade e versatilidade comercial.*

- [x] **5.1. Seção "Por Que Escolher a IberVolt Solutions" (Showcase Técnico Interativo // Sem Cards Repetitivos):**
  - **Quebra do "Card Fatigue":** Os 5 cartões verticais repetitivos foram substituídos por um layout *Split Técnico* de alta fidelidade:
    - *Coluna da Esquerda:* Lista seletora minimalista aberta (sem molduras de cards), com numeração monospaçada (`01.` a `05.`), indicador luminoso ativo dourado e transição por clique ou hover.
    - *Coluna da Direita:* Palco de demonstração técnica unificado (Blueprint) com número monumental vazado no fundo (`01` a `05`), ícone técnico, título, descrição ampliada e 3 especificações técnicas comprovando a autoridade de cada pilar.
  - **Texto de Introdução:** *"Seu projeto merece atenção aos detalhes. Acreditamos que um bom serviço começa com uma avaliação correta e termina com um trabalho bem executado."*
  - **5 Pilares:**
    1. *Experiência Técnica:* conhecimento consolidado em instalações elétricas, manutenção e automação.
    2. *Segurança em Primeiro Lugar:* procedimentos rigorosos, materiais homologados e conformidade com o REBT.
    3. *Atendimento Personalizado:* cada instalação e cada cliente possuem necessidades únicas.
    4. *Compromisso com a Qualidade:* trabalho limpo, organizado e acabamento premium.
    5. *Soluções Inteligentes:* praticidade, economia energética e confiabilidade a longo prazo.
  - **Ação Direta:** Botão integrado *"Solicitar Avaliação Técnica"* que dispara o modal de orçamento `#quote-modal` e controles rápidos de navegação anterior/próximo (`01 / 05`).
- [x] **5.2. As 3 Frentes de Atuação:**
  - **Frente Comercial Inicial:** residências, apartamentos, lojas, escritórios e pequenos comércios.
  - **Frente Técnica Diferenciada:** quadros elétricos, modernização, manutenção técnica e automação.
  - **Frente de Expansão:** manutenção industrial, automação e serviços especializados (robótica KUKA KRC 04).

---

### 🔹 ETAPA 6: Galeria de Trabalhos Reais & Avaliações 5 Estrelas
*Objetivo: Apresentar prova social autêntica com fotos reais dos trabalhos executados e avaliações de clientes.*

- [x] **6.1. Galeria Fotográfica Real (Carrossel Infinito & Lightbox):**
  - **Curadoria dos 15 Melhores Registros Autênticos** (filtrados de 118 fotos reais da empresa em Valência):
    1. *Robótica KUKA KRC 04:* Braço robótico articulado industrial com teach pendant KCP e engenheiro em comissionamento.
    2. *Quadro Comercial Hager:* Quadro geral de 5 níveis com identificação setorizada (climatização, iluminação e postos).
    3. *Automação WEG CFW 08:* Painel de controle de motores com 2 inversores de frequência e contatores Schneider Electric.
    4. *Painel CLP WEG Clic-02:* Autômato programável com EasyDrive CFW 10 e fonte estabilizada em trilho DIN.
    5. *Iluminação Comercial & Design:* Luminárias arquitetônicas e spots embutidos com iluminação de destaque em cafeteria.
    6. *Energia Solar Fotovoltaica:* Estrutura de módulos solares em cobertura de edifício em Valência.
    7. *Montagem de Quadro Modular:* Quadro em execução com disjuntores e diferenciais ATMOSS em trilhos DIN organizados.
    8. *Disjuntor Caixa Moldada 160A:* Entrada de potência trifásica com barramento de cobre maciço para alta demanda.
    9. *Quadro 4 Linhas com SAI:* Quadro de distribuição com circuitos independentes e alimentação estabilizada por UPS.
    10. *Quadro Estanque Noark IP65:* Caixa estanque com porta fumê e tomadas industriais CEE para ambiente externo.
    11. *Climatização VRF Haier:* Unidades condensadoras em cobertura durante teste frigorífico e vácuo técnico.
    12. *Aerotermia Mundoclima Super Inverter:* Bomba de calor hidrônica com fluido R32 para climatização e AQS.
    13. *Gerador HIMOINSA CEC7:* Quadro de comutação automática rede/gerador com parada de emergência e supervisão digital.
    14. *Centralização de Contadores CGP:* Ponto de entrega com caixas de fusíveis NH e conexões homologadas em Valência.
    15. *Painel de Comando em Operação Ativa:* Quadro industrial com inversores parametrizados e intertravamentos.
  - **Mecânica do Carrossel Infinito:**
    - Efeito contínuo (*seamless marquee* 55s linear) com 30 cards duplicados na trilha.
    - Máscaras laterais de gradiente (*fade-out*) para integração suave no tema Dark Luxury.
    - Hover-to-pause: ao passar o mouse ou tocar na trilha, o carrossel pausa suavemente para leitura e inspeção.
    - Controles de reprodução: botão de alternar Pausar / Retomar com atualização de ícones e texto.
    - Botões de navegação lateral para ajuste manual.
  - **Lightbox Modal Técnico Customizado (`#gallery-lightbox-modal`):**
    - Modal dark glass com backdrop blur, fechamento por clique fora ou tecla ESC.
    - Navegação com setas do teclado (Esquerda / Direita) e botões visuais.
    - Foto em alta resolução, tag de especialidade, título, descrição detalhada e contador `XX / 15`.
    - Botão CTA `"Solicitar Presupuesto para Proyecto Similar"` que abre diretamente o modal de orçamento (`#quote-modal`) com a categoria técnica correspondente pré-selecionada.
  - **Sincronização Completa i18n:**
    - 304 chaves equilibradas e validadas em Espanhol (idioma principal), Português e Inglês.
    - Atualização do menu desktop (`05. Proyectos`, `06. Atención`), menu mobile, rodapé e observador de rolagem (ScrollSpy).

- [x] **6.2. Seção de Depoimentos Exclusivos (Estilo Cinematográfico Enxuto & Autoplay):**
  - **Estética Enxuta Dark Luxury (Referência Visual de Alto Padrão):**
    - Seção minimalista e imersiva (`#testimonios`), centralizada em fundo negro profundo com halo dourado radiante (`bg-brand-yellow/[0.045]`) e vinheta radial suave.
    - Tag superior editorial: `// OPINIONES EXCLUSIVAS EN VALENCIA` (`// DEPOIMENTOS EXCLUSIVOS EM VALÊNCIA` em PT / `// EXCLUSIVE REVIEWS IN VALENCIA` em EN) acompanhada de 5 estrelas douradas com brilho elétrico suave.
  - **Citação Centralizada em Itálico & Assinatura Técnica:**
    - Citação de alto impacto visual em itálico (`font-jakarta text-lg sm:text-xl lg:text-[1.32rem]`), com conforto de leitura e foco total na transformação do cliente.
    - Bloco de autor com nome em destaque (`font-syne font-bold text-white`) e metadados técnicos padronizados em caixa alta (`[LOCALIDADE] — [SERVIÇO]`).
  - **Mecanismo de Autoplay Suave (Troca Automática):**
    - Rotação automática contínua a cada 6,5 segundos entre os 6 depoimentos reais com transição suave em crossfade.
    - Efeito *hover-to-pause*: ao passar o mouse ou focar no texto do depoimento, a rotação pausa automaticamente para leitura tranquila e retoma ao retirar o cursor.
    - Setas laterais sutis para controle manual imediato anterior/próximo.
  - **Barra Inferior de Navegação por Abas de Clientes:**
    - Linha horizontal de clientes: `Carlos M.`, `Vicente S.`, `Dra. Elena G.`, `Alejandro N.`, `Marcos R.` e `Beatriz L.`.
    - Aba ativa com texto em destaque e indicador inferior dourado iluminado (`bg-brand-yellow` com glow).
    - Clique em qualquer nome troca instantaneamente o depoimento e sincroniza a barra.
  - **Sincronização Multilíngue Completa (ES / PT / EN):**
    - 373 chaves equilibradas e validadas nos 3 idiomas com 100% de paridade via `validate_i18n.js`.


---

### 🔹 ETAPA 7: Conversão Local em Valência, Orçamentos & WhatsApp
*Objetivo: Conectar todos os fluxos de conversão para o fechamento de orçamentos rápidos pelo WhatsApp.*

- [x] **7.1. Chamada Comercial Direta para Valência no Bloco de Orçamento (`#cobertura` / `#orcamento`):**
  - Card estilizado Dark Luxury posicionado logo acima do formulário técnico de orçamento com badge `VALÈNCIA & ALREDEDORES // CONTACTO DIRECTO`, ícone do WhatsApp em destaque e a cópia oficial:
    *"¿Necesita un electricista en Valencia? No espere que un pequeño problema eléctrico se transforme en una gran preocupación. Explique lo que necesita y envíe fotos por WhatsApp. IberVolt Solutions tendrá el placer de evaluar su solicitud y presentarle una propuesta adecuada."*
  - Botão de ação rápida integrado que abre diretamente o WhatsApp do engenheiro com mensagem contextualizada para envio de fotos e diagnóstico preliminar.
- [x] **7.2. Botão Flutuante Permanente do WhatsApp (`#floating-whatsapp-btn`):**
  - Ícone oficial do WhatsApp fixo no canto inferior direito (`fixed bottom-6 right-6 z-50`) que acompanha o usuário de forma sóbria e discreta durante toda a navegação.
  - Efeito pulsante/radar chamativo removido por completo; botão com proporção elegante (`w-12 h-12 sm:w-13 sm:h-13`), borda fina translúcida e sombra suave no padrão Dark Luxury da marca.
  - Ao clicar, abre imediatamente o Popup Modal (`#quote-modal`) com o formulário de orçamento técnico.
- [x] **7.3. Popup Modal com Formulário Técnico de Orçamento (`#quote-modal`):**
  - Modal dark glass centralizado com backdrop blur e tecla ESC, **100% sem scroll interno** (conteúdo e espaçamentos otimizados para encaixe perfeito em qualquer resolução).
  - Formulário completo idêntico ao do site: Nome, Tipo de Imóvel (dropdown customizado), Tipo de Serviço (dropdown customizado), Localização, Observações técnicas e Honeypot anti-spam.
  - Ao enviar, formata a mensagem técnica completa no idioma atual e abre o WhatsApp Oficial do engenheiro.
- [x] **7.4. Unificação dos Botões de WhatsApp do Site:**
  - Todos os botões do site que antes direcionavam/rolavam para a seção `#orcamento` (Header, Menu Mobile, Hero CTA "Solicitar Presupuesto", Banner de Engenheiro, Rodapé e botão de serviço) agora abrem diretamente o Popup Modal.
- [x] **7.5. Chamada Comercial Direta para Valência no Rodapé (Pre-Footer Banner de Alta Conversão):**
  - Módulo panorâmico de conversão posicionado estrategicamente antes do grid institucional do rodapé com moldura Dark Luxury, fundo translúcido e iluminação sutil:
    - Badge superior: `VALÈNCIA & ALREDEDORES // ATENCIÓN DIRECTA`.
    - Título editorial: *"¿Necesita un electricista en Valencia?"*.
    - Texto completo oficial instruindo o envio de fotos e solicitação de proposta.
    - Dois botões de alta conversão:
      1. *"Enviar Fotos por WhatsApp"* (link direto para `+34 605 55 56 86` com mensagem automática pré-configurada).
      2. *"Solicitar Presupuesto"* (dispara o Popup Modal `#quote-modal` sem sair do rodapé).
- [x] **7.6. Sincronização e Validação Multilíngue (ES / PT / EN):**
  - Todas as 7 novas chaves (`val_callout_title`, `val_callout_desc`, `footer_val_badge`, `footer_val_h3`, `footer_val_p`, `footer_val_btn_wa`, `footer_val_btn_modal`) adicionadas com traduções naturais e profissionais em Espanhol (padrão), Português e Inglês.
  - Atualização dinâmica no `switchLanguage` para sincronizar os links do WhatsApp com parâmetros de idioma codificados em tempo real.
  - Auditoria automatizada realizada via script com **380 chaves equilibradas e 100% de paridade** nos três idiomas.

---

## 🏆 Conclusão do Projeto: 100% das 7 Etapas Concluídas

Todas as demandas identificadas nas conversas com o cliente **Rafael Br** foram implementadas, validadas e auditadas com sucesso:

- ✅ **ETAPA 1:** Identidade, Idioma & Limpeza Visual (Logo com maior presença, Espanhol nativo, remoção de pontos de luz e slogan antigo).
- ✅ **ETAPA 2:** Hero & Abertura da Casa Energizada (Tela limpa, vídeo automático com velocidade suave, parallax escalonado e cópia oficial).
- ✅ **ETAPA 3:** Seção "Problemas que Resolvemos" (7 dores reais do cliente e solução técnica resolutiva).
- ✅ **ETAPA 4:** Serviços Estruturados, REBT & Robótica KUKA (5 categorias técnicas, destaque KUKA KRC 04, conformidade REBT e modal).
- ✅ **ETAPA 5:** "Por Que Escolher a IberVolt" & Frentes de Atuação (5 pilares de autoridade e 3 frentes comerciais).
- ✅ **ETAPA 6:** Galeria Real de Obras & Depoimentos Cinematográficos (Carrossel contínuo de 15 obras reais com Lightbox e depoimentos 5★ com autoplay e abas).
- ✅ **ETAPA 7:** Conversão Local em Valência, Orçamentos & WhatsApp (Callouts comerciais diretos, pre-footer de conversão, modal técnico e i18n sincronizado).

👉 **O site IberVolt Solutions está 100% finalizado, otimizado e pronto para operação e tráfego!**
