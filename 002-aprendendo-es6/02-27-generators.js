/*
  Generators também são iteradores.
  Coloca-se um asterísco após a palavra function e usa-se a palavra-chave yield como em um retorno de função.
  A chamada da função é semelhante aos iterators, com next() e sua execução não é top-down como numa função comum.
*/

function* generateNames() {
  console.log('Primeiro nome:')
  yield 'Filipe';

  console.log('Segundo nome:');
  yield 'Mickey';

  console.log('Terceiro nome:');
  yield 'Donald';
}

const names = generateNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
