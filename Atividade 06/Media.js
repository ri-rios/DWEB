var nome = prompt("Qual é o nome do aluno?");
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var nota4 = parseFloat(prompt("Digite a quarta nota:"));

var decisao = confirm("Deseja ver a média de " + nome + "?");

if (decisao) {
  var media = (nota1 + nota2 + nota3 + nota4) / 4;
  alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
} else {
  alert("Cálculo cancelado");
}