/*
 * Describe serve para separar os métodos e classes
 * Podemos usar vários describes por arquivo, mas não é convencional usá-los de forma aninhada
*/
describe("App", function() {
  // O context() especifica o caso de teste
  context("Caso 1", function() {
    // O it() executa os testes
    it("Should sum 2 with 2 and return 4", function() {
      throw new Error("Just an error"); 
    });

    it("Should sum 2 with 3 and return 5", function() {
      throw new Error("Another error"); 
    });
  });
  
  // O método only() permite rodar apenas o teste no qual foi chamado
  // O método skip() permite pular o teste onde foi chamado
  context("Caso 2", function() {
    it.skip("Should return the string Filipe", function() {
      throw new Error("Just an error"); 
    });
  });
});

describe("Main", function() {
  context("Caso 1", function() {
    it("Should sum 2 with 2 and return 4", function() {
      throw new Error("Just an error"); 
    });
  });
});
