// Fácil 5. Faça uma função que recebe por parâmetro o tempo de duração de uma 
// fábrica expressa em segundos e retorna também por parâmetro esse tempo em 
// horas, minutos e segundos.

function tempodeduação(num){
    let horas = 0
    let minutos = 0
    let segundo = num

    horas = num/3600
    minutos = (num%3600)/60
    segundo = num%60

    return console.log(horas, minutos, segundo);
}

tempodeduação(556)



