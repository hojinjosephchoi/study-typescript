interface Person {
  name: string;
  age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

const person: Person = {
  name: 'hello',
  age: 20,
};

console.log(getProperty(person, 'name'));
// console.log(getProperty(person, 'orange')); // 오류발생
setProperty(person, 'age', 25);
console.log(getProperty(person, 'age'));
