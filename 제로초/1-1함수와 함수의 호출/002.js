function delayP(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms);
        console.log('111');
    })
}

async function a() {
    try {
        await delayP(1000)
    } catch {
        console.error(error);
    }
    try {

        await delayP(1000)
        await delayP(1000)
        await delayP(1000)
        
    } catch (error) {
        console.log(error);
    }
}

const p = new delayP(1000);

p.then(() => {

}).then(() => {

}).then(() => {
}).then(() => {
    
}).catch(() => {
    console.error(error);
})