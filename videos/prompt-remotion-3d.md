# PROMPT PARA CLAUDE CODE — Vídeo explicativo SEO & GEO em Remotion (3D, cinético)

Cole tudo abaixo no Claude Code, dentro de uma pasta vazia.

---

Você é um engenheiro sênior de motion design em **Remotion + React + Three.js**.
Crie, do zero, um projeto Remotion que renderize um vídeo explicativo profissional,
**cinético e com elementos 3D em movimento constante e rápido** (que prendem a atenção),
explicando SEO e GEO para donos de empresa, terminando com CTA da **Atlas Digital**.

## 0. Stack e setup
- Inicialize com `npm create video@latest` (template "Blank" / TypeScript).
- Instale: `three @react-three/fiber @react-three/drei @remotion/three @remotion/google-fonts @remotion/captions @remotion/media-utils`.
- Composição principal: **1920x1080, 30fps, duração = ~2460 frames (82s)** (ajuste ao áudio de narração).
- Use `<ThreeCanvas>` do `@remotion/three` para cenas 3D e camadas HTML/SVG por cima para textos/legendas.
- Toda animação dirigida por `useCurrentFrame()` + `interpolate` + `spring`. Nada de tempo real aleatório: tudo determinístico.

## 1. Direção de arte (identidade)
- Paleta Atlas: verde `#1B5E20`, verde claro `#4CAF50`, verde hover `#66BB6A`, fundo preto `#0A0A0A`, card `#1A1A1A`, borda `#2A2A2A`, branco `#FFFFFF`, cinza `#B7B7B7`. Laranja de alerta `#FF9628` (para "anúncio").
- Fonte: Inter (via @remotion/google-fonts), pesos 800 para títulos, 600 para textos.
- Fundo 3D persistente: um "campo" escuro com partículas/pontos verdes flutuando + leve névoa verde (glow radial), câmera com deriva sutil e contínua. Bloom/pós no Three (drei `<EffectComposer>` opcional).
- **Ritmo cinético**: cortes rápidos (0,3–0,6s entre entradas), objetos 3D girando/orbitando o tempo todo, câmera com micro-movimentos, textos entrando com spring rápido (damping baixo). Nunca deixe a tela "parada".

