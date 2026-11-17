function calcularIMC() {
  let altura = parseFloat(prompt("Digite sua altura em metros (ex.: 1.75):").replace(",", "."));
  let peso = parseFloat(prompt("Digite seu peso atual em kg (ex.: 70):").replace(",", "."));

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    document.getElementById("resultado").innerHTML = "Valores inválidos. Tente novamente.";
    return;
  }

  let imc = peso / (altura * altura);
  let classificacao;
  let grau;

  if (imc < 18.5) {
    classificacao = "Magreza";
    grau = "0";
  } else if (imc < 25) {
    classificacao = "Normal";
    grau = "0";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    grau = "I";
  } else if (imc < 40) {
    classificacao = "Obesidade";
    grau = "II";
  } else {
    classificacao = "Obesidade grave";
    grau = "III";
  }

  document.getElementById("resultado").innerHTML =
    "Seu IMC é: " + imc.toFixed(2) + "<br>" +
    "Classificação: " + classificacao + "<br>" +
    "Grau de obesidade: " + grau;
}
