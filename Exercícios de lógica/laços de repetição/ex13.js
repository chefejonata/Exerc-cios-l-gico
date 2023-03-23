// Intermediário 13- Escreva um programa que lê o tamanho do lado de um 
// quadrado e imprime um quadrado daquele tamanho com asteriscos 
// e espaços em branco. Seu programa deve funcionar para quadrados 
// com lados de todos os tamanhos entre 1 e 20.
// Para lado igual a 5:
// *****
// *    *
// *    *
// *    *
// *****


let numeroUser = 5;

for(let i = 0; i < numeroUser; i++){
    let lista = ''
    for(let j = 0; j < numeroUser; j++){

        if (i == 0 || i == numeroUser - 1 || j == 0 || j == numeroUser - 1) {
            lista += "*";
          } else {
            lista += " ";
          }
    }
    console.log(lista);
}

