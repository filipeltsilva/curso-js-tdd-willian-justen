/*
  Iteratos: estruturas que iteram sobre os iterables
  Iterables: elementos que podem ser iterados
*/

let name = 'Filipe'; // Iterable
var letter = name[Symbol.iterator](); // Iterator

console.log(letter.next());
console.log(letter.next());
console.log(letter.next());
console.log(letter.next());
console.log(letter.next());
console.log(letter.next());
console.log(letter.next()); // Essa iteração individual com next() obriga a iterar n+1 para finalizar a iteração
console.log()

// Um loop mais adequado para esse tipo de iteração é o for..of. Tem um controle de fluxo mais suave
for (const letter of name) {
  console.log(letter);
  if (letter === 'p') break;
}
