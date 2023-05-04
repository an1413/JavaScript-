const article =document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');


function createOpenBtn() {
for(let i = 0; i<12; i++) {
    const openBtn = document.querySelector(`.btn-open${i}`);
}
}


// 첫번째 포커스 요소 
const firstEl = article.querySelector('a');
console.log(firstEl);

function openPopup() {
    console.log("click");
    article.classList.add('active');
    firstEl.focus();
}

function closePopup() {
    article.classList.remove('active');
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', (e) => {
    console.log(e.key);
    if(!e.shiftkey && e.key === "Tab") { // Tab만 눌렀을 때
        console.log('ddd');
    }
});

firstEl.addEventListener('keydown', function(e){
    if ((e.shiftkey && e.key === "Tab")){ // shift + Tab을 눌렀을 때ㄴ
        console.log("shift + tab");
        e.preventDefault();
        closeBtn.focus();
    }
} )

dim.addEventListener('click', closePopup);