const name = 'Filipe Lemos';

// Método startsWith() avalia se é verdadeiro ou falso o trecho de início de uma string em relação ao índice passado
console.log(name.startsWith('Fi',0));
console.log(name.startsWith('li', 2));
console.log(name.startsWith('Lemos', 1));
console.log();

// Método endsWith() avalia se é verdadeiro ou falso o trecho do final de uma string em relação ao índice passado
console.log(name.endsWith('mo', 11));
console.log(name.endsWith('Le', 9));
console.log(name.endsWith('z', 12));
console.log();

// O método includes() verifica se um trecho de uma string existe dentro da string que está sendo avaliada
console.log(name.includes('ipe Le'));
console.log(name.includes('ipeLemos'));
console.log(name.includes('Lemoz'));
console.log()
// Método repeat repete uma string de acordo com a quantidade passada no parâmetro
console.log('ha'.repeat(5));
