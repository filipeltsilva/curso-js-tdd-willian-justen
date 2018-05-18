/*
  Object.entries() permite separar objetos em estruturas chave-valor
*/

const anObject = {
  name: 'Filipe',
  age: 30,
  gender: 'M'
};

const anObjectMap = new Map(Object.entries(anObject));

console.log(anObject);
console.log(anObjectMap);
console.log(anObjectMap.size);
console.log(anObjectMap.has('name'));
console.log(anObjectMap.has('height'));
