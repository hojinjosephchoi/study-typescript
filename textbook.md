# Typescript

## 1. Typescript Overview

- Javascript 의 superset
- 타입스크립트는 **프로그래밍 언어**
- 타입스크립트는 **Compiled Language**
  - 기계어로 변환하는 전통적인 Compiled Language 와는 차이가 있다.
  - Typescript 는 Compile 하면 Javascript 로 변환한다. (meta-programming)
  - Transpile 이라는 용어를 사용한다.
- Javascript 는 Interpreted Language 이다.
- 컴파일 과정에서 타입 체크를 한다.
- Typescript 는 동적 타입 언어의 단점을 극복하고자 정적 타입 언어의 장점을 차용한 언어이다.

## 2. 개발환경 구축 및 컴파일러 사용 & 3. IDE 활용

- 컴파일러 설치를 위해 node.js, npm 필요

### 컴파일러 설치
- npm 일 경우,
```
$ npm install typescript -g
$ ./node_modules/.bin/tsc source.ts
```

- visual studio plugin 설치 일 경우, 2017 / 2015 Update 3 에서는 디폴트로 설치되어 있음
- tsconfig.json 생성
```
$ tsc --init
```

- tsconfig.json 파일이 없을 경우, tsc 컴파일 실행 안됨
- tsc watch 모드
```
$ tsc -w
```

### VSCode
#### Compiler
- VSCode에 TS컴파일러가 내장되어 있음
- 내장 컴파일러는 VSCode가 업데이트 되면 같이 업데이트 된다. (버전 상관관계 있음)
- 내장 컴파일러보다는 직접 설치한 컴파일러를 선택하는게 좋다.

#### tslint
- tslint 설치
~~~
$ npm i tslint --dev
~~~
- tslint 설정파일 생성
~~~
$ tslint --init
~~~
- tslint 플러그인 설치


