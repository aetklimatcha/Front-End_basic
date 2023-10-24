# Javascript

- 프로그래밍 언어

  - 문법

- HTML, CSS 제어 기능
  - 활용

## Javascript 기초 개념

- version

  - ES5
  - ES6

- 작성방식
  - External
    - head 태그 영역 상단에 위치할 때 defer를 사용 가능
  - Internal
    - defer를 사용하지 못하기 때문에 HTML 요소보다 하단에 작성
  - Inline

## 문법(Syntax)

- 데이터/변수/연산
- 명령문(구문)
- 함수
- 배열/객체/Class
- 추가문법

### 데이터/변수/연산

#### 데이터 타입(종류)

- 문자

  - 따옴표로 묶어줌
    Ex) 'Volvo', '10'

- 숫자

  - 정수, 실수

- 불리언(Boolean)

  - true, false

- 데이터 타입 구분 여부

  - 자바스크립트는 데이터타입을 구분하지 않음
  - 데이터 무결성 측면에서는 단점
  - 편리한 사용성 측면에서는 장점

- Type Script : Javascript + Data Type

```
1 + '1' = 2
```

#### 변수

- 데이터를 저장하는 공간(컨테이너)
- 사용

  - 변수 선언
  - 변수 초기화
  - 데이터 할당

- 예약어(keyword)

```
var a;
a = 0;
a = 10;

var b = 20;
```

- var, let, const

  - var : ~ES5
  - let, const : ES6~

- var, let
  - 데이터 초기화 할당 이후에 변수값을 변경할 수 있음
- const
  - 데이터 초기화 할당 이후에 변수값을 변경할 수 없음

#### 연산(자)

- 산술 연산자

  - +, -, \*, /
  - % : 나머지 연산

- 할당 연산자
  - =
  - +=, -=, \*=, /=

```
let a = 0; // 0을 a 변수에 할당(대입)
a += 3;
a = a + 3; // 증가 연산

let b = 10;
b -= 3; // 감소 연산

let sum = 0;
sum += 1;
sum++; // 증가 연산, 카운터(증가)

sum -= 1;
sum--; // 감소 연산, 카운터(감소)
```

- 문자 연산자
  - - : 연결 연산자

```
'Hello' + 'World' => HelloWorld
10 + 'Hello' => 10Hello
```

- 비교 연산자
  - 같다 : ==, ===(타입구분)
  - 같지 않다 : !=, !==(타입구분)
  - 크다 : >
  - 작다 : <
  - 크거나 같다 : >=
  - 작거나 같다 : <=

```
1 == '1' : 참
1 === '1' : 거짓, 데이터 타입이 다르기 때문
1 != '3' : 참
1 !== '3' : 거짓
```

- 논리 연산자
  - 논리값(참,거짓)을 연산
  - 논리값
    - 거짓, 참
    - false, true
    - 0(false), 정수(true)
  - 논리 연산
    - AND(논리곱) : && - (연산하는 논리값 모두 true일때 결과값이 true)
    - OR(논리합) : || - (연산하는 논리값 모두 false일때 결과값이 false)
    - NOT(부정) : !

```
true && false => false
true || false => true
!false => true
```

### 명령문(어), 구문(Syntax)

- 코드의 실행 흐름을 제어
  - 분기/조건
  - 반복

#### 분기/조건

- if 조건문
  - 만약에 논리결과값이 참이면 코드를 실행하고 거짓이면 실행하지 마시오

```
if (논리결과값) {
  실행코드
}
```

- else 구문
  - 논리 결과값이 거짓이면 실행하는 구문

```
if (논리결과값){
  실행코드1
}
else {
  실행코드2
}
=> 논리결과값이 참이면 실행코드1을 실행고 거짓이면 실행코드2를 실행
```

- else if 구문
  - 첫번째 논리결과값이 거짓일때 논리결과값을 재확인해서 코드를 실행

```
if(논리결과값1){
  실행코드1
}
else if(논리결과값2){
  실행코드2
}
else{
  실행코드3
}
=> 논리결과값1이 참이면 실행코드1 실행, 거짓이면 논리결과값2를 확인해서 참이면 실행코드2를 실행, 거짓이면 실행코드3을 실행
```

- switch
  - 수식결과값과 같은 값이 있는 레이블 위치에 있는 코드를 실행

```
switch(일반데이터결과값){
  case 레이블1:
    실행코드1;
    break;
  case 레이블2:
    실행코드2;
    break;
  default:
    실행코드3
}
=> switch의 일반데이터결과값이 레이블1 값과 같으면 실행코드1을 실행, 레이블2와 같으면 실행코드2를 실행, 같은 레이블이 없으면 실행코드3을 실행
```

#### 반복문

- For
  - 반복 횟수를 지정하거나 필요한 형태의 반복 횟수로 반복 실행

```
for(let i=0;i<3;i++){
  실행코드
}

statement1 : let i=0
for 코드블럭 실행전 최초 한번 실행 => i=0
statement2 : i<3
i<3 비교식의 결과값이 true이면 실행코드를 실행
statement3 : i++
실행코드가 실행된 이후 i++가 실행

for(let i=0;i<10;i+=2){
  실행코드
}
```

- while
  - 논리값이 true일때 반복 실행

```
while(true){
  // 반복 회수를 모를때
  // 로그인의 경우
  // 아이디/비번 비교
  if(아이디/비번 === DB저장된정보들){
    로그인 성공
    break;
  }
  else {
    로그인 실패
  }
}
```

### 함수

- 여러 코드를 하나의 패키지로 그룹화
- 코드의 재사용

