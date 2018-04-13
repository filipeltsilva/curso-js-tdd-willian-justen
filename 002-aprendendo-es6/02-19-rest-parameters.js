/*
  Rest Parameters possui sintaxe semelhante ao Spread Operator, com os 3 pontos antes do parâmetro.
  Útil quando não se tem certeza de quantos parâmetros serão passados.
  Sempre retorna um array e é essa a principal diferença para o objeto arguments.
*/

function multiply(multiplier, ...parameters) {
  return parameters.map(parameter => parameter * multiplier);
}

console.log(multiply(2, 1, 2, 3));
console.log(multiply(5, 4, 8, 12, 16, 20));
