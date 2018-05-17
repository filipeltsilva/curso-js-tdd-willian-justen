/*
  Para trabalhar com múltiplas Promises com Async/Await, recomenda-se aplicar o Await em estrutura
  que utilizará o Promise.all()
*/

async function getRepos(users) {
  try {
    const fetch = require('node-fetch');
    const promises = users.map(user => fetch(`https://api.github.com/users/${user}/repos`)
      .then(data => data.json())
      .then(data => data.map(repo => repo.full_name))
    );
    const usersList = await Promise.all(promises);

    console.log(usersList);
  } catch (error) {
    console.error('Ocorreu um erro: ', error);
  }
}

getRepos(['filipeltsilva', 'wesbos', 'fdaciuk']);
