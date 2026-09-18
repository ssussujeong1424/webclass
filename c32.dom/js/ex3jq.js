const train = $('.train');
const btnPrev = $("#btn-prev");
const btnNext = $("#btn-next");

let count = 0;

function autoSlide(slidecount) {
    slidecount++;
    train.css('transition', `all 0.8s ease 0s`);
    train.css('transform', `translateX(${-20 * slidecount}%)`);
    if (slidecount === 4) {
        setTimeout(() => {
            train.css('transition', `none`);
            train.css('transform', `translateX(0%)`);
            count = 0;
        }, 810);
    }
    return slidecount;
}

let timer = setInterval(() => {
   count=autoSlide(count);
}, 3000);

train.mouseenter(() => {
    clearInterval(timer);
});

train.mouseleave(() => {
    timer = setInterval(() => {
       count=autoSlide(count);
    }, 3000);
});