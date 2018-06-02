/*
  Esse tipo de import com * e alias importa todas as funções de uma determinada biblioteca.
  É possível importar apenas um método de uma biblioteca, dentro das {}. Pode-se
  aplicar aliases para eles também. Ex.: import {union as juntar} from 'ramda'
*/
import * as r from 'ramda'
import somar, { subtract, multiplicar, divide as dividir, PI } from './exports'

const arrayA = [1, 1, 2, 3, 4, 4, 4, 5];
const arrayB = [6, 6, 6, 7, 8, 8, 9, 10, 10, 10, 10];
const arrayC = r.union(arrayA, arrayB);

console.log(arrayC);
console.log(somar(13, 21));
console.log(subtract(89, 55));
console.log(multiplicar(8, 21));
console.log(dividir(144, 89));
console.log(PI);
