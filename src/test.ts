class Parent {
  constructor(protected _name: string, private _age: number) {
  }

  print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 세 입니다.`);
  }

  protected printName = (): void => {
    console.log(`이름은 ${this._name} 입니다.`);
  }

  protected printAge(): void {
    console.log(`나이는 ${this._age} 세 입니다.`);
  }
}

class Child extends Parent {
  constructor(age: number) {
    super('Joseph Jr.', age);
    this.printName();
    this.printAge();
  }
}

const person: Child = new Child(5);