// 함수

// 1. 재사용성이 높아집니다.
function one(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
    console.log('hello')
}
one()
one()
one()
one()
one()

// 2. 유지보수가 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 3. 구조 파악이 용이합니다.
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄

// 함수의 일반적인 형태
// 파선아실
function one(a, b) { // 1
    let z = a + b // 2
    return z ** 2 // 3
}

function one(a,b) {
    let z = a+b
    return z ** 2
}

console.log(one(7,3))
console.log(one(7,1))

// 화살표 함수
const two = (a,b) => (a+b)**2
console.log(two(7,3));
console.log(two(7,1))

// 이름 없이 선언하는 함수
const three = function(a,b){
    let z = a + b
    return z ** 2
}

console.log(three(7,3));
console.log(three(7,1));

// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a,b,c){
    let z = c(a+b) + c(a,b)
    return z * 2
}

four(7,3,one) 

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
function four(a,b,c){
    let z = one(a+b) + one(a,b)
    return z * 2
}

four(7,3,one)

// 함수
// 읽어볼만한 문헌 

function hello(para) {
    console.log(para);
    console.log('hello');
    return 100
}

console.log(hello(10));


// 세가지 다 같은 함수!

function hello() {
    console.log('hello');
}

function hello2(){
    console.log('hello');
    return 
}

function hello3() {
    console.log('hello');
    return undefined
}

let a = hello1()
let b = hello2()
let c = hello3()

// return 
function hello4() {
    console.log('hello');
    console.log('hello');
    return
    console.log('hello');
    console.log('hello');
}

hello4()

function hello5() {
    if(true) {
        if(false) { // 이 값을 바꿔보세요.
            if(true) {
                return
            }
        }
    }
    console.log('hello');
}


//return 을 하더라도 1회 반복만 종료되는 것이지 전체반복이 종료되는 것은 아닙니다.
const x = [10, 20, 30, 40];
x.forEach(e1 => {
    console.log(e1);
    return
    console.log('world');
})

function 함수1 (a,b,c) {
    return a + b + c
}

함수1(10,20 ,30,40) // error가 발생하지 않습니다

function 함수1(a=10, b=20, c=30){
    return a+b+c
}
함수1(1,1)

function 함수1(a=10, b=20, c=30){
    return a+b+c
}
// a와 c에 들어갈 것이라고 생각했지만 a와 b에 들어갑니다.
함수1(a=1, c=1)

// 아래와 같은 식별 이슈가 있을 경우 object로 넘깁니다. roro 기법
function runPython(user, time, code, lv) {

}
runPython('leehojun', 100, 'function...', 3)

