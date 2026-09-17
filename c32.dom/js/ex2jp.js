const tabs = $('.tabs>div');
const tabContents = $('.tab-contents>div');

tabs.click(function(){
    tabs.removeClass('on');
    $(this).addClass('on');
    tabContents.removeClass('on');
    let idx = $(this).index();
    tabContents.eq(idx).addClass('on');
});