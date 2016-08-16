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
