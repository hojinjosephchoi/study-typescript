interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Mark',
  age: 32
};

function hello(p: IPerson): void {
  console.log(`안녕하세요 ${p.name} 입니다.`);
}

hello(person);