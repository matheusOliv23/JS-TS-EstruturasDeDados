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

const nameArr = ["matheus", "henrique", "oliveira"];

console.log(Array.from(nameArr.keys()));

console.log(Array.from(nameArr.values()));

console.log(Array.from(nameArr.entries()));

console.log(new Map(nameArr.entries()));

const week = new Array("Segunda", "Terça", "Quarta");

console.log(week.length);

const week2 = ["Segunda", "Terça", "Quarta"];

for (let i = 0; i < week2.length; i++) {
    console.log(week2[i]);
}

console.log(Array.from(week2.values()));

let fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);