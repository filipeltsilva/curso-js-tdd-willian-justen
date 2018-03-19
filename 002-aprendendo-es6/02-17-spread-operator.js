/*
  Spread Operators desmembram elementos iteráveis na linguagem em pequenas partes.
  Tratam-se do uso de 3 pontos(...) antes do elemento a ser iterado.
*/

let frontEnd = ['react', 'vue', 'angularjs'];
let backEnd = ['node.js', 'python', 'php'];

console.log(...'filipe');
console.log(...['cachorro', 'gato', 'peixe']);
console.log([...'Governador Valadares']);
console.log();

// Spread Operatos melhoram a escrita de código. Exemplo de concatenação de arrays sem o uso do método concat().
let fullStack = [...frontEnd, 'Java', 'SQL', 'NoSQL', ...backEnd];
console.log(fullStack);
