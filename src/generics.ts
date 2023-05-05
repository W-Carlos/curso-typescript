/* Generics nos permite passar tipos como parametros. Conseguimos deixar a tipagem de variaveis e funções muito mais dinamicas */

const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Hello, World");
const numberOne = returnValue<number>(10);

/* ====================================================== */

function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2]);

/* ====================================================== */
// Promisse
const returnPromisse = async (): Promise<number> => {
  return 5;
};


// Classes
class GenericNumber<T> {
  zeroValue: T
  sum:(x: T, y: T) => T

  constructor(zeroValue: T, sum: (x: T, y: T) => T){
    this.zeroValue = zeroValue
    this.sum = sum
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y
})