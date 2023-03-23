// Fácil 3. Leia um vetor de 16 posições e troque os 8 primeiros 
// valores pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.

let vetores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

let primeiros = []
let segundos = []
let resultFinal = []

 primeiros  = vetores.slice(0,8);
 segundos  = vetores.slice(8,16);

 resultFinal = segundos.concat(primeiros)

 console.log(resultFinal);








