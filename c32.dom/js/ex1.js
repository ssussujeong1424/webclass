document.addEventListener('DOMContentLoaded', () => {
    //크게-버튼 눌렀을 때 동작하는 기능
    let fontSizeBase = 20;
    const html = document.querySelector("html");
    const btnFontUp = document.querySelector("#btn-font-up");
    btnFontUp.addEventListener('click', () => {
        if (fontSizeBase > 40) { return }
        html.style.fontSize = fontSizeBase + 'px';
        fontSizeBase++;
    });

    //작게 버튼 눌렀을 때 동작하는 기능(글씨크기 12이하 x)
    const btnFontDown = document.querySelector("#btn-font-down");
    btnFontDown.addEventListener('click', () => {
        if (fontSizeBase < 12) { return }
        html.style.fontSize = fontSizeBase + 'px';
        fontSizeBase--;
    })

    const btnToggle = document.querySelector("#btn-toggle");
    const fontControl = document.querySelector(".fontControl");
    btnToggle.addEventListener('click', () => {
        fontControl.classList.toggle('on');
    });

    //아이콘 이미지 변경 기능
    let btnState = false; //이미지가 메뉴 상태임을 뜻함. true가 되면 x 이미지 상태를 뜻함
    btnToggle.addEventListener('click', function () {
        if (!btnState) {
            this.children[0].setAttribute('src', './img/close copy.svg').setAttribute('alt', '닫기');
            btnState = true;
        } else {
            this.children[0].setAttribute('src', './img/menu.svg').setAttribute('alt', '메뉴');
            btnState = false;
        }
    });


});