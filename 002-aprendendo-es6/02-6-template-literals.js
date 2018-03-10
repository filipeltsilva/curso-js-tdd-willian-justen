const local = {
  cidade: 'Governador Valadares',
  estado: 'MG'
};

const text = 'Nasci em ' + local.cidade + ', ' + local.estado + '.';
console.log(text);
console.log();

/*
  Podemos usar interpolação de strings adicionando a sentença entre crases e
  adicionando a variável dentro da estrutura delimitada por ${}
*/
const newText = `Nasci em ${local.cidade}, ${local.estado}.`;
console.log(newText);
console.log();

const fruits = 'banana' +
                '\n' +
                'laranja' +
                '\n' +
                'maçã';
console.log(fruits);
console.log();

// Código mais limpo com o uso de template literals.
const newFruits =
`banana
laranja
maçã`;
console.log(newFruits);
