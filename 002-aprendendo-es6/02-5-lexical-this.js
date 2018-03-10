/*
  Arrow Functions por natureza não possuem um escopo, um contexto, portanto não possuem um this.
  Esse é o conceito de this léxico. Seu this é o this do seu contexto, em vez de ser por padrão o objeto Window.
  Outra forma, menos limpa, de fazer isso seria atribuir o this a uma variável dentro da função.
*/
function MyName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayMyName = setInterval(() => console.log(`${this} -> ${this.firstName} ${this.lastName}`), 3000);
}

const name = new MyName('Filipe', 'Lemos');
name.sayMyName;
