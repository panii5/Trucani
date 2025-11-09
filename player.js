export class Player {
  constructor(nombre) {
    this.nombre = nombre;
    this.cartas = [];
    this.puntos = 0;
  }

  mostrarCartas(containerId) {
    const contenedor = document.getElementById(containerId);
    contenedor.innerHTML = '';
    this.cartas.forEach(carta => {
      const div = document.createElement('div');
      div.className = 'bg-white text-black rounded-lg px-2 py-1 text-center';
      div.textContent = `${carta.valor} de ${carta.palo}`;
      contenedor.appendChild(div);
    });
  }
}
