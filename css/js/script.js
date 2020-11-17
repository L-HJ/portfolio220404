 
 document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "소통을 중요시하는 웹 퍼블리셔, 이현진 포트폴리오입니다 :)"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
         document.querySelector(".input_txt").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 90);
        }
        /*else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 1200);
        }*/
    }
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 0);
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
            var idx = i+1;
            if(idx > 4) idx = 0;
            StartTextAnimation(idx);
            //StartTextAnimation(i + 1);
         });
        }
    }
    StartTextAnimation(0);
    
    /* 헤더 스크롤 이벤트 */
    var contents = $('#contents');
    var contentsOffset = contents.offset().top - 50;
    $(window).scroll(function(){
        var scrollT = $(window).scrollTop();
        if(scrollT > contentsOffset) {
            $('#header').addClass('on');
            $('.top_btn').addClass('on');
            $('.navi').addClass('on');
        } else {
            $('#header').removeClass('on');
            $('.top_btn').removeClass('on');
            $('.navi').removeClass('on');
        };
    });
    
    /* 네비 */
    $('.navi_btn').click(function(){
        $(this).toggleClass('on');
        $('.navi').toggleClass('active');        
        if($(this).hasClass('on') == true) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        };
        
        $('.navi').find('a').click(function(){
            $('.navi_btn').removeClass('on');
            $('.navi').removeClass('active');
            $('#header').removeClass('active');
        });
    });

    /* about 탭버튼 */
    var cnt = 0;
    $('.txt_wrap div.tab').hide().eq(0).show();
    $('.txt_wrap div.tab2 li .txt').hide().eq(0).show();
    
    $('.txt_wrap h3').click(function() {
        cnt = $(this).index()
        $('.txt_wrap h3').removeClass('active').eq(cnt).addClass('active');
        $('.txt_wrap div.tab').hide().eq(cnt).fadeIn();
    });
    
    $('.txt_wrap div.tab2 li').click(function(){
        var txt = $(this).find('.txt');
        $(this).toggleClass('up').find(txt).slideToggle();
        $('.txt_wrap div.tab2 li .txt').not(txt).slideUp().parent('li').removeClass('up');
    });
    
    /* portfolio 슬라이드 */
    $('.sec2_slider').on('init', function(event, slick) {
        $('.slick-counter').html('<span class="current"></span><span class="counter-bar"></span><span class="total"></span>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
        prevArrow:$('.slick-prev'),
        nextArrow:$('.slick-next'),
        responsive: [
        {
          breakpoint: 1025,
          settings: {
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            centerMode: true,
            variableWidth: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            centerMode: false,
            variableWidth: false,
          }
        }
      ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });
    
    /* 전체 aos */
    AOS.init({
        duration: 1000,
        once : true,
        offset:300,
        easing:'ease-out',
        anchorPlacement: 'top-bottom'
    });
    
    /* top btn */
    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});