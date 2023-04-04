const arr = [10, 20, 30];
arr[0] = 100;

console.log(arr); // [ 100, 20, 30 ]
console.dir(arr); // [ 100, 20, 30 ]

// 💡대괄호 표기법과 점 표기법의 차이
// 인덱스 값은 대괄호로 밖에 호출할 수 없고,
// 문자로 입력된 값은 점(.)으로 호출할 수 있다.
console.log(arr[1]); // 20
// console.log(arr.1); // ERROR
console.log(arr["length"]); // 3
console.log(arr.length); // 3

arr.length = 10;
console.log(arr); // [ 100, 20, 30, <7 empty items> ]

// 💡프로퍼티 추가
arr["김멋사"] = 100;
arr.박멋사 = 1000;
console.log(arr); // [ 100, 20, 30, <7 empty items>, '김멋사': 100, '박멋사': 1000 ]

// 💡배열의 생성 방법
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = new Array(4, 5, 6);
let arr4 = new Array(3);

console.log(arr1); // []
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 4, 5, 6 ]
console.log(arr4); // [ <3 empty items> ]

// 💡배열의 특징
// [1] 배열은 순서가 있다. 배열의 순서를 index, 이 순서로  호출하는 것을 indexing이라고 한다.
//         배열 안의 값을 원소(elements)라고 한다.
const arr5 = [10, 20, 30];
arr5[0] = 100;

// [2] 배열에 다른 원시 타입과 객체 타입을 포함할 수 있다.
const arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(...arr[0], ...arr[1], ...arr[2]); // 전개구문을 이용해서 이렇게도 만들 수 있구나!! 우와 재밌다 재밌어
console.log(arr6[1]); // [ 4, 5, 6 ]
console.log(arr6[1][2]); // 6

// 💡 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 💡 배열의 요소 추가
const arr7 = [1, 2, 3];
arr7.push(5);
console.log(arr7); // [ 1, 2, 3, 5 ]