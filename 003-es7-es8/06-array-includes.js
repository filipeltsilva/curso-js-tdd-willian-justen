const anArray = ['Filipe', 30, 1.85, 97, true];

// Pesquisa por valores da forma antiga com indexOf
console.log(anArray.indexOf(97) > -1);
console.log(anArray.indexOf('Pai') > -1);

// Pesquisa por valores com Array.includes()
console.log(anArray.includes(97));
console.log(anArray.includes('Pai'));
