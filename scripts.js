// Na função abaixo, calculamos a média de um aluno.
// As quatro médias são declaradas nas variáveis: nota1/nota2/nota3/nota4.
// Depois, a variável "total" calcula a soma das quatro notas.
// Por fim, calculamos a variável média que é a soma das quatro notas (total) dividido por 4. [Baseando-se no conceito de Média Aritmética)
// Finalmente imprimimos o código com um console.log, dizendo uma mensagem identada com a variável "media".
/// Agora, determinaremos se o aluno passou de ano ou não. Utiliza-se, portanto, a condição lógica "if-else" e determinamos sua passagem por meio de duas lógicas.
// Se (if) a média (variável "media") for maior ou igual a 7 (media =>) o aluno passará de ano. [Na nossa "escola", a média será 7.]

function CalcMedia () {
	var nota1 = Number(prompt("Qual é a nota 1 do aluno?"));
	var nota2 = Number(prompt("Qual é a nota 2 do aluno?"));
	var nota3 = Number(prompt("Qual é a nota 3 do aluno?"));
	var nota4 = Number(prompt("Qual é a nota 4 do aluno?"));
	var total = (nota1 + nota2 + nota3 + nota4);
	var media = (total/4);
	console.log("A média do aluno é: ", media);
  if (media => 7) {
    console.log("O aluno passou de ano!");
  } else {
    console.log("O aluno repetiu de ano!");
  }

}

CalcMedia();


