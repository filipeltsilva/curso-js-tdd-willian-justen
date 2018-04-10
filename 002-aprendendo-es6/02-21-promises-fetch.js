/*
  A Fetch API é uma alternativa que visa atribuir a praticidade de trabalho das promises ao AJAX.
  Promises possuem 3 estados: pending, resolved e rejected
*/

var fetch = require('node-fetch');

fetch('https://api.github.com/users/filipeltsilva/repos')
  .then((data) => data.json())
  .then((data) => data.map((repo) => {
    console.log(repo.full_name);
  }))
  .catch((error) => console.log(error));
