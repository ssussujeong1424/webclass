
    let fontSizeBase=20;
    const html = $("html");
    const btnFontUp = $("#btn-font-up");
    btnFontUp.click(()=>{
         if(fontSizeBase>40){return}
         fontSizeBase++;
         html.css('font-size',fontSizeBase+'px');
    });
    const btnFontDown=$("#btn-font-down");
    btnFontDown.click(()=>{
        if(fontSizeBase<12){return}
        fontSizeBase--;
        html.css('font-size',fontSizeBase+'px');
    });

    const btnToggle = $("#btn-toggle");
    const fontControl = $(".fontControl");
    btnToggle.click(()=>{
        fontControl.toggleClass('on');
    });

    let btnState = false;
    btnToggle.click(function(){
        if(!btnState){
            $(this).find('img').attr('src','./img/close copy.svg').find('img').attr('alt','닫기');
            btnState=true;
        }else{
            $(this).find('img').attr('src','./img/menu.svg').find('img').attr('alt','메뉴');
            btnState=false;
        }
    })
