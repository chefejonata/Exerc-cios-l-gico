// Intermediário 8. Leia um vetor de 40 posições e acumule os valores 
// do primeiro elemento no segundo, deste no terceiro e assim por 
// diante. Ao final, escreva o vetor obtido.

let lista = [1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i < lista.length; i++){
    lista[i] += lista[i-1] 
}

console.log(lista);









