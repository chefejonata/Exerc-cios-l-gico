// Intermediário 2. Escreva um procedimento que recebe as 3 notas de um 
// aluno por parâmetro e uma letra. Se a letra for A o procedimento 
// calcula a média aritmética das notas do aluno, se for P, a sua 
// média ponderada (pesos: 5, 3 e 2) e se for H, a sua média harmônica. 
// A média calculada também deve retornar por parâmetro.


function mediaDasNotas(nota1, nota2, nota3, letra){
    let resultado = 0
    if(letra == 'a'){
        resultado = (nota1 + nota2 + nota3)/3
    }else if(letra == 'p'){
        resultado = ((nota1*5)+(nota2*3)+(nota3*2))/10
    }else if(letra == 'h'){
        resultado = 3 / (1/nota1+ 1/nota2 + 1/nota3)
    }else{
        console.log("Digite os parametros corretamentes");
    }
    return resultado
}

console.log(mediaDasNotas(5,8,7,'h'));





