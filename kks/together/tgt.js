const slider = document.querySelector('.tgt-img');

let isDown = false;
let startX = 0;
let startScrollLeft = 0;
let moved = false;

slider.addEventListener('pointerdown', (e) => {
    isDown = true;
    moved = false;

    startX = e.clientX;
    startScrollLeft = slider.scrollLeft;

    slider.setPointerCapture(e.pointerId);
});

slider.addEventListener('pointermove', (e) => {
    if(!isDown) return;

    const moveX = e.clientX - startX;

    if(Math.abs(moveX) > 5){
        moved = true;
    }

    slider.scrollLeft = startScrollLeft - moveX;
});

slider.addEventListener('pointerup', () => {
    isDown = false;
});

slider.addEventListener('pointercancel', () => {
    isDown = false;
});

/* 드래그 후 링크가 눌리는 것 방지 */
slider.addEventListener('click', (e) => {
    if(moved){
        e.preventDefault();
    }
});