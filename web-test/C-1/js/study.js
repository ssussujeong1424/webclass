const slides=document.querySelectorAll('.train>div');

let count=0;
setInterval(()=>{
    count++;
    if(count>2){count=0};
    slides.forEach(a=>a.classList.remove('on'));
    slides[count].classList.add('on');
},2500)


setInterval(()=>{
    count++;
    if(count>2){count=0}
    slides.forEach(a=>a.classList.remove('on'));
    slides[count].classList.add('on');
},2500)