// Não é permitido que dois identificadores tenham o mesmo nome em um mesmo escopo ao usar let
var animal = 'cat';
console.log(animal);

{
  let animal = 'dog';
  console.log(animal);
}

console.log(animal);
