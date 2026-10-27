var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

var decisao = confirm("Deseja ver os resultados?");

if (decisao) {
  alert("Soma: " + (numero1 + numero2) +
    "\nSubtração: " + (numero1 - numero2) +
    "\nProduto: " + (numero1 * numero2) +
    "\nDivisão: " + (numero1 / numero2) +
    "\nResto da divisão: " + (numero1 % numero2));
} else {
  alert("Cálculo cancelado");
}