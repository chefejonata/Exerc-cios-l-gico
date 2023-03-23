// Difícil 10. Leia um vetor de 5 posições contendo os caracteres 
// de um numero. Em seguida escreva esse numero por extenso.


// A palavra é:  cinco

let resposta = ["c","i","n","c","o"];
let lista = ["o","c","n","i","c"];
let troca = ""

for(let i = 0; i < resposta.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(resposta[i] === lista[j]){

            troca = lista[j]
            lista[j] = lista[i]
            lista[i] = troca

            break
        }
    }
}

console.log(lista);


