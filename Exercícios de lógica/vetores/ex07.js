// Intermediário 7. Leia dois vetores de 20 posições e calcule um 
// terceiro vetor contendo, nas posições pares os valores do 
// primeiro e nas posições impares os valores do segundo.

let lista1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let lista2 = [45,12,32,568,9,78,74,85,96,36,25,14,15,26,43,48,59,75,86, 42];
let lista3 = [], k = 0, j = 1


    for(let i = 0; i < lista1.length; i++){
        if(i%2 == 0){
            lista3.push(lista1[j])
            j++
        }
        if(i%2 == 0){
            lista3.push(lista2[k])
            k++
        }
    }
    console.log(lista3);

