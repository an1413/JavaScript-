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


function whatage(age) {
    return new Promise((resolve, reject) => {
        if(age > 20) resolve();
        else reject();
    })
}

const nastar = whatage(21);

nastar
.then(() => {
    console.log('성인');
}).catch(() => {
    console.log('미성년');
})


function howlike(item) {
    return new Promise((resolve, reject) => {
        if(item === 'apple') resolve();
        else reject();
    })
}

const item1 = howlike(banana);
const item2 = howlike('apple');

item1
    .then(() => {
        console.log(`굿~!`);
    })
    .catch(console.log('별로'));

item2
    .then(() => {
        console.log(`${item2}은 굿~!`);
    }).catch (() => {
console.log('ㅋ.ㅋ');
    }) 

function setTimeoutPromise(delay) {
    return new Promise((resolve) => setTimteout(resolve, delay));
}

async function startAsync() {
    await setTimeoutPromise(1000);
    console.log("1초 지났습니다.");
}

console.log("시작입니다.");

startAsync();

async function f() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    })

    let result = await promise;

    alert(result);
}

f();


// function loadjson(url) {
//     return fetch(url)
//         .then(response => {
//             if(response.status == 200){
//                 return response.json();
//             }
//             else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadjson('no-such-user.json')
//     .catch(alert); // Error: 404


// function loadjson(url) {
//     return fetch(url)
//         .then(response => {
//             if(response.status == 200){
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadjson('no-such-user.json')
//     .catch(alert) // Error : 404

// function loadjson(url) {
//     return fetch(url)
//         .then(response => {
//             if(response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

// loadjson('no-no')
//     .catch(alert); 

// async function loadjson(url) {
//     return   await fetch(url) (response => {
//             if(response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }


// loadjson('nononono')
//     .catch(alert);





















async function loadjson(url) {
    let response = await fetch(url);

    if(response.status == 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
        
}

loadjson('nonono')
    .catch(alert);


async function loadjson(url) {
    let response = await fetch(url)

    if(response.status===200) {
        let json = await response.json();
        return json
    }
    throw new Error(response.status);
    
}

loadjson('nonono')
    .catch(alert);


async function lloadjson(url) {

}


async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
    return wait().then(result => {
    console.log(result); // 10
  });

}

f();


function delay(ms) {
    setTimeout(() => {

    }, ms)
}

async function printBanana() {
    await delay(1000);
    return 'banana';
}

async function printApple() {
    await delay(1000);
    return 'apple';
}

async function printFruits() {
    const promiseba = printBanana();
    const promiseap = printApple();
    const banana = await printBanana();
    const apple = await printApple();
    return `${banana}, ${apple}`;
}

printFruits().then(console.log);