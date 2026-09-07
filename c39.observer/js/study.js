const obsever=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            //태그가 화면에 들어왔을 때
            entry.target.classList.add('on')
        }else{
            //태그가 화면밖으로 나갔을 때
            entry.target.classList.remove('on')
        }
    })
},{
    threshold:0.1 // 태그가 화면에 10%이상 보일 때 트리거를 하게 됨
});

const tags = document.querySelectorAll('.ltr,.fade,.fog')
tags.forEach(tag=>obsever.observe(tag))

