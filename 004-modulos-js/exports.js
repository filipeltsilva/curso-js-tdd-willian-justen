function sum(number1, number2) {
  return number1 + number2;
}

/*
  export default compõe o método principal de exportação. Cada arquivo só pode ter 1 export default.
  Não é necessário uso de {} para sua importação.
  É permitido o uso de quaisquer nomes diferentes na importação.
*/
export default sum;

/*
  Padrão named export. Pode-se usar vários named exports em um único arquivo.
  O uso de {} para sua importação é necessário.
  Deve-se usar o mesmo nome da exportação, não permitindo nomes diferentes na importação.
*/
export function subtract(number1, number2) {
  return number1 - number2;
}

const PI = 3.14;

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

/*
  Esse padrão de exportação é mais flexível e permite a exportação de mais de uma estrutura.
  Também permite o uso de aliases.
  Variáveis também podem ser exportadas.
*/
export {multiply as multiplicar, divide, PI};

// É possível exportar tudo o que se deseja em uma única declaração: export * as qualquerNome.
