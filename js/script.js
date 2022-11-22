$(function(){
    let currentIndex = 0;
    let slideCnt = $(".slideImg").length;
    
    setInterval(function() {
        if(currentIndex < slideCnt-1){
            currentIndex++;
        }else{
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-1000)+"px";
        $(".slideList").animate({left:slidePosition},400)
    },3000);

    $(function(){
        $(".nav>ul>li").mouseover(function(){
            $(".nav>ul>li>ul").stop().slideDown(200);
        })
        $(".nav>ul>li").mouseleave(function(){
            $(".nav>ul>li>ul").stop().slideUp(200);
        })
    });
});