var vitorias = 0;
var derrotas = 0;
var empates = 0;

function jogar(escolhaUsuario) {

  var numero = Math.floor(Math.random() * 3);
  var escolhaComputador;

  if (numero == 0) {
    escolhaComputador = "pedra";
  } else if (numero == 1) {
    escolhaComputador = "papel";
  } else {
    escolhaComputador = "tesoura";
  }

  var mensagem;

  if (escolhaUsuario === escolhaComputador) {
    mensagem = "Empate!";
    empates++;
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")
  ) {
    mensagem = "Você ganhou!";
    vitorias++;
  } else {
    mensagem = "O computador ganhou!";
    derrotas++;
  }

  document.getElementById("resultado").innerHTML =
    "<p>Você: " + escolhaUsuario + "</p>" +
    "<p>Computador: " + escolhaComputador + "</p>" +
    "<p><b>" + mensagem + "</b></p>";

  atualizarPlacar();
}

function atualizarPlacar() {
  document.getElementById("vitorias").innerHTML = vitorias;
  document.getElementById("derrotas").innerHTML = derrotas;
  document.getElementById("empates").innerHTML = empates;
}

function zerarPlacar() {
  var decisao = confirm("Deseja realmente zerar o placar?");
  if (decisao) {
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    atualizarPlacar();
    document.getElementById("resultado").innerHTML = "<p>Faça sua jogada!</p>";
  }
}