$('.a').css('color','red');
let txt=$('.a').html()
// alert(txt)
$('.a').html('<i>새로운내용</i>');
let href=$('.b').attr('href')
$('.b').attr('href','https://www.naver.com')
$('.c').addClass('on')
$('.c').removeClass('on')
$('.b').next().addClass('on')
$('.c').prev().html('네이버')
$('.c').parent().css
('background-color','beige')
$('#btn').click(()=>{
    $(".frame").css('color','blue');
})

$('.list>li').click(function(){
    let idx=$(this).index();
    alert(idx);
});