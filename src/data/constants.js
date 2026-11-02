export const STORAGE_KEYS = {
  items: 'jovi-lens:items',
  albums: 'jovi-lens:albums',
  log: 'jovi-lens:log',
}

export const MAX_LOG = 30

export const subjects = [
  'Cálculo II',
  'Física I',
  'Química Orgânica',
  'Algoritmos',
  'Banco de Dados',
  'Estatística',
  'História',
  'Português',
]

// Capturas de exemplo usadas pelo botão "Gerar exemplo" (sorteadas com Math.random).
export const sampleCaptures = [
  {
    subject: 'Cálculo II',
    title: 'Regra da cadeia',
    content:
      'Se y = f(g(x)), então dy/dx = f\'(g(x)) · g\'(x). Derivar primeiro a função de fora, mantendo o interior, e multiplicar pela derivada da função de dentro.',
  },
  {
    subject: 'Física I',
    title: 'Segunda lei de Newton',
    content:
      'A força resultante sobre um corpo é igual à massa vezes a aceleração: F = m · a. A unidade no SI é o newton (N), equivalente a kg·m/s².',
  },
  {
    subject: 'Algoritmos',
    title: 'Busca binária',
    content:
      'Exige lista ordenada. Compara o valor buscado com o elemento do meio e descarta metade da lista a cada passo. Complexidade O(log n).',
  },
  {
    subject: 'Banco de Dados',
    title: 'Chave primária e estrangeira',
    content:
      'A chave primária identifica cada linha de forma única. A chave estrangeira referencia a chave primária de outra tabela e garante integridade referencial.',
  },
  {
    subject: 'Estatística',
    title: 'Média, mediana e moda',
    content:
      'Média é a soma dos valores dividida pela quantidade. Mediana é o valor central da lista ordenada. Moda é o valor que mais se repete.',
  },
  {
    subject: 'Química Orgânica',
    title: 'Grupos funcionais',
    content:
      'Álcool (–OH), aldeído (–CHO), cetona (C=O entre carbonos), ácido carboxílico (–COOH) e amina (–NH2) definem as propriedades de cada composto.',
  },
  {
    subject: 'História',
    title: 'Revolução Industrial',
    content:
      'Iniciada na Inglaterra no século XVIII, trocou a produção artesanal pela mecanizada, com a máquina a vapor e as fábricas, e acelerou a urbanização.',
  },
  {
    subject: 'Português',
    title: 'Crase',
    content:
      'Ocorre a fusão da preposição "a" com o artigo "a". Exemplo: "Fui à escola". Não se usa antes de verbos nem de palavras masculinas.',
  },
]
