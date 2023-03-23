// Intermediário4. Faça um procedimento que recebe por parâmetro os valores 
// necessário para o cálculo da fórmula de báskara e retorna, também por 
// parâmetro, as suas raízes, caso seja possível calcular.


function bascara(a,b,c){
    let bascara1 = 0
    let bascara2 = 0
    // x = (-b ± √(b² – 4ac)) / (2a)
    let deslta = (b*b) - (4*a*c)

    bascara1 = (-b + Math.sqrt(deslta)) / (2*a)
    bascara2 = (-b - Math.sqrt(deslta)) / (2*a)
    
    return console.log(bascara1, bascara2);
}

bascara(1,-1,-6)