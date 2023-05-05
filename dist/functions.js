"use strict";
const sum = (x, y) => {
    return x + y;
};
const value = sum(5, 6);
// Conseguimos manipular o tipo dos parametros e o tipo do retorno da função
const sum2 = (x, y) => {
    return (x + y).toString();
};
const value2 = sum2(6, 8);
// Podemos utilaz tambem Intersections numa função
const sum3 = (x, y) => {
    return (x + y).toString();
};
const value3 = sum3(9, 23);
// Funções do tipo void são funções que não retornam nada
const log = (message) => {
    console.log(message);
};
log("Hello, World!");
const sumFunc = (x, y) => {
    return x + y;
};
const numberSum = sumFunc(5, 8);
const sub = (x, y) => {
    return x - y;
};
