/*
  Funções assíncronas são definidas pela palavra-chave async antes de function.
  Retornam uma Promise.
  Await instrui o JavaScript a esperar pela resolução de uma tarefa antes de ir para a próxima.
  Await só pode ser utilizada em funções assíncronas.
  Deixa o código mais limpo e com menos encadeamentos aparentes, suprimindo métodos como o then().
*/

const fetch = require('node-fetch');

async function getRepos() {
  const response = await fetch('https://api.github.com/users/filipeltsilva/repos');
  const data = await response.json();

  return data.map((repo) => console.log(repo.name));
}

getRepos();

// Uso convencional de Promises
// fetch('https://api.github.com/users/filipeltsilva/repos')
//   .then((data) => data.json())
//   .then((data) => data.map((repo) => {
//     console.log(repo.name);
//   }));
