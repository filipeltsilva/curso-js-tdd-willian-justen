/*
  Generators também são iteradores.
  Coloca-se um asterísco após a palavra function e usa-se a palavra-chave yield semelhante ao return.
  Pode-se usar vários yields em um generator, sendo a chamada a cada um feita em sequência com o next(). Logo, a execução do bloco é quebrada e não de forma contínua como em uma função comum.
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
