/*
  Parâmetros de função podem receber valores padrão.
  Caso esse valor não seja sobrescrito, ele será processado.

*/

function hello(greeting = 'Oi', name = 'Goku') {
  console.log(`${greeting}, eu sou o ${name}!`);
}

hello();
hello('Olá', 'Filipe');
hello(undefined, 0);
hello(false);
