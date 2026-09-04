const popup = document.querySelector('.popup')
const btnPopup = document.querySelector('#btn-popup')
const btnClose = document.querySelector('#btn-close')

btnPopup.addEventListener('click',()=>{
    popup.classList.add('on')
})

btnClose.addEventListener('click',()=>{
    popup.classList.remove('on')
})

const slides = document.querySelectorAll('.train>div')
let count = 0
setInterval(()=>{
    count++
    if(count>2){count=0}
    slides.forEach(div=>div.classList.remove('on'))
    slides[count].classList.add('on')
},3000)