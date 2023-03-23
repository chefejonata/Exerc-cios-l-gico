// Intermediário 10-    Faça um programa que receba a idade de 15 pessoas e 
// que calcule e mostre:
// a) A quantidade de pessoas em cada faixa etária;
// b) A porcentagem de pessoas na primeira e na última faixa etária, com 
// relação ao total de pessoas: 

// Até 15 anos
// De 16 a 30 anos
// De 31 a 45 anos
// De 46 a 60 anos
// Acima de 61 anos

let idades = [45,12,14,36,14,25,7,8,45,98,78,45,21,47,45];
let idades15 = [], idades16a30 = [], idades31a45 = [], idades46a60 = [], idades61mais = []

for(let i = 0; i < idades.length; i++){
    if(idades[i] <= 15){
        idades15.push(idades[i])
    }else if(idades[i] >= 16 && idades[i] <= 30){
        idades16a30.push(idades[i])
    }else if(idades[i] >= 31 && idades[i] <= 45){
        idades31a45.push(idades[i])
    }else if(idades[i] >= 46 && idades[i] <= 60){
        idades46a60.push(idades[i])
    }else{
        idades61mais.push(idades[i])
    }
}

let percentagem15Anos = (idades15.length * 100) / 15
let percentagem61Anos = (idades61mais.length * 100) / 15


console.log(`Idades até 15 anos: ${idades15.length}`);
console.log(`Idades entre 16 e 30 anos: ${idades16a30.length}`);
console.log(`Idades entre 31 e 45 anos: ${idades31a45.length}`);
console.log(`Idades entre 46 a 60 anos: ${idades46a60.length}`);
console.log(`Idades maiores que 61 anos: ${idades61mais.length}`);

console.log(percentagem15Anos)
console.log(percentagem61Anos)