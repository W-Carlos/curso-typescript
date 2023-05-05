"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
// Shorthand com classes
// Classe refatorada. Mesma coisa que acima
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whoIam() {
        return (
        // this.age, // A propriedade 'age' é particular e somente é acessível na classe 'Person'.
        this.name // Podemos acessar o name pois ela é acessivel pela subclasse
        );
    }
}
const personOne = new Person(1, "Carlos", 20);
