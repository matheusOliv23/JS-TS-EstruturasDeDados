// IS N DIBISIBLE BY X AND Y

/*Create a function that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non - zero digits.*/

function isDivisible(n, x, y) {
    if ((n % x === 0) & (n % y === 0)) {
        return true;
    }
    return false;
}

console.log(isDivisible(40, 2, 5));

// A lógica por traz dessa função é simplesmente receber os tres parametros,
// sendo o primeiro o numero que quero validar (n).

// Um exercício bem simples que exige apenas a compreensão de como utilizar
// os operadores para inserir na lógica do if.

// Para saber se o número é divisivel por outro, ele precisa retornar 0
// Com o operador % podemos facilmente checar o resto de uma divisão.

// Se esse resto for zero, o numero é divisivel por outro.

function isDivisble2(n, x, y) {
    return n % x === 0 && n % y === 0;
}

// É uma outra maneira de inserir o código. Basicamente
// será retornado um valor true se as duas condições forem
// satisfeitas