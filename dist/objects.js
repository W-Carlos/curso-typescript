"use strict";
// Type é basicamente um objeto, podemos definir quais propriedades esse objeto vai ter e quais os tipos dessas propriedades.
// Declarando as propriedades do objeto
const user = {
    firstName: "João",
    age: 20,
    email: "joao@email.com",
    password: "123456",
    orders: [{ productId: "1", price: 300 }],
    register() {
        return "a";
    },
};
const printLog = (message) => { };
printLog(user.password); // ! elimina a possibilidade da propriedade ser undefined
const author = {
    firstName: "Lucas",
    age: 30,
    email: "lucas@email.com",
    password: "13234",
    orders: [{ productId: "1", price: 200 }],
    books: ["Livros"],
    register() {
        return "b";
    },
};
const userInfo = {
    firstName: "Carlos",
    email: "carlos@email.com",
    login() {
        return "a";
    }
};
// Dá para usar o Unions
const newAuthor = {
    firstName: "Carlos",
    email: "carlos@email.com",
    books: [],
    login() {
        return "a";
    }
};
const nota = 10;
