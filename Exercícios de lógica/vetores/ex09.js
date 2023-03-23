// Fácil 9. Leia um vetor contendo letras de uma frase inclusive 
// os espaços em branco. Retirar os espaços em branco do vetor 
// e depois escreve-los.

let lista = ["O","l","á"," ","eu"," ","sou"," ","Jonata"," ","e"," ","gosto"," ","de"," ","jogar"," ","Overwact"]
let result =[]

for(let i = 0; i < lista.length; i++){
    if(lista[i] != ' '){
        result.push(lista[i])
    }
}
console.log(result);









