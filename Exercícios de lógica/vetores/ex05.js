// Fácil 5. Leia um vetor de 40 posições. Contar e escrever quantos valores 
// pares ele possui.

let lista = [45,12,78,98,56,23,32,65,9,887,5,42,1,65,3,451];
let contador = 0
for(let i = 0; i < lista.length; i++){
    if(lista[i]%2 == 0){
        contador++
        console.log(lista[i]);
    }
}
console.log(`A lista possui ${contador} números pares`);