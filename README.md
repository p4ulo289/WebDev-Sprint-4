# JOVI Lens — Acervo de estudos (FIAP Challenge JOVI 2026)

Aplicação web em **React** para guardar e organizar as capturas de estudo feitas pela JOVI Lens, a câmera com IA que reconhece a matéria no quadro ou no caderno. O usuário salva capturas, busca, organiza em álbuns, acompanha estatísticas, exporta os dados e recupera itens excluídos.

Este projeto usa o objetivo e a paleta de cores do protótipo das sprints anteriores e implementa o conteúdo do desafio: **central de conteúdo com busca**, **álbuns criados pelo usuário**, **histórico e estatísticas**, **lixeira com recuperação** e **exportação**.

- **Repositório (GitHub):** `COLE_AQUI_O_LINK_DO_GITHUB`
- **Deploy (Vercel):** `COLE_AQUI_O_LINK_DA_VERCEL`

## Tecnologias utilizadas

- [React 19](https://react.dev/) — componentes funcionais, props (pai → filho) e hooks (`useState`)
- [Vite 7](https://vite.dev/) — servidor de desenvolvimento e build
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização com a paleta do projeto definida em `src/index.css`
- `localStorage` do navegador — persistência dos dados (sem back-end)
- Fontes Space Grotesk e JetBrains Mono (Google Fonts)
- Git / GitHub e Vercel

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior (já inclui o npm).

```bash
npm install
```

## Como executar o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Build de produção e pré-visualização:

```bash
npm run build
npm run preview
```

## Usuários e senhas para teste

O projeto **não possui autenticação**: não há usuário nem senha. Basta abrir a página.

Para testar rapidamente: na seção **Biblioteca**, clique em **Carregar 3 exemplos** (ou use **Gerar exemplo** no formulário de captura).

## Funcionalidades

| Funcionalidade | Como usar |
| --- | --- |
| Nova captura | Seção *Capturar*: título, matéria, conteúdo e álbum (opcional) |
| Central de conteúdo | Seção *Biblioteca*: busca geral, filtro por matéria, ordenação e destaque **Recente** nas 3 capturas mais novas |
| Organização livre | Criar e excluir álbuns; mover cada captura entre álbuns pelo seletor do card |
| Favoritas e edição | Estrela no card e botão *Editar* |
| Histórico e estatísticas | Capturas por matéria (com %), gráfico dos últimos 7 dias e registro de atividades (adicionada, editada, excluída, restaurada) |
| Lixeira | *Excluir* move para a lixeira; é possível restaurar, excluir de vez ou esvaziar |
| Exportação | Botões *Exportar CSV* e *Exportar JSON* (exportam o que está filtrado na tela) |

## Requisitos da atividade e onde estão no código

| Requisito | Onde |
| --- | --- |
| Componentes funcionais, pai → filho (cabeçalho, corpo, rodapé) | `src/App.jsx` guarda o estado e renderiza `Header`, as seções em `<main>` e `Footer`, passando dados e funções por props para `Hero`, `CaptureForm`, `Library` (→ `AlbumBar`, `ItemCard`), `StatsPanel` e `TrashPanel` |
| `localStorage` | `src/hooks/useLocalStorage.js`, usado em `App.jsx` para capturas, álbuns e histórico de atividade (chaves `jovi-lens:items`, `jovi-lens:albums`, `jovi-lens:log`) |
| `Math.random` / `Math.floor` | `src/utils/math.js`: `randomInt`, `pickRandom`, `pickManyRandom` (embaralhamento), `makeId`, `randomConfidence` |
| `Math.round` / `Math.ceil` | `src/utils/math.js`: `round1`, `percent`, `readingMinutes` (tempo de leitura); `src/utils/stats.js` e `StatsPanel.jsx` (larguras das barras) |
| `Math.max` / `Math.floor` (dias) | `src/utils/stats.js`: maior valor dos gráficos e quantos dias se passaram desde cada captura |

A confiança exibida em cada captura é **simulada** (sorteada entre 85% e 99,9%), pois o projeto não tem a câmera real.

Para limpar os dados: DevTools → Application → Local Storage → apague as chaves `jovi-lens:*`.

## Estrutura de pastas

```
src/
├── components/
│   ├── capture/   CaptureForm
│   ├── hero/      Hero
│   ├── layout/    Header, Footer
│   ├── library/   Library, AlbumBar, ItemCard
│   ├── stats/     StatsPanel
│   ├── trash/     TrashPanel
│   └── ui/        Button, Badge, Section, EmptyState, BrandMark
├── data/          constants.js (matérias, capturas de exemplo, chaves)
├── hooks/         useLocalStorage.js
├── utils/         math.js, stats.js, format.js, exportData.js
├── App.jsx
├── index.css      paleta de cores e fontes (Tailwind @theme)
└── main.jsx
```

## Uso de Inteligência Artificial

Foi utilizada a IA **Claude (Anthropic)** como apoio no desenvolvimento. A IA gerou a estrutura do projeto (Vite, React e Tailwind), os componentes, o hook `useLocalStorage`, as funções com `Math`, os textos de exemplo e este README, a partir dos requisitos da atividade e da paleta do protótipo. Também escreveu e executou testes automatizados no navegador (Playwright) para conferir busca, álbuns, edição, lixeira, persistência e exportação. O código deve ser lido, executado e compreendido pela equipe, que é responsável pelo que entrega.

## Equipe

Veja `INTEGRANTES.TXT`.
