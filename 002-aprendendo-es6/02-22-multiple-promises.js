/*
  O objeto Promise possui alguns métodos estáticos que permitem a resolução de multiplas promises.
*/

const hunters = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Gon', 'Killua', 'Netero', 'Bisky', 'Kite']);
  }, 3000);
});

const ants = new Promise((resolve, reject) => {
  resolve(['Meruem', 'Neferpitou', 'Colt']);
});

// all() trabalha com todas as promises passadas e após a resolução o método executa a ação programada.
Promise
  .all([hunters, ants])
  .then((response) => {
    console.log(response);
  });

// race() também recebe uma lista de promises, porém a ação programada é executada quando a primeira é resolvida.
Promise
  .race([hunters, ants])
  .then((response) => {
    console.log(response);
  });
