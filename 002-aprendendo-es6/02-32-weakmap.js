/*
  WeakMaps, assim como WeakSets, só aceitam objetos.
  Ao perder a referência de um objeto (atribuir null, por exemplo) o Garbage Colletor apaga esse objeto da memória em questão de segundos.
*/

let object1 = {
  name: 'Filipe',
  age: 30
};

let object2 = {
  name: 'Geralda',
  age: 58
};

// Com WeakMaps, considera-se todo o objeto como a chave da estrutura
let aWeakMap = new WeakMap();
aWeakMap.set(object1, 'Dados do Filipe');
aWeakMap.set(object2, 'Dados da Geralda');
