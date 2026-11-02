# JOVI Lens — FIAP Challenge JOVI 2026

Landing page da **JOVI Lens**, uma câmera com IA pensada para estudantes full-time: reconhece a matéria no quadro ou caderno, ajusta luz e foco sozinha e indica a melhor posição do celular.

Este projeto é a migração do protótipo em HTML/CSS/JS (Sprint 3) para **React**, usando componentes funcionais, props (pai → filho), `useState`, `useEffect`, `useRef`, `localStorage` e operações com o objeto `Math`.

- **Repositório:** `COLE_AQUI_O_LINK_DO_GITHUB`
- **Deploy (Vercel):** `COLE_AQUI_O_LINK_DA_VERCEL`

## Tecnologias utilizadas

- [React 19](https://react.dev/) (componentes funcionais e hooks)
- [Vite 7](https://vite.dev/) (servidor de desenvolvimento e build)
- [Tailwind CSS 4](https://tailwindcss.com/) (estilização, com os tokens de cor, tipografia e breakpoints da Sprint 3)
- Fontes do Google Fonts: Space Grotesk, Anton e JetBrains Mono
- Git / GitHub (versionamento) e Vercel (deploy)

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior (inclui o npm).

```bash
npm install
```

## Como executar o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Build de produção e pré-visualização local:

```bash
npm run build
npm run preview
```

## Usuários e senhas para teste

O projeto **não possui autenticação**, então não há usuário nem senha. Todas as funcionalidades estão abertas na própria página.

## Funcionalidades e onde estão no código

| Requisito | Onde |
| --- | --- |
| Estrutura pai → filho (Cabeçalho, corpo, rodapé) | `src/App.jsx` renderiza `Header`, `main` (seções) e `Footer`; as seções usam componentes de `src/components/ui` |
| `localStorage` | `src/hooks/useLocalStorage.js` — usado no **Simulador** (histórico de leituras) e no **Contato** (mensagens enviadas) |
| `Math.random` / `Math.floor` | `src/utils/scan.js` (`randomInt`, `pickRandom`, `generateScan`) e `src/utils/protocol.js` (protocolo de 6 dígitos) |
| `Math.round` / `Math.ceil` | `src/utils/scan.js` (`round1`, nota da leitura, minutos economizados) |
| `Math.max` / `Math.min` / `Math.abs` | `src/utils/scan.js` (`calculateStats` e `lightScore`/`getPositionTip`) |

### Simulador de leitura (seção nova)

Ao clicar em **Escanear agora**, o app sorteia uma matéria, a confiança da IA, o foco e a luz. Cada leitura é salva no `localStorage` (máx. 50) e alimenta as estatísticas: total de leituras, confiança média, melhor/pior nota, matéria mais lida e minutos economizados. O botão **Limpar histórico** apaga os dados salvos.

### Formulário de contato

Valida os campos, gera um número de protocolo aleatório e guarda a mensagem no `localStorage` (não há back-end).

Para limpar tudo manualmente: DevTools → Application → Local Storage → apague as chaves `jovi-lens:scans` e `jovi-lens:messages`.

## Estrutura de pastas

```
src/
├── assets/               # imagens
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, Solution, Audience, Gallery, Simulator, Team, Contact
│   ├── simulator/        # ScanPanel, StatsGrid, ScanHistory, MeterRow
│   └── ui/               # componentes reutilizáveis (Button, Phone, Corner, ...)
├── data/                 # dados estáticos (equipe, navegação, público, simulador)
├── hooks/                # useLocalStorage
├── utils/                # funções com Math (scan.js, protocol.js)
├── App.jsx
├── index.css             # tokens do Tailwind (@theme)
└── main.jsx
```

## Uso de Inteligência Artificial

Foi utilizada a IA **Claude (Anthropic)** como apoio no desenvolvimento. A IA ajudou a montar a estrutura do projeto em Vite + React + Tailwind a partir dos componentes já escritos pela equipe, a criar a seção **Simulador** e seus componentes, o hook `useLocalStorage`, as funções com `Math` em `src/utils`, a integração do formulário de contato com o `localStorage`, além deste README. O código foi revisado, executado e testado pela equipe, e o front-end original (layout, componentes e estilos) é de autoria da equipe. A imagem da seção "Estudantes full-time" no repositório é uma imagem provisória gerada por script e deve ser substituída pela imagem original do protótipo.

## Equipe

Veja `INTEGRANTES.TXT`.
