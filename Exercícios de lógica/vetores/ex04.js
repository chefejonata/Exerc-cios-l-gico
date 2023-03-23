// Fácil 4. Leia um vetor de 20 posições e em seguida um valor X qualquer. 
// Seu programa devera fazer uma busca do valor de X no vetor lido e 
// informar a posição em que foi encontrado ou se não foi encontrado.

let vetores = [45,21,32,65,98,78,54,1,2,4,7,5,8,9,655,22,17,84,53,62];
let x = 88;

for(let i = 0; i <= vetores.length; i++){
    if(vetores[i] == x){
        console.log("O valor foi encontrado!\nNa possução ", i);
        break
    }else if(i == vetores.length - 1){
        console.log("O valor não existe dentro do Arrey!");
    }
}










