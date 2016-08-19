var carros = [];

function adicionarCarro(codigo,fabricante,modelo) {
  carros.push({nome:codigo.value,fab:fabricante.value,mod:modelo.value});
}

function mostrarCarros() {
  var text;
  for (var i = 0; i < carros.length; i++) {
    text = `Código: ${carros[i].nome} fabricante: ${carros[i].fab} Modelo: ${carros[i].mod}`
  alert(text);
  }

}
