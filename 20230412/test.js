// 유지보수가 용이
// 구조파악이 용이 함수의 일반적인 형태 
// 함수 선언문 ??
// 파선아실 파라미터 선언하고 아규먼트가 실제값이다 ~~`

function one (a,b) {
    let z = a+b;
    return z **2;
}

console.log(one(7,3));
console.log(one(7,3));

// 화살표 함수
const two = (a,b) => (a+b) ** 2
console.log(two(2,4));

const three = function (a,b) {
    let z = a+b //2
    return z ** 2 //3
}

console.log();

// 함수를 아규먼트로 전달해서 언젠가는 사용할게~~
function four(a,b,c) {
    let z = c(a,b) + c(a,b)
    return z * 2;
}

four (7,3,one)

// 아래와 같이 했을 경우에는 함수의 순수수어 , 수수함수의 장점을 사릴 수 없스비낟.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a,b,c) {
    let z= one(a,b) + one(a,b)
    return z * 2
}

four(7,3,one)

// 함수

function hello(para) {
    console.log(para);
    console.log('hello');
    return 100
}

console.log(hello(10));

let x = console.log('hello');
x // undefined

// 함수, 메서드(클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수다? => 메서드
// 함수를 호출할 수 있는 이름은 결국 변수입니다.
let x = console.log

// 2번 (아래 3개는 같은 코드입니다.)
function hello1() {
    console.log('hello');
}

function hello2() {

}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아닙니다.
const x = [10, 20, 30, 40];
x.forEach(element => {
    
});

function 함수1(a,b,c){
    return a + b + c
}

함수1(10, 20, 30, 40)

함수1 (10,20)

function 함수1(a = 10, b= 20, c =30){
    return a + b + c
}
함수1(1,1)

function 함수1(a = 10, b = 20, c = 30) {
    return a + b + c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어갑니다.
함수1(a = 1, c = 1)

function runPython(user, time, code, lv) {

}
runPython('leehojun', 100, 'function...', 3)

function runPython({user, time, code, lv}){

}

runPython({
    user: 'leehojun',
    time: 100,
    code: 'function...',
    lv: 3
})


// 기본값 설정
function runPython({
    user = '',
    time = 0,
    code = '',
    lv = 0 }) {
}

function 함수({
    a = 1,
    b = 2,
    c = 3
} = {}){
    console.log(a, b,c);
    return a + b + c
}

함수()
함수({})
함수({ b: 100})


// 재귀함수는요 ! 내가 나를 호출하는 것입니다.
// 반복문으로 반복할 수 잇는 것은 재귀함수로 만들 수 있습니다.a재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있습니다.a
// 실무에서는 반복문 사용하시길 권해드립니다.
// 1. factorial에대한 예제 입니다.
// 5! = 5 * 4 * 3 * 2 * 1
result = 1
for(let i = 2; i < 6; i++) {
    result *= i
}
result

function factorial(n) {
    if(n <= 1) {
        return n;
    }
    return n * factorial(n-1)
}
factorial(5)

function sigma(n) {
    if(n <= 1){
        return n;
    }
    return n + sigma(n-1)
}

// 문자열 뒤집는 것
result = ''
for(const i of 'hello world'){
    result = result + i
}
result

result = ''
for(const i of 'hello world'){
    result = i + result
}
result
// 'h' + '' // 1번째 순회
// 'e' + 'h' // 2번째 순회
// 'l' + 'eh' // 3번째 순회

result = ''
for(const i of 'hello world'){
    result = i + result
}
result