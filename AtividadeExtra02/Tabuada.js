function tabuada(numero) {
  let saida = "** Tabuada do " + numero + " **<br>";

  for (let i = 0; i <= 10; i++) {
    saida = saida + numero + " x " + i + " = " + (numero * i) + "<br>";
  }

  return saida;
}

function mostrarTabuada() {
  let numero = parseInt(prompt("Digite um número inteiro de 1 a 10:"));

  if (isNaN(numero) || numero < 1 || numero > 10) {
    document.getElementById("resultado").innerHTML = "Digite um número inteiro entre 1 e 10.";
  } else {
    document.getElementById("resultado").innerHTML = tabuada(numero);
  }
}
