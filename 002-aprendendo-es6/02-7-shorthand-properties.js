/*
  Shorthand properties permitem uma escrita mais enxuta do código.
  Se a propriedade e a variável que contém seu valor tiverem o mesmo nome, é desnecessário fazer a atribuição do valor dentro do objeto.
  Também permitem omitir a palavra function() ao declarar um método.
*/

let firstName = 'Filipe';
let surName = 'Lemos';
let age = 30;

const person = {
  firstName,
  surName,
  age,

  hello() {
    console.log(`Oi! Me chamo ${this.firstName} ${this.surName} e tenho ${this.age} anos de idade.`);
  }
};

person.hello();
