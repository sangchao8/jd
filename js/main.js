var main = function () {
    var init = function () {
        // --flex开始--
        fastSearch();
        // --top-banner开始--
        colseBanner();
        // --nav开始--
        bejingShow();
        // --search开始--
    
        // --section开始--
        sectionNavOpen();
        dotProSwitch();
        arowProSwitch();
        proSwitch();
        proTab();
        // --seckill开始--
        seckill();
        seckillTab();
        seckillDot();
        shopScoll();
        // --ranking开始--
        rankingTab();
    };
    // --flex开始--
    var fastSearch = function () {
        $(window).scroll(function () {
            var h=$(this).scrollTop();//获得滚动条距top的高度
            if(h>800){
                $(".fix").fadeIn();
            }else{
                $(".fix").fadeOut();
            }});
    }

    // --top-banner开始--
   var colseBanner = function () {
        $(".close_banner").click(function () {
            // $(".top_banner").animate({"pacity":0,"display":"none"},500);
            $(".top_banner").fadeOut(200);
        });
    }

    // --nav开始--
    var bejingShow = function (){
        $('.js-downList').mouseenter(function () {
            $(this).children('.js-nav_location').addClass("on");
            $(this).children('.js-addr').stop(false,true).slideDown(100);
            
        });
        $('.js-downList').mouseleave(function () {
            $(this).children('.js-nav_location').removeClass("on");
            $(this).children('.js-addr').stop(false,true).slideUp(100);
        });
    }
    // --section开始--    
    var sectionNavOpen = function () {
        $('.js-section-nav').hover(function () {
            $(this).children('.js-section-banner').addClass('on');
        },function () {
            $('.js-section-banner').removeClass('on');
        })
        
    }
    var dotProSwitch = function() {
        $(".js-section-adBanner-dot>.js-dot").mouseenter(function () {
            clearInterval(timer);
            $(this).siblings('a').removeClass('on');
            $(this).addClass("on");
            $(".js-section-adBanner-img").children("a").eq($(this).index()).fadeIn(500).addClass('current').siblings("a")
                .fadeOut(500).removeClass('current');
        });
        $(".js-dot").mouseleave(function () {
            proSwitch();
        });
    }
    var arowProSwitch = function(){
        $('.js-pc-arrow-to-left').click(function (){
            var n = $(".section-adBanner-img>a.current").index();
            if(n>0){
                n=n-1;
            }else{
                n = $(".section-adBanner-img>a").length-1;
            }
            $(".section-adBanner-img>a").fadeOut(500).removeClass('current').eq(n).fadeIn(500).addClass('current');
            $(".section-adBanner-dot>a").removeClass('on').eq(n).addClass('on');
        });
        $('.js-pc-arrow-to-left').mouseenter(function (){
            clearInterval(timer);
        });
        $('.js-pc-arrow-to-left').mouseleave(function (){
            proSwitch();
        });
        
        $('.js-pc-arrow-to-right').click(function (){
            clearInterval(timer);
            var n = $(".section-adBanner-img>a.current").index();
            if(n<($(".section-adBanner-img>a").length-1)){
                n =n+1;
            }else {
                n=0;
            }
            $(".section-adBanner-img>a").fadeOut(500).removeClass('current').eq(n).fadeIn(500).addClass('current');
            $(".section-adBanner-dot>a").removeClass('on').eq(n).addClass('on');
        });
        $('.js-pc-arrow-to-right').mouseenter(function (){
            clearInterval(timer);
        });
        $('.js-pc-arrow-to-right').mouseleave(function (){
            proSwitch();
        });
    }
    var timer = null;
    var n = 0;
    var proSwitch = function() {
        var i =$(".js-section-adBanner-img>a").length;
        timer=setInterval(function () {
            var n =$(".js-section-adBanner-img>a.current").index();
            n++;
            if(n==i){
                n = 0;
            }
            $(".js-section-adBanner-img>a").fadeOut(500).removeClass('current').eq(n).fadeIn(500).addClass('current');
            $(".js-section-adBanner-dot>a").removeClass('on').eq(n).addClass('on');
        },2000);
    }
    var proTab = function() {
        $(".list1").mouseenter(function () {
            var index = $(this).index('.list1');
            // console.log(index);
            if(1 == index){
                $('.js-move-line').addClass('_2');
            }else{
                $('.js-move-line').removeClass('_2');
            }
            $(".section-announcement-center-text").eq(index).show().addClass('current')
                .siblings('ul').hide().removeClass('current');
            // console.log($(".section-announcement-center-text"));
        });
        
    }
    var seckill = function() {
        var timerSckill = null;
        timerSckill = setInterval(function () {
            var date1 = new Date();
            var date2 = new Date("2018/07/09 00:00:00");
            var sumDa = date2.getTime()-date1.getTime();
            // var day = parseInt(sumDa/1000/60/60/24);
            var hour = parseInt(sumDa/1000/60/60%24);
            var minute = parseInt(sumDa/1000/60%60);
            var second = parseInt(sumDa/1000%60);
            if(second<10){
                second = "0"+second;
            }
            if(minute<10){
                minute = "0"+minute;
            }
            if(hour<10){
                hour = "0"+hour;
            }
            $(".js-count-time").eq(0).html(hour);
            $(".js-count-time").eq(1).html(minute);
            $(".js-count-time").eq(2).html(second);
            if(sumDa <= 0){
                $(".seckill").hide();
                clearInterval(timerSckill);
            }
            
        },1000)
    }
    var shopScoll = function () {
        $('.js-pc-arows-a1').click(function () {
            var arr = $('.seckill-se-list1').length-1-4;
            $('.seckill-se-list1:first').before($('.seckill-se-list1:gt('+arr+')'));
            var boxWidth = $('.js-seckill-se').width();
            $('.js-seckill-se').scrollLeft(boxWidth);
           var curr = $('.js-seckill-se').scrollLeft();
           $('.js-seckill-se').animate({scrollLeft:curr-boxWidth},500);
        });
        $('.js-pc-arows-ar').click(function () {
           var boxWidth = $('.js-seckill-se').width();
           var curr = $('.js-seckill-se').scrollLeft();
           // console.log(imgWidth);
           $('.js-seckill-se').animate({scrollLeft:curr+boxWidth},500,function () {
               $('.seckill-se-list1:lt(4)').appendTo($('.js-seckill-se'));
               $('.js-seckill-se').scrollLeft(0);
           });
        });
    }
    var timerSeckill2 = null;
    var seckillTab = function(){
        timerSeckill2=setInterval( function () {
            var boxWidth = $('.js-shuffling').width();
            var curr = $('.js-shuffling').scrollLeft();
            $('.js-seckill-box').animate({scrollLeft:curr+boxWidth},1000,function(){
                $('.js-seckill-box>img.current').appendTo($('.js-seckill-box'));
                $('.js-seckill-box>img:first').addClass('current').siblings('img').removeClass('current');
                $('.js-seckill-box').scrollLeft(0);
                var src1 = $('.js-seckill-box>img.current').attr('src');
                var dot = $('.raduis>.js-dot-2[imgsrc="'+src1+'"]');
                dot.addClass('raduis-select').siblings().removeClass('raduis-select');
            });
        },2000);
    }
    var seckillDot = function(){
        $('.js-dot-2').mouseenter(function() {
            clearInterval(timerSeckill2);
            $(this).addClass('raduis-select').siblings().removeClass('raduis-select');
            var imgIndex=$('.js-seckill-box>img.current').index();
            var dotIndex=$(this).index();
            if(imgIndex>dotIndex){
                $('.js-seckill-box>img.current').before($('.js-seckill-box-img:last'));
                var boxWidth = $('.js-seckill-box').width();
                var curr = $('.js-seckill-box').scrollLeft();
                $('.js-seckill-box').scrollLeft(boxWidth);
                var curr = $('.js-seckill-box').scrollLeft();
                $('.js-seckill-box').animate({scrollLeft:curr-boxWidth},1000);
            }else {
                var boxWidth = $('.js-seckill-box').width();
                var curr = $('.js-seckill-box').scrollLeft();
                $('.js-seckill-box').animate({scrollLeft:curr+boxWidth},1000,function() {
                    $('.js-seckill-box>img.current').appendTo($('.js-seckill-box'));
                    $('.js-seckill-box>img:first').addClass('current').siblings('img').removeClass('current');
                    $('.js-seckill-box').scrollLeft(0);
                });
            }
        });
        $('.js-dot-2').mouseleave(function(){
            seckillTab();
        });
    }
    var rankingTab = function(){
        $('.ranking-content-nav>a').mouseenter(function () {
            var index=$(this).index();
            $('.ranking-content-Products').removeClass('current').eq(index).addClass('current');
            $('.ranking-content-nav>a').removeClass('col').eq(index).addClass('col');
        });
        
        $('.js-dot-2-1').mouseenter(function () {
            var index=$(this).index();
            var imgWidth=$('.ranking-content-Product-list').width();
            $(this).addClass('on').siblings('a').removeClass('on');
            $(this).parent().siblings('.js-ranking-content-Product').children('.current').children().removeClass('current').hide().eq(index)
                .show().addClass('current');
        });
        $('.js-dot-2-2').mouseenter(function () {
            var index=$(this).index();
            $(this).addClass('on').siblings('a').removeClass('on');
            $('.js-shop-box').removeClass('current').hide().eq(index)
                .show().addClass('current');
        });
    };
    return{
        init:init
    }
}();

