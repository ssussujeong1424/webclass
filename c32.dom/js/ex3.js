document.addEventListener('DOMContentLoaded',()=>{
    const train = document.querySelector('.train');
    const btnPrev = document.querySelector("#btn-prev");
    const btnNext = document.querySelector("#btn-next");

    let count = 0;

    // btnNext.addEventListener('click',()=>{
    //     count++;
    //     train.style.transition=`all 0.8s ease 0s`;
    //     train.style.transform = `translateX(${-20*count}%)`;
    //     if(count===4){
    //         setTimeout(()=>{
    //         train.style.transition=`none`;
    //         train.style.transform=`translateX(0%)`;
    //         count=0;
    //         },810);
    //     }
    // });

    // btnPrev.addEventListener('click',()=>{
    //     count--;
    //     if(count<0){count=3}
    //      train.style.transform = `translateX(${-20*count}%)`;
    // });

    let timer = setInterval(()=>{
         count++;
        train.style.transition=`all 0.8s ease 0s`;
        train.style.transform = `translateX(${-20*count}%)`;
        if(count===4){
            setTimeout(()=>{
            train.style.transition=`none`;
            train.style.transform=`translateX(0%)`;
            count=0;
            },810);
}},3000);

train.addEventListener('mouseenter',()=>{
    clearInterval(timer);
});

train.addEventListener('mouseleave',()=>{
        timer = setInterval(()=>{
         count++;
        train.style.transition=`all 0.8s ease 0s`;
        train.style.transform = `translateX(${-20*count}%)`;
        if(count===4){
            setTimeout(()=>{
            train.style.transition=`none`;
            train.style.transform=`translateX(0%)`;
            count=0;
            },810);
}},3000);

})

});