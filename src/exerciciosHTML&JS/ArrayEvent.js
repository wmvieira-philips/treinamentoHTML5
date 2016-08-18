var carros = [{codigo:"",fabricante:"",modelo:""}];

function adicionarCarro(codigo,fabricante,modelo) {
  carros.push(codigo=codigo.value,fabricante=fabricante.value,modelo=modelo.value);
}

function mostrarCarros() {
  alert(carros.codigo.value);
}
