/*
  O método find() procura por um dado dentro de um array.
  O find() busca apenas o primeiro valor em um array enquanto o filter() que retorna um booleano em relação a todos os elementos que compõem um array.
  O método findIndex() retorna o índice que contém o valor procurado.
*/

const persons = [
  {
    name: 'Filipe',
    age: 30
  },

  {
    name: 'Geralda',
    age: 58
  }
];

const isYounger = persons.find(person => person.age < 50);
console.log(isYounger);
console.log();

const isOlderIndex = persons.findIndex(person => person.age > 40);
console.log(isOlderIndex);
