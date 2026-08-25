$(document).ready(()=>{
    $('#btn-open').click(()=>{
        $('.modal').addClass('on');
        $('.popup').addClass('on');
    });
    $('#btn-close').click(()=>{
        $('.modal').removeClass('on');
        $('.popup').removeClass('on');
    });
});


let count=0;
setInterval(()=>{
    count++;
    if(count>2){count=0}
    $('.train').css('transform',`translateX(${-33.33*count}%)`);
},2500); 