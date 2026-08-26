    const popup= document.querySelector('.popup');
    const btnOpen=document.querySelector('#btn-open');
    const btnClose=document.querySelector('#btn-close');

    btnOpen.addEventListener('click',()=>{
        popup.classList.add('on');

    })
    btnClose.addEventListener('click',()=>{
        popup.classList.remove('on');
        
    })

    const train=document.querySelector('.train');
    let count=0;
    setInterval(()=>{
        count++;
        if(count>2){count=0}
        train.style.transform=`translateY(${-33.333*count}%)`;
    },2500);


    const tabs=document.querySelectorAll('.tabs>a');
    const tabContents=document.querySelectorAll('.tab-contents>ul');
    tabs.forEach((atag,index)=>{
        atag.addEventListener('click',()=>{
        tabs.forEach(a=>a.classList.remove('on'));
        atag.classList.add('on');
        tabContents.forEach(ul=>ul.classList.remove('on'));
        tabContents[index].classList.add('on');
    });
    });