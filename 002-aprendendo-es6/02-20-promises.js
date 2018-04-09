/*
  Promises são objetos que contém ações que serão finalizadas em um futuro. Daí o nome de promessa.
  Facilita no trabalho com dados assíncronos.
  Recebe dois parâmetros: um resolve() para efetuar a ação e um reject() para negá-la caso haja alguma exceção.
*/

let promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true)
      resolve('Promise funcionando')
    else
      reject('Promise não funcionou')
  }, 3000);
});

// O método then() executa a promise no caso de sucesso, enquanto o catch() executa no casso de falha.
// É permitido o uso de métodos then() aninhados.
promessa
  .then((data) => {
    console.log(data);
    return 'Filipe';
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
