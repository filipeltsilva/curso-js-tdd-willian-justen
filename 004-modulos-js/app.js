// Esse tipo de import com alias importa todas as funções de uma determinada biblioteca
import * as r from 'ramda'

const arrayA = [1, 1, 2, 3, 4, 4, 4, 5];
const arrayB = [6, 6, 6, 7, 8, 8, 9, 10, 10, 10, 10];
const arrayC = r.union(arrayA, arrayB);

console.log(arrayC);
