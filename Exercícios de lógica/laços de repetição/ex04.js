// Difícil 4 – Faça um programa que leia um valor n, 
// inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

let valor = 8;
let s = 0;

for(let i = 1; i <= valor; i++){
    s = valor/i
    console.log(s);
}