// Fácil 6. Leia um vetor de 40 posições e atribua valor 0 
// para todos os elementos que possuírem valores negativos.

let lista = [-1,4,8,45,-78,-89,74,87,-6,-7,1]

for(let i = 0; i <= lista.length; i++){
    if(lista[i] < 0){
        lista[i] =  0
    }
}

console.log(lista);






