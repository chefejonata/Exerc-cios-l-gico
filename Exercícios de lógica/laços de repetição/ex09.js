// Fácil 9-    Faça um programa que receba a idade de dez pessoas e que 
// calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

let idades = [18,15,47,41,12,36,10,8,86,12];
let maioresDeIdade = []

for(let i = 0; i < idades.length; i++){
    if(idades[i] >= 18){
        maioresDeIdade.push(idades[i])
    }
}
console.log(maioresDeIdade);



