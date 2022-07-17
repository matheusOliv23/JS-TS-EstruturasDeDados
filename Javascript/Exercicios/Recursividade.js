/* Escreva uma função que recebe um número e retorna uma quantidade
equivalente de 'chunks' separados por um traço '-' sem utilizar
nenhuma estrutura de repetição*/

function chunks(numero) {
    if (numero === 0) {
        return "";
    }
    if (numero === 1) {
        return "chunk";
    } else {
        return `chunk-${chunks(numero - 1)}`;
    }
}

console.log(chunks(4));

/* A ideia é retornar a palavra 'chunk' de acordo com a 
quantidade passada como parâmetro.

Se o parâmetro for 0 não vai retornar nenhuma palavra
Se for 1 vai retornar uma palavra

O else está fazendo o seguinte: Caso o valor não seja nem 0 nem 1,
a função vai retornar uma palavra seguida pela função chamando novamente
com o numero de parametros menos -1 . Essa função vai se repetindo até chegar a 0
e não ter mais palavra pra retornar.


*/