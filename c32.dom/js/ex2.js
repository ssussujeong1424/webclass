document.addEventListener('DOMContentLoaded',()=>{
    const tabs=document.querySelectorAll('.tabs>div');
    const tabContents=document.querySelectorAll('.tab-contents>div');
    tabs.forEach(function(tab1,index){
        tab1.addEventListener('click',function(){
            tabs.forEach(tab2=>tab2.classList.remove('on'));
            tab1.classList.add("on");
            tabContents.forEach(tabContent=>tabContent.classList.remove('on'));
            tabContents[index].classList.add('on')
        });
    });
});