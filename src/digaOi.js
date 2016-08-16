function digaOi(){
alert("oi");
}

function calcularNotas(){
  var a = number(document.getElementById('nota1').value);
  var b = number(document.getElementById('nota2').value);
  var c = number(document.getElementById('nota3').value);
  var d = number(document.getElementById('nota4').value);
  var soma  = parseInt((a + b + c + d));
  var resultado = 0;

  switch (soma) {
    case 1:
      resultado = 'Reprovado';
    break;
    case 10:
        resultado = 'Reprovado média' + soma;
      break;
  }

  alert(resultado);

}

function adicionarCarro(){
  var carros = [];
  var codico = document.getElementById("codigo").value;
  var fab = document.getElementById("fabricante").value;
  var modelo = document.getElementById("modelo").value;

  carros.push(codico,fab,modelo);
  alert(`Codigo= ${carros[0]}`);
  return carros;
}

function mostrarCarros(){


}
