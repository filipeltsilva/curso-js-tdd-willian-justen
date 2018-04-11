/*
  Symbol é um novo tipo primitivo de dados que permite que um valor se torne único e imutável.
*/

// Symbols distintos com o mesmo valor são diferentes
let someThing = Symbol('Filipe');
let anotherThing = Symbol('Filipe');

console.log(someThing === anotherThing);
console.log();

// Symbols como propriedades de um objeto
let someObject = {
  [Symbol('name')]: 'Filipe',
  [Symbol('age')]: 30,
  height: 1.85
};

// Object.keys() não entendem as Symbols como propriedades de um objeto
console.log(Object.keys(someObject));

// Para trabalhar com Symbols como propriedades de objeto, utilizar Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(someObject));
