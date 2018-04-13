/*
  WeakSets, diferente dos Sets, só aceitam objetos e não são iteráveis.
  Tirando esses detalhes, a forma de se trabalhar com WeakSets e Sets é semelhante.
*/

let object1 = {
  name: 'Filipe',
  age: 20
};

let object2 = {
  name: 'Fernandes',
  age: 57
};

let aWeakSet = new WeakSet([object1, object2]);
console.log(aWeakSet.has(object2));

aWeakSet.add({type: 'object'});
aWeakSet.delete(object1);
