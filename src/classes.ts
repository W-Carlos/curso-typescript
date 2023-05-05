interface IPerson {
  id: number;
  //   name: string;
  //   age: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number; // readonly => Torna a variavel apenas leitura, não é possivel alterar seu tipo
  protected name: string; // protected => Faz com que a variavel só consiga ser acessada dentro da sua classe ou da sua subclasse
  private age: number; // private => Só pode ser acessada dentro da propria classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

// Shorthand com classes
// Classe refatorada. Mesma coisa que acima
class PersonRefact {
  constructor(readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
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
