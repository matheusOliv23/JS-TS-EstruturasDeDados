const arr = [1, 2, 3, 4, 5, 6];

console.log("primeiro", arr[0]);

console.log("segundo", arr[1]);

console.log("ultimo", arr[arr.length - 1]);

const multiArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log("primeiro", multiArr[0][0]);

console.log("segundo", multiArr[1][1]);

console.log("ultimo", multiArr[2][2]);

const objArr = [{ nome: "Matheus", sobrenome: "Oliveira" }];

console.log("nome", objArr[0].nome);

console.log("sobrenome", objArr[0]["sobrenome"]);