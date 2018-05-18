/*
  O JavaScript permite manter uma vírgula no final de uma estrutura (trailing comma).
  Agora é permitido usar esse trailing comma em parâmetros de função.
*/

const anObject = {
  name: 'Filipe',
  age: 30,
  height: 1.85,
};

const anArray = [1, 2, 3, 5, 8, 13, 21,];

function aFunction(a, b,) {
  return a + b;
}

console.log(anObject);
console.log(anArray);
console.log(aFunction(21, 34)); // Nan? :-\
