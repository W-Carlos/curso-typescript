"use strict";
/* Generics nos permite passar tipos como parametros. Conseguimos deixar a tipagem de variaveis e funções muito mais dinamicas */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (value) => value;
const message = returnValue("Hello, World");
const numberOne = returnValue(10);
/* ====================================================== */
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray([1, 2]);
/* ====================================================== */
// Promisse
const returnPromisse = () => __awaiter(void 0, void 0, void 0, function* () {
    return 5;
});
// Classes
class GenericNumber {
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