## 4. Compiler Options (tsconfig.json)
- [tsconfig.json 옵션 정의](http://json.schemastore.org/tsconfig)

### 최상위 프로퍼티
- compileOnSave
  - true/false
  - 저장 시 자동으로 컴파일 해준다. (visutal studio 2015 또는 atom-typescript)
- extends
  - 파일(상대) 경로명 : string
- files
  - 상대 혹은 절대 경로의 리스트 배열
  - exclude 보다 우선
- include
  - exclude 보다 후순위
  - `*` 같은걸 사용하면, .ts / .tsx / .d.ts 만 include (allowJS)
- exclude
  - 설정 안하면 4가지(node_modules, bower_components, jspm_packages, P{outDir}) 를 default로 제외
  - {outDir}은 항상 제외 (include에 있어도...)
- typeAcquisition
- compileOptions

### compileOptions
- @types (typeRoots, types)
  - TS2.0 부터 사용 가능해진 내장 type definition 시스템
  - 설정 없을 경우 node_modules/@types 라는 모든 경로를 찾아서 사용
  - typeRoots 사용 시, 배열 안의 **경로**들 아래서만 가져옴
  - types 사용 시, 배열 안의 **모듈 이름** 혹은 node_modules/@types 안의 **모듈 이름**에서 찾아옴
  - typeRoots와 types를 같이 사용하지 않음
  - 과거 (1.x)에서는 typings, tsd를 사용함

- target
  - 어떤 js 버전으로 빌드결과물을 만들 것인가
  - default : es3

- lib
  - 기본 type definition 라이브러리를 어떤 것을 사용할 것인가
  - lib 지정 없을 때, target 'es3'일 경우 lib.d.ts
  - lib 지정 없을 때, target 'es5'일 경우 dom, es5, scripthost 사용
  - lib 지정 없을 때, target 'es6'일 경우 dom, es6, dom.iterable, scripthost 사용
  - lib 지정하면 그 lib 배열로만 라이브러리 사용

- noLib
  - target 'es3' 일때, lib.d.ts 사용 안하겠다.

- outDir
  - 컴파일된 결과를 디렉토리 구조로 뽑아낼 경우 목적경로

- outFile
  - 컴파일된 결과를 하나의 파일로 뽑아낼 경우

- module
  - module 시스템 : commonJS, amd, umd, system, es6, es2015, none
  - 컴파일 된 모듈의 결과물을 어떤 모듈 시스템으로 할지 결정
  - target이 es6이면 es6가 default
  - target이 es6가 아니면 commonJS가 default
  - nodejs 프로젝트일 경우 commonJS를 반드시 지정해주자.
  - AMD / System 모듈 사용 시 outFile 반드시 지정되어야 함
  - es6나 es2015를 사용하려면 target이 es5 이하 이어야 한다.

- moduleResolution
  - ts소스에서 모듈을 사용하는 방식을 지정해야 한다.
  - Classic 아니면 Node이다.
  - CommonJS 일때만 Node라고 생각하면 된다.

- paths와 baseUrl
  - 상대경로 방식이 아닌 baseUrl로 꼭지점과 paths 안의 key-value로 모듈을 가져가는 방식

- rootDirs
  - 배열 안에서 상대 경로를 찾는 방식


## 5. Typescript Basic Types
- 사용자가 만든 타입은 결국은 primitive type으로 쪼개진다.

### Javascript 기본 자료형을 포함 (superset)
- boolean
- number
- string
- null
- undefined
- symbol (ECMAScript 6에 추가)
- array: object 형

### 프로그래밍을 도울 몇가지 타입 추가
- any => 적폐
- void
- never
- enum
- tuple: object 형


### primitive type
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- primitive type의 내장 함수를 사용할 수 있는 것은 자바스크립트 처리방식 덕분 (순간적으로 wrapper 객체로 변환 후 다시 primitive type으로 변환)

### literal
- 값 자체가 변하지 않는 값
- number 리터럴
- string 리터럴
- boolean 리터럴
- object 리터럴

### Boolean / boolean
- true / false
- TS에서는 다음과 같은 코드의 경우 오류로 인식한다.
```
let isOk: boolean = new Boolean(true);
```

### Number / number
- 모든 숫자는 부동 소수점 값
- 16진수, 10진수 외, ES2015에 도입된 2진수, 8진수 지원
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### String / string
- 문자열 '', ""

### Template String
- 행에 걸쳐있는것, javascript 변수 받아서 쓸 경우
- 백틱 ``으로 사용

### undefined && null
- typescript에서는 각각 고유 타입이 있다.
- null/undefined는 다른 타입의 sub타입이다.
- 컴파일 옵션에서 `--strictNullChecks` 사용 시에는 null/undefined는 void나 자기 자신에게만 할 당할 수 있다.
- 이 경우 union type을 이용해야 한다.
```
let union: string | null = null;
```

### void
- 타입이 없는 상태
- any와 반대의 의미
- 함수 리턴이 없을 때 주로 사용

### any (적폐)
- 어떤 타입이어도 상관없는 타입
- 이걸 최대한 쓰지 않는게 핵심
- 컴파일 옵션 중 any를 쓰면 오류를 뱉도록 하는 옵션 `--noImplicitAny` 존재함

### never
- end point에 닿을 수 없는 경우에 사용
- 쓸일 없을 것임...
```
function error(message: string): never {
  throw new Error(message);
}
function fail {
  return error('something failed');
}
function infiniteLoop(): never {
  while (true) {
  }
}
```

### array
- Array<타입>
- 타입[]
```
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### tuple
- 배열인데 타입이 한가지가 아닌 경우
- 꺼내 사용할 때 주의가 필요
```
let x: [string, number];
x = ['hello', 10]; // ok
x = [10, 'hello']; // error
x[3] = 'world'; //ok, 'string' can be assigned to 'string | number'
x[4] = true; //error, 'boolean' isn't 'string | number'
x[5].toString(); //ok, 'string' and 'number' both have 'toString()' method
```

### enum
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
```

### symbol
- ES2015 Symbol과 동일
- primitive type의 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만듦
- 주로 접근을 제어하는데 쓰는 경우가 많음 (private 만들 때...)
```
let sym = Symbol();
let obj = {
  [sym]: 'value'
};
console.log(obj[sym]); // "value"
```


## 6. var, let, const
- [TypeScript Playground](https://www.typescriptlang.org/play/index.html)

### var
- ES5
- 변수의 유효범위 : 함수 스코프
- 호이스팅 되는 특성
- 재선언 (redeclare) 가능

### let, const
- ES6
- 변수의 유효범위 : 블록 스코프
- 호이스팅 안됨 (호이스팅은 되는거 아닌가???)
- 재선언 (redeclare) 불가

> var 말고 let, const를 사용하자

#### let, const의 타입 추론
- let은 타입추론에 의한 특정 타입이 들어간다
```
let a: string = '에이';
let b = '비이';
// a는 명시적으로 지정된 타입인 string
// b는 타입추론에 의한 타입인 string
```
- const는 타입추론에 의한 타입이 특정 타입이 아니라 __리터럴타입__ 이 들어간다.
```
const c: string = '씨이';
const d = '디이';
// c는 명시적으로 지정된 타입인 string
// d는 타입추론에 의한 타입인 리터럴타입 "디이"
```
