const sum = (x: number, y: number) => {
  return x + y;
};

const value = sum(5, 6);

// Conseguimos manipular o tipo dos parametros e o tipo do retorno da função
const sum2 = (x: number, y: number): string => {
  return (x + y).toString();
};

const value2 = sum2(6, 8);

// Podemos utilaz tambem Intersections numa função
const sum3 = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const value3 = sum3(9, 23);

// Funções do tipo void são funções que não retornam nada
const log = (message: string): void => {
  console.log(message);
};

log("Hello, World!");

/* ============================================================= */
// Usando interfaces com funções
// Com interfaces podemos definir quais parametros uma familia de funções pode receber e quais valores elas podem retornar

// Toda função que implementar essa interface, precisa receber um number e retornar um number
interface MathFunc {
  (x: number, y: number): number;
}

const sumFunc: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const numberSum = sumFunc(5, 8);

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};
