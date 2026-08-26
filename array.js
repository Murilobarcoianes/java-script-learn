// frutas[10] = 'figo';

// console.log(frutas);

let frutas = ['banana', 'maçã', 'abacaxi', 'perâ'];

//for(let i = 0; i < frutas.length; i++) {
//  console.log(frutas[i]);}

//frutas.forEach((fruta,i) => console.log(`Fruta[${i}] - ${fruta}`));

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//numeros
//    .map((numero) => numero * 2)
//    .forEach((n) => console.log(n));

let precos = [10, 20, 30, 40, 50];

precos
    .map((preco) => preco * 1.10)
    .filter((valor) => valor < 30)
    .forEach((preco) => console.log(`R$ ${preco.toFixed(2)}`));

precos
    .reduce((soma,valor) => soma + valor, 0);
    //.forEach((preco) => console.log(`R$ ${preco.toFixed(2)}`));
console.log(`R$ ${valor.toFixed(2)}`);

frutas.sort((a,b) => a - b)
.forEach((fruta) => console.log(fruta));
