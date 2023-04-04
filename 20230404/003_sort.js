let avengers = ['아이언맨', '스파이더맨','헐크']
avengers.sort() // 잘 정렬된다.


// 사전식 정렬입니다. 시간이 지나도 못바뀌는 내용입니다.
let nums = [3,1,8,6]
console.log(nums.sort());

const nums = [3,1,11, 8,6];
console.log(nums.sort()); // 'sort를 어느 알고리즘으로 할꺼냐?'는 브라우저의 자유!

// 오름차순
const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a , b) => a - b));

// 내림차순
const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a , b) => a - b));

// 실무사용코드
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}

const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a , b) => {
    console.log(a, b)
}));
