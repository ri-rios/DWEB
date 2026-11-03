// quantidade de pessoas da pesquisa
var total = 45;

var registradas = 0;
var somaIdades = 0;
var maisVelha = 0;
var maisNova = 0;
var qtdPessimo = 0;
var qtdOtimoBom = 0;
var qtdFeminino = 0;
var qtdMasculino = 0;
var qtdOutros = 0;

function registrar() {
  // pega os valores digitados
  var idade = parseInt(document.getElementById("idade").value);
  var sexo = document.getElementById("sexo").value;
  var opiniao = parseInt(document.getElementById("opiniao").value);

  // verifica se tudo foi preenchido
  if (isNaN(idade)) {
    alert("Digite a idade.");
    return;
  }
  if (sexo === "") {
    alert("Selecione o sexo.");
    return;
  }
  if (isNaN(opiniao)) {
    alert("Selecione a opinião.");
    return;
  }
  if (registradas === total) {
    alert("A pesquisa já tem as 45 respostas.");
    return;
  }

  // idade
  somaIdades = somaIdades + idade;
  if (registradas === 0) {
    maisVelha = idade;
    maisNova = idade;
  }
  if (idade > maisVelha) {
    maisVelha = idade;
  }
  if (idade < maisNova) {
    maisNova = idade;
  }

  // opinião
  if (opiniao === 1) {
    qtdPessimo++;
  }
  if (opiniao === 3 || opiniao === 4) {
    qtdOtimoBom++;
  }

  // sexo
  if (sexo === "F") {
    qtdFeminino++;
  } else if (sexo === "M") {
    qtdMasculino++;
  } else {
    qtdOutros++;
  }

  registradas++;

  // limpa os campos e atualiza o contador
  document.getElementById("idade").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("opiniao").value = "";
  document.getElementById("contador").innerHTML = registradas;
}

function mostrarResultado() {
  if (registradas === 0) {
    alert("Ainda não há respostas registradas.");
    return;
  }

  var media = somaIdades / registradas;
  var porcentagem = (qtdOtimoBom * 100) / registradas;

  document.getElementById("resultado").innerHTML =
    "<h2>Resultado</h2>" +
    "Média das idades: " + media.toFixed(2) + "<br>" +
    "Pessoa mais velha: " + maisVelha + " anos<br>" +
    "Pessoa mais nova: " + maisNova + " anos<br>" +
    "Responderam péssimo: " + qtdPessimo + "<br>" +
    "Responderam ótimo ou bom: " + porcentagem.toFixed(2) + "%<br>" +
    "Mulheres: " + qtdFeminino + "<br>" +
    "Homens: " + qtdMasculino + "<br>" +
    "Outros: " + qtdOutros;
}