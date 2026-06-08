# Atlas Digital — Site Institucional v1.0

Versão inicial do site da Atlas Digital. Servir como base para refinar no Claude Code.

## Estrutura do projeto

```
atlas-digital/
├── index.html                              (Home)
├── servicos.html                           (Hub de serviços)
├── servico-google-meu-negocio.html         (Página GMN)
├── servico-criacao-sites.html              (Página Sites)
├── servico-posicionamento-google-ia.html   (Página SEO + GEO)
├── cases.html                              (Cases de sucesso)
├── sobre.html                              (Sobre a Atlas)
├── blog.html                               (Listagem do blog)
├── contato.html                            (Formulário + dados)
├── css/
│   └── style.css                           (CSS principal)
├── js/
│   └── script.js                           (Menu mobile, FAQ, etc)
└── images/                                 (Imagens — substituir os placeholders)
```

## Como abrir

Basta abrir o arquivo `index.html` no navegador. Tudo funciona localmente, sem build.

## Estrutura SEO já implementada

### Em todas as páginas:
- Meta title otimizado
- Meta description estratégica
- Canonical URL
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Hierarquia de headings (H1 único, H2/H3 estruturados)
- Fontes carregadas com preconnect

### Específico:
- **index.html**: Schema LocalBusiness completo + Organization
- **servico-*.html**: Schema Service em cada serviço
- **Sitemap**: criar antes de subir (próximo passo)
- **Robots.txt**: criar antes de subir (próximo passo)

## Imagens necessárias (a substituir)

Todos os placeholders estão marcados visualmente no site. Lista de imagens a produzir/conseguir:

### Críticas (home)
| Localização | Nome do arquivo sugerido | Tipo |
|---|---|---|
| Hero da home | `atlas-digital-curitiba-hero.webp` | Banner ou ilustração |
| OG image (compartilhamento) | `atlas-digital-og-image.jpg` | 1200x630px |
| Foto do João (sobre) | `joao-andre-paes-fundador-atlas-digital.webp` | Profissional, fundo neutro |

### Cases
| Nome sugerido | Uso |
|---|---|
| `case-saude-curitiba-resultados.webp` | Card cliente A |
| `case-servicos-curitiba-google-maps.webp` | Card cliente B |
| `case-construcao-curitiba-leads.webp` | Card cliente C |
| (+ os outros 3 cards de case) |

### Serviços
| Nome sugerido | Uso |
|---|---|
| `google-meu-negocio-curitiba.webp` | Hero da página GMN |
| `criacao-sites-wordpress-curitiba.webp` | Hero da página Sites |
| `posicionamento-google-ia-curitiba.webp` | Hero da página SEO+GEO |

### Recomendado adicionar
- Logos dos clientes (com autorização)
- Screenshots de resultados reais (GSC, GMN insights)
- Foto de Curitiba (Jardim Botânico, Ópera de Arame ou vista)
- Foto do escritório/ambiente de trabalho

## Pontos de atenção pra ajustar

### Dados a preencher:
- [ ] Número de WhatsApp real (atualmente: 41 99999-9999)
- [ ] E-mail real (atualmente: contato@atlasdigital.com.br)
- [ ] CNPJ real (no footer)
- [ ] Endereço completo (no schema LocalBusiness)
- [ ] Coordenadas GPS reais
- [ ] Domínio real (atualmente: atlasdigital.com.br — confirmar)
- [ ] Nomes reais dos clientes nos cases (depois de pegar autorização)

### Identidade visual:
- [ ] Substituir o logo de texto "Atlas Digital" por logo gráfico
- [ ] Ajustar paleta se necessário (atual: laranja #FF6B00 + preto)
- [ ] Definir favicon

### Funcionalidades a integrar:
- [ ] Formulário de contato com integração real (RD Station, Brevo, e-mail SMTP)
- [ ] Pixel do Google Ads / Meta Ads (se for usar)
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Política de Privacidade (link no footer)
- [ ] Termos de uso

### Conteúdo:
- [ ] Revisar e ajustar copy de todas as páginas
- [ ] Substituir cases genéricos pelos reais
- [ ] Adicionar fotos reais nos cases
- [ ] Escrever os primeiros 3-5 posts do blog
- [ ] Página de Política de Privacidade (LGPD)

## Próximos passos sugeridos

1. Abrir no Claude Code e refinar visual/copy
2. Substituir placeholders por imagens reais
3. Configurar formulário com integração real
4. Adicionar política de privacidade
5. Criar sitemap.xml e robots.txt
6. Decidir caminho: site estático OU conversão para tema WordPress
7. Configurar hospedagem (Hostinger)
8. Configurar Search Console + Analytics

## Paleta de cores

```css
--laranja: #FF6B00;
--laranja-claro: #FF8C3A;
--laranja-escuro: #CC5500;
--preto: #0A0A0A;
--cinza-escuro: #1A1A1A;
--cinza-medio: #4A4A4A;
--cinza-claro: #F5F5F5;
--branco: #FFFFFF;
```

## Tipografia

- **Títulos:** Poppins (500, 600, 700, 800)
- **Texto:** Inter (400, 500, 600, 700)
