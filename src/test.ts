function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
}

class Person {

  private name: string;
  private age: number;

  constructor(name: string, @printInfo age: number) {
    this.name = name;
    this.age = age;
  }

  hello(@printInfo message: string) {
    console.log(message);
  }

}

const p = new Person('Joseph', 30);
