var piedra = "✊";
var papel = "✋";
var tijera = "✌";
var puntajeComputer = 0;
var puntajePlayer = 0;

const computer = () => {
  let num =
    Math.round(Math.random()) +
    Math.round(Math.random()) +
    Math.round(Math.random());
  if (num <= 1) {
    return tijera;
  } else if (num === 2) {
    return piedra;
  } else if (num === 3) {
    return papel;
  }
};
document.writeln("🏁Que comienze el juego🏁");
const jugada = () => {
    let player;
  let input = prompt("Escriba su jugada. Piedra, Papel 0 Tijera");
  let normalizeInput = input.toLowerCase();
  if (normalizeInput === "piedra") {
    player = piedra;
  } else if (normalizeInput === "papel") {
    player =  papel;
  } else if (normalizeInput === "tijera") {
    player = tijera;
  }
  return player
};
