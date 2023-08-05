class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.filho = null;
    }
  }
  
  // Criando os nós da lista encadeada
  const pessoa1 = new Pessoa("Silas", 30);
  const pessoa2 = new Pessoa("Patrícia", 25);
  const pessoa3 = new Pessoa("Elmo", 10);
  
  // Definindo a referência ao filho de cada pessoa
  pessoa1.filho = pessoa2;
  pessoa2.filho = pessoa3;
  
  // Imprimindo as informações da lista encadeada
  console.log("Pessoa 1:", pessoa1);
  console.log("Pessoa 2:", pessoa2);
  console.log("Pessoa 3:", pessoa3);