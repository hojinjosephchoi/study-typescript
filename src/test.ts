let a: string = '에이';
let b = '비이';
// a는 명시적으로 지정된 타입인 string
// b는 타입추론에 의한 타입인 string

const c: string = '씨이';
const d = '디이';
// c는 명시적으로 지정된 타입인 string
// d는 타입추론에 의한 타입인 리터럴타입 "디이"

console.log(a, b, c, d);
