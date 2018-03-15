const pratoFeito = ['Arroz', 'Feijão', 'Bife', 'Salada'];

// Sintaxe clássica da Arrow Function
let pratoFeitoItens = pratoFeito.map((item) => {
  return `Item do PF: ${item}`;
});
console.log(pratoFeitoItens);
console.log();

// Quando a Arrow Function tem um parâmetro apenas, podemos omitir os parênteses que o envolve
let pratoFeitoOneParameter = pratoFeito.map(item => {
  return `Item do PF One Parameter: ${item}`;
});
console.log(pratoFeitoOneParameter);
console.log();

// Arrow Functions com uma linha podem também ter as chaves e a palavra return omitida
let pratoFeitoOneLine = pratoFeito.map(item => `Item do PF One Line: ${item}`);
console.log(pratoFeitoOneLine);
