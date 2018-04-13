/*
  O Set é um objeto que permite o armazenamento e manipulação de diversos valores.
  Esses valores são únicos, ou seja, um Set não possui valores repetidos.
  Sua sintaxe lembra um array, mas ele não é manipulável via índices como o array.
  É um iterable, permitindo o uso de estruturas como o next() e o loop for..of.
*/

var mySet = new Set(['Filipe', 30, true]);

console.log(mySet);
console.log(mySet.size);
console.log();

mySet.add(1.85);
mySet.delete(30);
console.log(mySet);
console.log(mySet.has('Filipe'));
console.log(mySet.has('Animal'));
console.log();

let itens = mySet.values();
for (const item of itens) {
  console.log(item);
}
