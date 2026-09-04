const mouseCursor=document.querySelector('.mouseCursor');
let cursorState=false;
const tooltipBox=document.querySelector('.tooltip-box');

document.addEventListener('mousemove',(e)=>{
    //마우스를 움직일 때마다 실행되는 소스코드

    if(!cursorState){
     mouseCursor.style.display='block';
     cursorState=true;
    }

    console.log(e.clientX, e.clientY);
    mouseCursor.style.left=e.clientX+'px';
    mouseCursor.style.top=e.clientY+'px';
})


document.addEventListener('mousedown',()=>{
    mouseCursor.innerHTML=`<img src="./img/clicked.png" alt="클릭한 상태">`;
})

document.addEventListener('mouseup',()=>{
    mouseCursor.innerHTML=`<img src="./img/default.png" alt="기본 상태">`;
})

document.addEventListener('mousemove',(e)=>{
    tooltipBox.style.left=(e.clientX+120)+'px';
    tooltipBox.style.top=e.clientY+'px';
});


const tooltips=document.querySelectorAll('.tooltip');
tooltips.forEach(spantag=>{
    //각각의 span 태그에 마우스를 올렸을 때
    spantag.addEventListener('mouseenter',()=>{
        // alert('마우스 올림');
        tooltipBox.style.display='block';
        tooltipBox.innerHTML=spantag.getAttribute('data-tooltip');
        mouseCursor.innerHTML=`<img src="./img/clicked.png" alt="클릭한 상태">`;
    });
    
    //각각의 span 태그에서 마우스를 뺐을 때
    spantag.addEventListener('mouseleave',()=>{
        tooltipBox.style.display='none';
         tooltipBox.innerHTML=``;
         mouseCursor.innerHTML=`<img src="./img/default.png" alt="기본 상태">`;
    });
});