const popup=document.querySelector('.popup');
const btnPopup=document.querySelector('#btn-popup');
const btnClose=document.querySelector('#btn-close');

btnPopup.addEventListener('click',()=>{
    popup.classList.add('on');
});


btnClose.addEventListener('click',()=>{
    popup.classList.remove('on');
});

//슬라이드
const slides=document.querySelectorAll('.train>div');
let count=0;
setInterval(()=>{
    count++;
    if(count>2){count=0}
    slides.forEach(divtag=>divtag.classList.remove('on'));
    slides[count].classList.add('on');
},2500);

//탭메뉴
const tabs = document.querySelectorAll('.tabs>a');
const tabContents = document.querySelectorAll('.tab-contents>ul');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(atag=>atag.classList.remove('on'));
        tab.classList.add('on');
        tabContents.forEach(ul=>ul.classList.remove('on'));
        tabContents[index].classList.add('on');
    })
});