```
// 함수 선언
function myFunction(){
  let a=10;
  let sum=0;
  sum=sum+a;
}

// 함수 호출
myFunction();
myFunction();
myFunction();
```

- 함수 선언(정의) 형식

```
function myFunction(){
  실행코드;
}

let myFunction = function(){
  실행코드;
}

익명함수 : 선언과 동시에 실행
function(){
  실행코드;
}
```

### 배열/객체/Class

- 참조형 데이터

  - 기본형 데이터는 변수 저장공간에 데이터가 직접 저장되지만
    참조형 데이터는 제3의 공간에 데이터가 저장되고 변수 저장공간에는 데이터가
    저장된 위치값이 저장됨

- 배열
  - 참조형 데이터
  - 데이터 집합
  - 같은 타입, 같은 의미 데이터
  - 배열 객체에 포함된 Property, Method 를 사용해서 배열 데이터를
    좀 더 수월하게 제어할 수 있음

```
const a = [1,2,3];

원소 변경 가능
a[0] = 5; (O)

배열 변경 불가능
a = [4,5,6]; (X)
```

- 객체
  - 참조형 데이터
  - 소속(대상)이 같은 데이터
  - 각각의 데이터에 name(key)을 붙여서 사용
  - property(객체 특성/속성)
    - 일반 데이터의 변수와 같은 역할
    - 객체 변수
  - method(객체 기능)
    - 일반 형태의 함수과 같은 역할
    - 객체 함수
  - 객체 데이터는 property, method로 모두 그룹화하는 것이 좋은 방식

```
const a = {
  name:'BBB',
  color:'white'
}

원소 변경
a.color = 'red';

객체 변경
a = {
  name:'DDD',
  color:'blue'
}
```

- 객체 Method 선언

```
const a = {
  name:'BBB',
  color:'white',
  showColor: function(){
    console.log('color : ' + color);
  }
}
```

## 활용

### HTML DOM

- DOM(Document Object Model) : HTML Element를 객체 데이터로 만든 모델
- javascript에서 DOM에 엑세스하고 제어함으로써 웹페이지 콘텐츠를 제어
- HTML Contents 제어(CRUD), CSS 스타일 속성 제어

#### DOM 객체

- Javascript

  - ES5, ES6 : 기본 javascript
  - HTML DOM : HTML API

- Property

```
HTML 내용

document.innerHTML // DOM 객체의 내용 추가, 변경
```

- Method
  - Access(접근)
  - HTML4 API

```
<h1 id="heading" class="title">heading</h1>

document.getElementByID('heading')
document.getElementsByTagName('h1')
document.getElementsByClassName('title')
```

- HTML5 API

```
<h1 id="heading" class="title">heading</h1>
<h1 class="title">heading</h1>

document.querySelector('#heading')
document.querySelector('h1')
document.querySelector('.title')

document.querySelectorAll('h1')
document.querySelectorAll('.title')
```

- Js 동적 작업
  - Create
  - Read
  - Update
  - Delete/Remove

```
document.createElement()
document.appendChild() // DOM에 객체를 추가 => 웹페이지에 표시
document.removeChild()
```

** 직접 입력한 내용이 페이지에 표시되는 경우 : 정적(static) 내용
** JS 기능을 통해서 내용이 추가/수정/삭제 되는 경우 : 동적(dynamic) 내용

- 속성 변경
  - HTML attribute

```
element.setAttribute()
```

- CSS property

```
element.style.property = value
```

\*\* JS로 CSS를 제어할 때는 inline 방식으로만 제어가 가능, JS는 CSS를 직접 제어할 수는 없음

### Form 요소

- input

  - type="text" : text 한줄 입력
  - type="password" : password 입력, 내용표시X
  - type="checkbox" : 중복선택이 가능
  - type="radio" : 단일선택 가능
  - type="file" : 파일 업로드
  - type="submit" : 내용을 서버로 전송 버튼
  - type="reset" : 입력된 내용을 초기화 버튼
  - type="button" : 일반 버튼

- select

  - option 요소를 사용해서 목록의 아이템

- button
  - submit, reset, button 3가지 type

### 이벤트(Event)

- 상태변화

  - 현재 상태에서 다른 상태로의 변화
    Ex) 내용입력, 마우스클릭, 마우스이동 ...
  - 이벤트 발생
    - 상태 변화에 따른 신호 표시

- 상태 변화에 따라 특정 기능 실행

  - 이벤트 리스닝
    - 발생된 이벤트 감지
  - 이벤트 핸들링
    - 발생된 이벤트에 따라 특정 기능 실행

- 이벤트 종류
  - 브라우저 이벤트
    - HTML 로딩완료 이벤트(load)
  - 사용자 이벤트
    - 마우스 이벤트
      - 이동(move), 클릭(click)
    - 키보드 이벤트
      - 입력(keydown)

### Effect(효과)

- show/hide
- fade in/out
- slide in/out

- image(visual) rolling / carousel 효과

  - 이미지 또는 비주얼 요소를 순서대로 반복해서 보여줄 때 사용하는 효과
  - 시작 상태와 끝상태를 반복하는 것이 아니고 지속적으로 다음 단계로 이동

```

```

- animation, motion 효과
  - 시작상태에서 끝상태로 변화할때 중간 과정을 모두 보여주는 것
  - css motion 효과를 사용
    - 기본적인 CSS property(width, height, top, left ...)
    - css3 추가된 property(transform)
    - transition 속성을 추가해서 중간과정을 표시

### transition

- 상태 변화의 중간 과정을 표현

```
transition:속성 시간;

transition:width 2s;

transition:all 2s;

transition:width 2s, height 4s;
```
