export function crearMazo() {
  const palos = ['espada', 'basto', 'oro', 'copa'];
  const valores = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  const mazo = [];
  for (const palo of palos) {
    for (const valor of valores) {
      mazo.push({ valor, palo });
    }
  }
  return mezclar(mazo);
}

export function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function repartirCartas(mazo, jugadores, cantidad = 3) {
  jugadores.forEach(j => (j.cartas = []));
  for (let i = 0; i < cantidad; i++) {
    jugadores.forEach(j => {
      j.cartas.push(mazo.pop());
    });
  }
}
