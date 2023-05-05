// Tipos Basicos
// Os tipos devem ser definidos na variavel

let age: number = 25;
const firstName: string = "Carlos";
const isValid: boolean = true;
let anything: any = "Qualquer coisa"; // any: Tipo especial do Typescript. Esse tipo pode receber qualquer valor. Mas deve ser evitada, pois não tem tipagem estatica

/* ================================================================ */
// Podemos usar os tipos em listas
const ids: number[] = [1, 5, 67, 3789];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Carlos", "João", "Maria"];

/* ===============================TUPLA================================= */
// Tupla -> É um tipo usado quando queremos declarar uma variavel com um determinado valor numa determinada ordem

const person: [number, string] = [25, "Carlos"];

// Listas de Tuplas
const people: [number, string][] = [
  [30, "João"],
  [50, "Maria"],
  [23, "Pedro"],
];

/* ===============================INTERSECTIONS================================= */
// Intersections -> Quando queremos que a variavel possua um tipo ou outro
// Neste exemplo a variavel pode possuir valores de três tipos
const productId: string | number | boolean = "5487457";

/* ===============================ENUM================================= */
// Podemos tribuir um valor a outro valor
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
  Right = "Direita",
}

const direction = Direction.Up;
//console.log(direction); // direction = 1

/* ===============================TYPE ASSERTIONS================================= */
// Quando queremos mudar o tipo de uma variavel
const productName: any = 'Camisa'

//let itemId = productName as string
let itemId = <string>productName
