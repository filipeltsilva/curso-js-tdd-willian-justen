/*
  Destructuring permite pegar elementos de objetos e arrays e criar varíaveis a partir deles.
*/

const person = {
  name: 'Filipe Lemos',
  age: 30,
  github: 'filipeltsilva',
  social: {
    linkedIn: 'filipeltsilva',
    twitter: 'filipeltsilva',
    facebook: 'filipeltsilva'
  }
};

const {name, age, url} = person;
console.log(`Oi, sou ${name}, tenho ${age} anos e o endereço do meu site é ${url}`);
console.log();


/*
  É possível usar o Desctructuring com elementos aninhados, como objetos dentro de objetos.
  Também é possível mudar o nome da variável, adicionando após os dois pontos o novo nome desejado.
*/
const {linkedIn, twitter, facebook: fb} = person.social;
console.log(`Meu LinkedIn: linkedin.com/in/${linkedIn}`);
console.log(`Meu Twitter: @${twitter}`);
console.log(`Meu Facebook: www.facebook.com/${fb}`);
console.log();

// Destructuring permite a criação e definição de valores inexistentes, mas não permite sobrescrever valores que já existem.
const {city = 'Governador Valadares'} = person;
console.log(`Nasci e moro em ${city}.`);
