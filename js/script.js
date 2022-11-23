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
});

    $(function(){
        $(".nav>ul>li").mouseover(function(){
            $(".nav>ul>li>ul").stop().slideDown(200);
        })
        $(".nav>ul>li").mouseleave(function(){
            $(".nav>ul>li>ul").stop().slideUp(200);
        })
    });

//sokcho_slide
let s_slide_position = 0;
let cnt = 0;
$(".lbtn").click(function(){
    cnt--;
    if(cnt < 0){
        cnt = $(".s_slideImg").length - 1;
        s_slide_position = cnt * (-1000)+"px";
        $(".sokcho_slide").animate({marginLeft:s_slide_position}, 400);
    }else{    
        s_slide_position = cnt * (-1000)+"px";
        $(".sokcho_slide").animate({marginLeft:s_slide_position}, 400);
    }
});
$(".rbtn").click(function(){
    cnt++;
    if(cnt > 2){
        cnt = 0;
        s_slide_position = cnt * (-1000)+"px";
        $(".sokcho_slide").animate({marginLeft:s_slide_position}, 400);
    }else{    
        s_slide_position = cnt * (-1000)+"px";
        $(".sokcho_slide").animate({marginLeft:s_slide_position}, 400);
    }
});