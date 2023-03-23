// Fácil 11- Escreva um aplicativo que recebe inteiro e mostra os 
// números pares e ímpares (separados), de 1 até esse inteiro.


let numero = 15;
var impares = [];
var par = [];

for(let i = 0; i < numero; i++){
    if(i%2 == 0){
        par.push(i)
    }else{
        impares.push(i)
    }
}
console.log(par);
console.log(impares);

