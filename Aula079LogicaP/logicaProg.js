/**
 - Escreva um programa que leia as notas das duas avaliações normais
    e a nota da avaliação optativa

 - Caso o aluno não tenha feito a optativa deve ser fornecido a valor -1
 
 - Calcular a média do semestre considerando que a prova optativa
  substitui a nota mais baixa entre as duas primeiras avaliações.

 - Escrever a média e mensagens que indiquem se o aluno foi aprovado,
  reprovado ou está em exame, de acordo com as informações abaixo:
  
  - Se a média for maior igual a 6
     Aprovado
  - Se a média for menor que 3
    Reprovado
  - Se média for maior igual a 3 e menor 6
    Exame   
*/

// Aluno 1
const account1 = 1;
const account2 = 3;
let accountOptional = 2;

function calculateAverage(note1, note2, optionalNote) {
  if (accountOptional == undefined) {
    accountOptional = -1;
    console.log(accountOptional);
  }

  if (note1 < note2) {
    note1 = note1 < optionalNote ? optionalNote : note1;
  } else if (note2 < note1) {
    note2 = note2 < optionalNote ? optionalNote : note2;
  }

  const Average = (note1 + note2) / 2;
  return Average;
}

// const mediaAluno1 = calculateAverage(account1, account2, accountOptional);

// Aluno 2
const mediaAluno2 = calculateAverage(2, 5);
writeMediaMessage(mediaAluno2);

function writeMediaMessage(media) {
  if (media >= 6) {
    console.log(`Aprovado: ${media}`);
  } else if (media < 3) {
    console.log(`Reprovado: ${media}`);
  } else {
    console.log(`Exame: ${media}`);
  }
}

writeMediaMessage(mediaAluno2);

// Aluno 3
writeMediaMessage(calculateAverage(6, 7));
