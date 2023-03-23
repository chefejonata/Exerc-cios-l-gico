// Fácil 6 –   Uma loja deseja cadastrar 5 clientes e verificar se o 
// faturamento da loja foi superior a loja B (faturamento = 54000).  
// Se o faturamento atingir esse valor mostre na tela uma mensagem 
// contendo em quanto foi superado o faturamento.


let clinetesLojaA = [54000, 9564, 4526, 9541,7854];
let lojaB = 54000
let soma = 0;

for(let i = 0; i < clinetesLojaA.length; i++){
    soma = soma + clinetesLojaA[i]
}

if(soma < lojaB){
    console.log("A loja á não superou a loja B");
}else{
    console.log(`loja A superou a loja B em ${(soma - lojaB)}`);
}
