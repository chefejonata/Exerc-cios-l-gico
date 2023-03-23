// Fácil 1. Faça uma função que recebe por parâmetro o raio de
// uma esfera e calcula o seu volume (v = 4/3.P .R3).

function raioDaEsfera(raio) {
  v = (4 / 3) * Math.PI * (raio * raio * raio);
  return v;
}
console.log(raioDaEsfera(3));