## 2. Identidade visual real das plataformas (recriar fielmente em UI mock)
Recrie os elementos como componentes (não use screenshots):
- **Google**: barra de busca branca arredondada com a wordmark "Google" nas cores oficiais (azul #4285F4, vermelho #EA4335, amarelo #FBBC05, verde #34A853), ícone de lupa, e uma SERP com resultados (título azul, URL verde, snippet cinza) e um selo "Patrocinado" nos de anúncio.
- **ChatGPT**: janela estilo chat escuro, avatar redondo, balões de conversa, cursor "digitando" (três pontos), logo/ícone estilo espiral.
- **Gemini**: ícone "sparkle" (estrela de 4 pontas) com degradê azul→roxo, balão de resposta.
> Observação de marca: use as cores/formatos oficiais apenas como recriação editorial. Se for veicular como anúncio pago, prefira versões estilizadas para evitar restrições de brand guidelines de terceiros.

## 3. Áudio e legendas
- Importe a narração `public/narracao.mp3` (voz IA — ElevenLabs, tom entusiasmado/vendedor) com `<Audio>`.
- Gere legendas sincronizadas (use `@remotion/captions`; se tiver o .srt/.json do ElevenLabs, carregue; senão, use os tempos do mapa abaixo). Legenda: caixa preta translúcida embaixo, texto branco 700.

## 4. Roteiro, narração e cenas (7 cenas)
Use exatamente estes textos de narração e legendas. Cada cena com sua direção 3D/cinética.

**CENA 1 — Gancho (0–10s)**
Narração: "Deixa eu te fazer uma pergunta. Quando você precisa comprar alguma coisa… qual é o primeiro lugar que você procura? Isso. O Google. Todo mundo faz igual — você, seu vizinho, o seu cliente."
Visual: barra de busca Google 3D surge girando levemente no eixo Y; texto é "digitado" ("melhor empresa perto de mim"); a wordmark "Google" colorida faz um pop 3D com leve rotação. Partículas passando rápido.

**CENA 2 — Concorrência + dado (10–24s)**
Narração: "Agora me responde outra: quantas vezes você passa da primeira página do Google? Quase nunca, né? E pensa comigo: quantas empresas fazem exatamente o que a sua faz? Dezenas. Talvez centenas. Todas querendo o mesmo cliente, na mesma busca. Só que o espaço é curto: quase sete de cada dez cliques ficam nos três primeiros resultados. Quem está lá em cima, colhe. Quem está embaixo, divide as migalhas."
Visual: dezenas de "cards" 3D (logos genéricos) voando e se empilhando/orbitando um ponto central (a SERP). Depois um número gigante em 3D **"68,7%"** entra com extrusão e gira; destaque nos 3 primeiros resultados de uma SERP 3D.

**CENA 3 — O que é SEO (24–36s)**
Narração: "É aí que entra o SEO. SEO é fazer a SUA empresa aparecer na primeira página — de forma natural, sem pagar por anúncio. É ser encontrado na hora exata em que o cliente está procurando por você. E esse lugar não se conquista de um dia pro outro, nem se mantém sozinho. Por isso SEO é investimento contínuo: no dia que você para, o concorrente te ultrapassa."
Visual: lista de resultados 3D; um card "SUA EMPRESA" verde sobe da posição 8 para a 1 com trilha de movimento (motion blur), câmera acompanha. Selo 3D "sem pagar por clique".

**CENA 4 — A virada: as IAs (36–46s)**
Narração: "Mas presta atenção, porque mudou de novo. Repara: ultimamente, quando você tem uma dúvida, você não tem perguntado direto pra uma inteligência artificial? Pro ChatGPT, pro Gemini? Seu cliente também está fazendo isso."
Visual: a barra do Google se transforma (morph 3D) numa janela de ChatGPT; ao lado surge o sparkle do Gemini girando. Pergunta é digitada. Transições rápidas entre as duas UIs.

**CENA 5 — O que é GEO (46–58s)**
Narração: "E é aqui que nasce o GEO. Enquanto todo mundo ainda briga só pelo Google, o GEO coloca a sua empresa dentro das respostas das inteligências artificiais. Quando alguém pergunta 'qual a melhor opção?', o nome que a IA responde… é o seu."
Visual: balão de resposta da IA sendo "digitado" em 3D; quando surge "Atlas Digital", o nome ganha destaque verde com brilho/bloom e um leve pop 3D. Sparkles orbitando.

**CENA 6 — Aluguel x Patrimônio (58–70s)**
Narração: "'Ah, mas eu já pago anúncio.' Perfeito. E no dia que você parar de pagar, o que acontece? Você desaparece. Anúncio é aluguel: parou de pagar, perdeu o ponto. SEO e GEO é patrimônio: você constrói uma vez e continua atraindo cliente — gastando cada vez menos."
Visual: split 3D. Esquerda: um outdoor/placa "ANÚNCIO" que se desliga e some (dissolve em partículas) quando "para de pagar". Direita: blocos 3D (prédio) se empilhando e ficando sólidos ("SEO + GEO / patrimônio"). Contraste laranja x verde.

**CENA 7 — Fechamento + CTA (70–82s)**
Narração: "O jogo mudou — e quem entender primeiro, sai na frente. Seu cliente já está procurando, no Google e nas IAs. A dúvida é só uma: ele vai encontrar você… ou o seu concorrente? Pare de depender de anúncio. Construa algo que é seu — na primeira página do Google e nas respostas das IAs. A Atlas Digital te mostra o caminho."
Visual: logo da Atlas (`public/logo.png`) entra em 3D com leve rotação e bloom; taglines aparecem; botão verde **"Diagnóstico gratuito"** pulsando. Partículas convergindo para o logo.

## 5. Mapa de tempo (legendas)
0–10 Gancho · 10–24 Concorrência/68,7% · 24–36 SEO · 36–46 IAs · 46–58 GEO · 58–70 Aluguel x Patrimônio · 70–82 CTA.

## 6. Assets
- `public/logo.png` (logo Atlas). `public/narracao.mp3` (voz). Fontes via @remotion/google-fonts.

## 7. Entrega
- Estruture em `src/scenes/Scene1..7.tsx`, um `Background3D.tsx` persistente, `Subtitles.tsx`, e `Root.tsx` com a `<Composition>`.
- Código limpo, comentado, tipado.
- Render local: `npx remotion render MainComp out/atlas-seo-geo.mp4 --codec=h264 --crf=18`.
- (Opcional) Render na nuvem com **Remotion Lambda**: configure função e bucket e use `npx remotion lambda render`.
- Garanta 0 erros de type-check e que o preview (`npx remotion studio`) rode.

Comece criando o projeto e o `Background3D` com partículas e câmera em movimento; depois implemente as cenas na ordem.
