class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Oi, eu me chamo ${this.name}.`);
  }
}

// A palavra chave extends indica a relação de herança no ES6
class Dog extends Animal {
  constructor(name, breed) {
    // O super() invoca recursos da classe ancestral. Também pode ser resolvido com a sintaxe: NomedaClasse(parâmetros).
    super(name);
    this.breed = breed;
  }

  myBreedIs() {
    console.log(`A raça do(a) ${this.name} é ${this.breed}.`);
  }
}

const pluto = new Dog('Pluto', 'Bloodhound');
pluto.hello()
pluto.myBreedIs();
