async function getRepos() {
  try {
    const fetch = require('node-fetch');
    const response = await fetch('https://api.github.com/users/filipeltsilva/repos');
    const data = await response.json();

    return data.map((repo) => console.log(repo.name));
  } catch (error) {
    console.error('Ocorreu um erro: ', error);
  }
}

getRepos();
