const fetch = require('node-fetch');

async function getRepos() {
  try {
    const response = await fetch('https://api.github.com/users/filipeltsilva/repos');
    const data = await response.json();

    return data.map((repo) => console.log(repo.name));
  } catch (error) {
    console.error('Ocorreu um erro: ', error);
  }
}

getRepos();
