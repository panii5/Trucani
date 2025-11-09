import { crearMazo, repartirCartas } from './deck.js';
import { Player } from './player.js';
import { Game } from './game.js';

const btnNewGame = document.getElementById('btn-new-game');
const btnNextRound = document.getElementById('btn-next-round');
const statusDiv = document.getElementById('status');

let game;

btnNewGame.addEventListener('click', () => {
  const mazo = crearMazo();
  const jugador1 = new Player('Jugador 1');
  const jugador2 = new Player('Jugador 2');
  game = new Game([jugador1, jugador2], mazo);
  game.iniciar();
  statusDiv.textContent = '¡Nueva partida iniciada!';
});

btnNextRound.addEventListener('click', () => {
  if (!game) return;
  game.siguienteMano();
});

