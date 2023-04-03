const num = prompt('숫자를 입력하세요').split('')

const mok = Math.floor(parseInt(num[0]/ parseInt(num[1])));
const na = parseInt(num[0]%num[1]);

console.log(mok, na)
