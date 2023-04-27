const add = (a, b) => a + b;

function calculator(func,a,b) { // 함수를 선언!!!
    return func(a, b);
}


add(3, 5); // 8
calculator(add, 3, 5)  // 함수와 함수호출을 구별하자.  리턴값으로 바꿔보고 확인해보기!!

document.querySelector('#header').addEventListener('click', add()); // 호출하면 안됩니다.!!!


// 함수의 호출은 리턴값을 보자

const onClick = () => {  // 함수 선언!!
    console.log('hello');
};


// 1-2 호출스택 구분하기

const x = 'x';

function c() {
    const y = 'y';
    console.log('c');
}

function a() {
    const x = 'x'
    console.log('a');
    function b() {
        const z = 'z'
        console.log('b');
        c();
    }
    b();
}

a();
c();

function c() {
    console.log('c');
}

function a() {
    console.log('a');
    function b() {
        console.log('b');
        c();
    }
    b();
}

a();
c();

//함수도 블록을 가지고 있다!! 중괄호는 블록!! 그리고 for, if, while switch 등등