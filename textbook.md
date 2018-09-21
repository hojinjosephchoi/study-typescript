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

