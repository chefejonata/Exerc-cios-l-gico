// Intermediário 12- Escreva um programa que lê o tamanho do lado 
// de um quadrado e imprime um quadrado daquele tamanho com 
// asteriscos. Seu programa deve usar laços de repetição e funcionar para 
// quadrados com lados de todos os tamanhos entre 1 e 20.

// Por exemplo, para lado igual a 5:
// *****
// *****
// *****
// *****
// *****


let numeroUser = 5;

for(let i =0; i < numeroUser; i++){
    let lista = ''
    for(let j = 0; j < numeroUser; j++){
        lista += "*"
    }
    console.log(lista);
}


