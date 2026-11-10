function maiorNumero(a, b, c) {
  let maior = a;
  if (b > maior) {
    maior = b;
  }
  if (c > maior) {
    maior = c;
  }
  return maior;
}

function ordemCrescente(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort(function (x, y) { return x - y; });
  return numeros;
}

function ehPalindromo(texto) {
  texto = texto.toUpperCase();

  let semEspacos = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) !== " ") {
      semEspacos = semEspacos + texto.charAt(i);
    }
  }

  let palindromo = true;
  for (let i = 0; i < semEspacos.length; i++) {
    if (semEspacos.charAt(i) !== semEspacos.charAt(semEspacos.length - 1 - i)) {
      palindromo = false;
    }
  }

  if (palindromo) {
    return "é palíndromo";
  } else {
    return "não é palíndromo";
  }
}

function subconjunto(palavra1, palavra2) {
  if (palavra1 === undefined || palavra2 === undefined ||
      palavra1 === null || palavra2 === null ||
      palavra1 === "" || palavra2 === "") {
    return "erro";
  }

  if (palavra1.lastIndexOf(palavra2) !== -1) {
    return "é um subconjunto";
  } else {
    return "não é um subconjunto";
  }
}

function diaDaSemana(data) {
  let dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira",
              "quinta-feira", "sexta-feira", "sábado"];
  return dias[data.getDay()];
}

function funcao1() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  document.getElementById("resultado").innerHTML =
    "O maior número é: " + maiorNumero(n1, n2, n3);
}

function funcao2() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  document.getElementById("resultado").innerHTML =
    "Em ordem crescente: " + ordemCrescente(n1, n2, n3);
}

function funcao3() {
  let frase = prompt("Digite uma palavra ou frase:");

  document.getElementById("resultado").innerHTML =
    "\"" + frase + "\" " + ehPalindromo(frase);
}

function funcao4() {
  let p1 = prompt("Digite a primeira palavra:");
  let p2 = prompt("Digite a segunda palavra:");

  document.getElementById("resultado").innerHTML =
    "Resultado: " + subconjunto(p1, p2);
}

function funcao5() {
  let dia = parseInt(prompt("Digite o dia:"));
  let mes = parseInt(prompt("Digite o mês (1 a 12):"));
  let ano = parseInt(prompt("Digite o ano:"));

  let data = new Date(ano, mes - 1, dia);

  document.getElementById("resultado").innerHTML =
    dia + "/" + mes + "/" + ano + " é " + diaDaSemana(data);
}