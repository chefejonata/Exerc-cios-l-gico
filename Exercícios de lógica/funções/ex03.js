// Intermediário 3. Faça uma função que recebe por parâmetro um valor inteiro
// e positivo e retorna o valor lógico Verdadeiro caso o valor seja primo
// e Falso em caso contrário.

function ValorPrimoOuNao(num) {
  for (let i = 1; i <= num; i++) {
    let contador = 0;
    teste = false;

    for (let j = 1; j <= num; j++) {
      if (i % j == 0) {
        contador++;
      }
    }

    if (contador == 2) {
      teste = true;
    }

    contador = 0;
  }

  return console.log(teste);
}
ValorPrimoOuNao(9);
