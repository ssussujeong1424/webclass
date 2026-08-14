document.addEventListener('DOMContentLoaded',()=>{
//팝업기능
const btnClosePopup=document.querySelector('.btn-close-popup');
const popup=document.querySelector(".popup")
btnClosePopup.addEventListener('click',()=>{
    popup.classList.add('off');
})

//5초 뒤에 자동으로 팝업이 닫히는 기능
// setTimeout(function(){
//     popup.classList.add('off');
// },5000)

const popupSecondTag=document.querySelector("#popup-second");
// popupSecondTag.innerHTML=2;

let second = 5; 
function autoClosePopupSystem(){
    popupSecondTag.innerHTML=second;
    second--;
    if(second===0){
        setTimeout(function(){
        popup.classList.add('off');
        },600);
        return}
    setTimeout(function(){
        autoClosePopupSystem();
    },1000);
}

autoClosePopupSystem();

});
