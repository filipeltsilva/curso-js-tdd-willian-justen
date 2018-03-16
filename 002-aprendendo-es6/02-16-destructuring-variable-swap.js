/*
  Destructuring permite uma sintaxe mais enxuta para fazer a troca de valores entre variáveis (swap).
*/

// Forma antiga
var a = 13;
var b = 21;
var temp;

temp = a;
a = b;
b = temp;

console.log('a = ', a);
console.log('b = ', b);
console.log();

// Com o Destructuring
let c = 55;
let d = 89;

[c, d] = [d, c];
console.log(`c = ${c}`);
console.log(`d = ${d}`);
