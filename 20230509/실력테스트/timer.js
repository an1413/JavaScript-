function start () {
    console.log('start');
    startBtn.classList.add('start');
    // console.log(hrsInput.value);
}
//     hrs = hrsInput.value;
//     min = minInput.value;
//     sec = secInput.value;

//     if(sec != 0) {
//         sec--;
//     } else {
//         if(min != 0) {
//             min--;
//             sec = 59;
//         }
// }
// }

function reset () {
    console.log('reset');
    
}

const hrsInput = document.querySelector('#hrs');
const minInput = document.querySelector('#min');
const setInput = document.querySelector('#set');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

// if(hrsInput.value == 0 || minInput.value == 0 || setInput.value == 0){
//     console.log('good');
// }

startBtn.addEventListener('click', function() {
    startBtn.classList.add('start');
});