// Consts são mutáveis apenas quando se trata de propriedades de objetos
const person = {
  name: 'Filipe',
  age: 27
};
console.log(person);

person.age = 30;
console.log(person);

// O método freeze() de Object congela as mudanças, tornando então o objeto imutável
Object.freeze(person);
person.age = 58;
console.log(person);
