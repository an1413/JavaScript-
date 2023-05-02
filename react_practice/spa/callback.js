function callBack (result) {
    setTimeout(call,2);
    return setTimeout;
}

function call (result) {
    console.log('hello callback');
}

callBack();


const condition = true;

const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공')
    }
    else {reject('실패')}
});

// 다른 코드가 들어갈 수 있음.
promise //
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.error(error);
    })