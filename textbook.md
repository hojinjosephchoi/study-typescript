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

