const arr = [1, 2, 3, 4];

console.log(arr.toString());

const mixArr = [
    { name: "Matheus" },
    false,
    112,
    null,
    () => "works",
    undefined,
    true,
    "string",
];

console.log(mixArr.toString());

console.log(JSON.stringify(mixArr));