//팝업
const btnOpen=document.querySelector('#btn-open');
const btnClose=document.querySelector('#btn-close');
const popup=document.querySelector('.popup');
const modal=document.querySelector('.modal');

btnOpen.addEventListener('click',()=>{
    popup.classList.add('on');
    modal.classList.add('on');
})

btnClose.addEventListener('click',()=>{
    popup.classList.remove('on');
    modal.classList.remove('on');
})


//슬라이드

const train=document.querySelector('.train');
let count=0;
setInterval(()=>{
    count++;
    if(count>2){count=0};
    train.style.transform=`translateX(${-33.333*count}%)`
},2500)