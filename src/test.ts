interface Person {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  wheel: number;
}

// 타입 가드
function isPerson(obj: any): obj is Person {
  return obj.name !== undefined;
}

function hello(obj: Person | Car) {
  if (isPerson(obj)) {
    console.log(obj.name);
  } else {
    console.log(obj.brand);
  }
}
