// Type é basicamente um objeto, podemos definir quais propriedades esse objeto vai ter e quais os tipos dessas propriedades.

// Declarando os tipos do objeto
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // O sinal ? torna a declaração da propriedade opcional
  orders: Order[];
  register(): string; // Podemos definir que uma propriedade do type vai ser uma função
};

// Objeto que será uma lista do user
type Order = {
  productId: string;
  price: number;
};

// Declarando as propriedades do objeto
const user: User = {
  firstName: "João",
  age: 20,
  email: "joao@email.com",
  password: "123456",
  orders: [{ productId: "1", price: 300 }],
  register() {
    return "a";
  },
};

const printLog = (message: string) => {};

printLog(user.password!); // ! elimina a possibilidade da propriedade ser undefined

/* =============================================== */
// Unions -> Conseguimos unir dois types
type Author = {
  books: string[];
};

const author: Author & User = {
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

/* =============================================== */
// Interfaces

interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string; // Tambem podemos declarar funções na interface
}

const userInfo: UserInterface = {
  firstName: "Carlos",
  email: "carlos@email.com",
  login(){
    return "a"
  }
};

//userInfo.firstName = '3' Não dá para modificar o valor da propriedade

interface AuthorInterface {
  books: string[];
}

// Dá para usar o Unions
const newAuthor: UserInterface & AuthorInterface = {
  firstName: "Carlos",
  email: "carlos@email.com",
  books: [],
  login(){
    return "a"
  }
};

// Conseguimos assimilar uma intersection a um type. Mas só é possivel fazer com o type
type Nota = number | string;
const nota: Nota = 10;
