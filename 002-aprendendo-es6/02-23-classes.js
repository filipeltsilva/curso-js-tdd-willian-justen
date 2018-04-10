/*
  Sintaxe alternativa e menos utilizada para criação de classes:

  let variableName = class{

  }
*/

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  hello() {
    console.log(`O ${this.name} ${this.sound}.`);
  }

  static info() {
    console.log('Esse método é estático, portanto só é acessado diretamente pela classe.');
  }

  // Propriedade getter
  get socialName() {
    console.log('Meu nome é Filipe.');
  }

  // Propriedade setter
  set nickName(nick) {
    this.nick = nick;
  }
}

const dog = new Animal('cachorro', 'late');
dog.hello();
Animal.info();
dog.socialName;

dog.nickName = 'Filipe Lemos';
console.log(dog.nick);
