console.log("모두에게 일을 시켜봅시다~~!!");

let aFinished = false;
let bFinished = false;
let cFinished = false;

setTimeout(() => {
    console.log("A : 일을 마쳤습니다!");
    aFinished = true;
    if(aFinished && bFinished && cFinished){
        console.log("일을 다 마쳤으니 이제 요리를 시작하자!");
    }
}, Math.random() *1000 + 1000)

setTimeout(() => {
    console.log("B : 일을 다 마쳤습니다!");
    bFinished = true;
    if(aFinished && bFinished && cFinished){
        console.log("일을 다 마쳤으니 이제 요리를 시작하자!");
    }
}, Math.random() * 1000 + 1000);

setTimeout(() => {
    console.log("C : 일을 마쳤습니다!");
    cFinished = true;
    if(aFinished && bFinished && cFinished){
        console.log("일을 다 마쳤으니 이제 요리를 시작하쟈!");
    }
}, Math.random() * 1000 + 1000)

console.log("일은 전부 시켜놓았당");


const pro = new Promise((resolve, reject) => {
    resolve();
})

pro.then(() => {
    console.log('hihi');
})



function ageage(age) {
    return new Promise((resolve, reject) => {
        if(age > 20) resolve();
        else reject();
    })
}

const nbage = ageage(21);

nbage
.then(() => {
    console.log('성인입니다.');
})
.catch(() => {
    console.log('미성년자!!!');
})


const hjage = ageage(26);
hjage
.then(() => {
    console.log('효정이는 성인~!');
})
.catch(() => {
    console.log("효정이는 미성년자~!");
})