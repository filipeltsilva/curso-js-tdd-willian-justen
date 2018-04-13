/*
  Proxies permitem definir comportamentos diferentes para métodos dentro de um objeto.
  É instanciado um objeto da classe Proxy com dois parâmetros:
    - um target que será um objeto manipulado
    - um objeto handler que definirá os comportamentos desejados
*/

let anObject = {
  name: 'Filipe',
  age: 30
};

let proxy = new Proxy(anObject, {
  get(target, name) {
    console.log('Informe seu nome');
    return target[name];
  },

  set(target, age, value) {
    console.log('Informe uma nova idade');
    target[age] = 20;
  }
});

