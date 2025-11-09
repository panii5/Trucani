
import { repartirCartas } from './deck.js';

export class Game {
  constructor(jugadores, mazo) {
    this.jugadores = jugadores;
    this.mazo = mazo;
  }

  iniciar() {
    repartirCartas(this.mazo, this.jugadores);
    this.render();
  }

  siguienteMano() {
    if (this.mazo.length < 6) {
      alert('Fin del mazo. Reiniciá la partida.');
      return;
    }
    repartirCartas(this.mazo, this.jugadores);
    this.render();
  }

  render() {
    this.jugadores[0].mostrarCartas('player1-cards');
    this.jugadores[1].mostrarCartas('player2-cards');
  }
}
