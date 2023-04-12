// 재귀함수의 중요도(*)
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오게 되면 재귀함수의 중요도가 (**)

// 재귀함수 => 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 것은 재귀함수로 만들 수 있습니다.
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있습니다.
// 실무에서는 반복문 사용하시길 권해드립니다. 알고리즘 문제에서는 간혹 재귀를 호출해야 할 일이 있습니다.(팰린드롬, 오디오, 기러기, 우영우, 스위스, 토마토), (병합정렬, 퀵정렬)

// 1. factorial
// 5! == 5 * 4 * 3 * 2 * 1
result = 1
for (let i = 2; i < 6; i++) {
    result *= i
}
result

function factorial(n){
    if (n <= 1){ // 종료조건 없으면 무한반복입니다.
        return n
    }
    return n * factorial(n-1)
}

//                 return               최종값
factorial(5)    5 * factorial(4)    5 * 24 == 120
factorial(4)    4 * factorial(3)    4 * 6 == 24
factorial(3)    3 * factorial(2)    3 * 2 == 6
factorial(2)    2 * factorial(1)    2 * 1 == 2
factorial(1)    1

// 누적합(이렇게 일일이 순회하지 않고 구할 수 있는 값이기 때문에 2개다 비효율 적인 코드입니다. 특히 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 매우 비효율 적입니다.)
result = 0
for (let i = 1; i < 1001; i++) {
    result += i
}
result

function sigma(n){
    if (n <= 1){ // 종료조건 없으면 무한반복입니다.
        return n
    }
    return n + sigma(n-1)
}
sigma(1000)

// 아래처럼 수학 수식 사용하세요.
const n = 1000
console.log(n * (n + 1) / 2)

// 2. 문자열 뒤집는 것
result = ''
for(const i of 'hello world'){
    result = result + i
}
result

// 'h' + '' // 1번째 순회
// 'e' + 'h' // 2번째 순회
// 'l' + 'eh' // 3번째 순회

function reverse(txt){
    return txt[0] + reverse(txt.slice(1))
}
reverse('hello world')