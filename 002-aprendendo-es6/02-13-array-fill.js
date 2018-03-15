/*
  O método fill() irá preencher os arrays com um determinado valor com a quantidade de vezes desejada.
  É possível especificar em quais índices o preenchimento começará e terminará.
*/
const someArray = new Array(10);
someArray.fill('ha');
console.log(someArray);

someArray.fill('he', 2, 5);
console.log(someArray);
