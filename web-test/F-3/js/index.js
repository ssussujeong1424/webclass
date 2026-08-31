//팝업

const popup=document.querySelector('.popup')
const btnClose=document.querySelector('#btn-close')
const btnPopup=document.querySelector('#btn-popup')

btnPopup.addEventListener('click',()=>{
    popup.classList.add('on');
})

btnClose.addEventListener('click',()=>{
    popup.classList.remove('on');
})

//가로형슬라이드

let count=0
const train=document.querySelector('.train')
setInterval(()=>{
    count++
    if(count>2){count=0}
    train.style.transform=`translateX(${-33.333*count}%)`
},3000)

//탭메뉴

const tabs=document.querySelectorAll('.tabs>a')
const tabContents=document.querySelectorAll('.tab-contents>ul')

tabs.forEach((tab,idx)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(a=>a.classList.remove('on'))
        tab.classList.add('on')
        tabContents.forEach(ul=>ul.classList.remove('on'))
        tabContents[idx].classList.add('on')
    })
});