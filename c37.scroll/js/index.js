const scr = document.querySelector('#scr')
let documentH = document.documentElement.scrollHeight; // 전체 문서의 높이
let viewH = window.innerHeight;
const percentTag = document.querySelector('.percent');
const barTag = document.querySelector('.bar');


window.addEventListener('scroll',()=>{
    // 스크롤바가 움직일 때마다 실행되는 소스코드
    let distance = window.scrollY;
    scr.innerHTML = `현재 위에서 스크롤바가 ${distance}픽셀만큼 떨어져있음.`;

    let percent = ((distance/(documentH-viewH))*100).toFixed(2);
    percentTag.innerHTML = `${percent}%`;
    barTag.style.width = `${percent}%`;
});

const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});
});

// 마우스 휠을 올리거나 내릴 때 사용하는 소스코드
let lastScrollTop = 0;
window.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // 스크롤바가 내려온 길이를 계산
    if(scrollTop < lastScrollTop){
        // 마우스 휠을 위로 굴렸을 때
        console.log('위로굴림')
        scr.classList.add('on');
    }else{
        // 마우스 휠을 아래로 굴렸을 때
        console.log('아래로굴림')
        scr.classList.remove('on');
    }
    lastScrollTop = scrollTop;
});