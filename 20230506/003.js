
let str =  'abcde1abc12abb34azzff00';

let answer =  str.split('');
console.log(answer);
 'abcde1abc12abb'.split('').filter((item) => (!isNaN(item))).reduce((a,c) => parseInt(a) + parseInt(c),0);
 console.log('abcde1abc12abb'.split('').filter((item) => (!isNaN(item))).reduce((a,c) => parseInt(a) + parseInt(c),0));
answer.filter((item) => (!isNaN(item))).reduce((a,c) => parseInt(a) + parseInt(c),0);
console.log(answer.filter((item) => (!isNaN(item))).reduce((a,c) => parseInt(a) + parseInt(c),0));
