// Exemplo do Spread Operator como parâmetro de função

function pratoFeito(arroz, feijao, proteina) {
  console.log(`PF do dia: ${arroz}, ${feijao} e ${proteina}`);
}

const ingredientes = ['Arroz Integral', 'Feijão Preto', 'Ovo Frito'];

pratoFeito(...ingredientes);
