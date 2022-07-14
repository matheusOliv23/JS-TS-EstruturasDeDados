//Escreva uma função que recebe um número qualquer
// de números inteiros como argumentos e retorne
// a média aritmética entre eles

function media(numeros) {
    let soma = 0;

    numeros.forEach((numero) => {
        soma += numero;
    });

    const media = soma / numeros.length;

    return media;
}

console.log(media([2, 3, 4, 5]));

// REFATORANDO FUNÇÃO

function media2(...numeros) {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    return soma / numeros.length;
}

console.log(media2(2, 2, 2, 3));

// A ideia do exercicio era bem simples. Consistia em
// calcular uma media de numeros. A media nada mais é do
// que a soma dos numeros dividida pela quantidade de numeros

// Na primeira função, declarei uma variavel inicial chamada soma
// e depois utilizei o método forEach pra percorrer por todos os
// numeros passados como parametro para a função. A cada numero
// que era percorrido, ele era somado com a variavel inicial.
// Logo em seguida apenas declarei uma variavel media e dividi
// a soma pelo tamanho do array, que é exatamente a quantidade de numeros

// Na segunda função utilizei uma forma mais rapida pra resolver.
// Com o método reduce, cada elemento é percorrido e acumulado.
// No final, um array é transformado em apenas um elemento.