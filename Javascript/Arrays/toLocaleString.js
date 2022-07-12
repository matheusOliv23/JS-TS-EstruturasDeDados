const priceArr = [9.99, 85.9, 1000, 89];

console.log(
    priceArr.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
);