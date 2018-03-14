// Array.from() transforma estruturas que não são arrays em arrays.
const someText = 'Filipe Lemos';
console.log(someText);

const someTextArray = Array.from(someText);
console.log(someTextArray);

const someTextArrayMapped = someTextArray.map(item => item.toUpperCase());
console.log(someTextArrayMapped);
