/*
  Object.values() permitem manipular os valores dentro de um objeto
*/

const fruitsStock = {
  apple: 5,
  banana: 1,
  pineapple: 4
};

console.log(Object.values(fruitsStock));
console.log('Total fruits in stock:', Object.values(fruitsStock).reduce((total, current) => total += current));
