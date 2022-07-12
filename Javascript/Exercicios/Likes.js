// EXERCÍCIO DO CODE WARS

// WHO LIKES THIS?

// You probably know the "like" system from Facebook and other pages.People can "like"
//  blog posts, pictures or other items.We want to create the text that should be displayed
//  next to such an item.

// Implement the function which takes an array containing the names of people that like an item:

const nomes = ["Matheus", "Jose", "Carlos", "Sara", "Ana"];

function likes(names) {
    if (names.length === 0) {
        return "0 curtidas";
    } else if (names.length === 1) {
        return `${names[0]} curtiu isso`;
    } else if (names.length === 2) {
        return `${names[0]} e ${names[1]} curtiram isso`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} e ${names[2]} curtiram isso`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} e ${
      names.length - 2
    } outros curtiram isso`;
    }
}

console.log(likes(nomes));

// O exercício consistia em criar uma função que recebesse um array de nomes. De acordo com a quantidade
// de nomes nesse array seria retornado o nome das pessoas que deram like.

// A lógica da função likes é receber um parâmetro que vai ter como valor o array de nomes.
// A ideia consiste basicamente em checar o tamanho do array com o length, e , de acordo com
// o numero de indices do array, saber quantas pessoas curtiram.

// Se tiver 1 nome pelo menos, ele teria que retornar esse nome. Para isso, usei o iterador
// para buscar o indíce 0, que é o primeiro de uma lista de arrays.

// Dois nomes, pego o indice 0 e o indice 1 e assim sucessivamente.

// A logica do ultimo if é: se o nome de pessoas for maior do que 3, retorne apenas os dois primeiros nomes
// e a quantidade de nomes restantes menos 0, que são os dois que foram citados.

nomes.push("Erica");

console.log(likes(nomes));