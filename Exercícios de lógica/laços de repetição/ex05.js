// Intermediário 5 –    Faça um programa que leia três 
// valores (A, B, C) e mostre-os na ordem lida.  Em seguida, 
// mostre-os em ordem crescente e decrescente.

let a = 4;
let b = 7;
let c = 3;
let troca = 0

console.log(a, b, c);

if(a > c){
    troca = a
    a = c
    c = troca
}

if(a > b){
    troca = a 
    a = b
    b = troca
}

if(b > c){
    troca = b 
    b = c
    c = troca
}

console.log(a, b, c);


if(a < c){
    troca = a
    a = c
    c = troca
}

if(a < b){
    troca = a 
    a = b
    b = troca
}

if(b < c){
    troca = b 
    b = c
    c = troca
}


console.log(a, b, c);

