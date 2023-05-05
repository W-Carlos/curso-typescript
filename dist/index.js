"use strict";
// Tipos Basicos
// Os tipos devem ser definidos na variavel
let age = 25;
const firstName = "Carlos";
const isValid = true;
let anything = "Qualquer coisa"; // any: Tipo especial do Typescript. Esse tipo pode receber qualquer valor. Mas deve ser evitada, pois não tem tipagem estatica
/* ================================================================ */
// Podemos usar os tipos em listas
const ids = [1, 5, 67, 3789];
const booleans = [true, false, true, false];
const names = ["Carlos", "João", "Maria"];
/* ===============================TUPLA================================= */
// Tupla -> É um tipo usado quando queremos declarar uma variavel com um determinado valor numa determinada ordem
const person = [25, "Carlos"];
// Listas de Tuplas
const people = [
    [30, "João"],
    [50, "Maria"],
    [23, "Pedro"],
];
/* ===============================INTERSECTIONS================================= */
// Intersections -> Quando queremos que a variavel possua um tipo ou outro
// Neste exemplo a variavel pode possuir valores de três tipos
const productId = "5487457";
/* ===============================ENUM================================= */
// Podemos tribuir um valor a outro valor
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//console.log(direction); // direction = 1
/* ===============================TYPE ASSERTIONS================================= */
// Quando queremos mudar o tipo de uma variavel
const productName = 'Camisa';
//let itemId = productName as string
let itemId = productName;
