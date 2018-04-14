/*
  Map é um objeto que trabalha com itens através do mecanismo chave-valor.
  É um iterable, porém ao imprimir o próximo registro com next(), esse só mostrará o valor e não a chave.
*/

let aMap = new Map();

// Método set() adiciona nova chave-valor
aMap.set('Filipe', 30);
aMap.set('Geralda', 58);

console.log(aMap);
console.log(aMap.size);

aMap.delete('Filipe');
console.log(aMap)
