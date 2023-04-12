// let, const는 블록레벨 스코프를 가지고 있습니다.

{
    let x = 10
    const y = 20
}

// 지역변수와 전역변수
let x = 100 //블록밖에 선언하시면 전역에서 접근할 수 있는 변수가 됩니다.
function 함수() {
    let y = 20 // 블록 안에 변수를 선언하시면 밖에서 접근할 수 없습니다. 이를 지역변수라고 합니다.
    console.log(x); // 스코프 체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라갑니다. 전역까지 올라갔는데도 변수가 없다면 에러가 납니다.)
}
함수()

let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            let x = 30
            console.log(x);
        }
        함수3()
    }
    함수2()
}

함수1()

// 함수의 호이스팅
함수()

function 함수(x) {
    return x + 100
}

//
let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()
