//팝업
const btnOpen=document.querySelector('#btn-open');
const btnClose=document.querySelector('#btn-close');
const popup=document.querySelector('.popup');

btnOpen.addEventListener('click',()=>{
    popup.classList.add('on');
})

btnClose.addEventListener('click',()=>{
    popup.classList.remove('on');
})



//슬라이드

const train=document.querySelector('.train')
let count=0;
setInterval(()=>{
    count++;
    if(count>2){count=0};
    train.style.transform=`translateX(${-33.33*count}%)`
},2500)


//탭

const tabs=document.querySelectorAll('.tabs>a');
const tabContents=document.querySelectorAll('.tab-contents>ul');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(a=>a.classList.remove('on'));
        tab.classList.add('on');
        tabContents.forEach(ul=>ul.classList.remove('on'));
        tabContents[index].classList.add('on');
    })
})