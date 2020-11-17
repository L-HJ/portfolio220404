$(document).ready(function(){
    var subContents = $('#sub_contents');
    var subContentsOffset = subContents.offset().top - 50;
    $(window).scroll(function(){
        var scrollT = $(window).scrollTop();
        if(scrollT > subContentsOffset) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        };
    });
    
    /* grid 필터 */
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.list_top').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    
    /* 버튼 클래스 */
    $('.list_top').each( function( i, buttonGroup ) {
        var $buttonGroup = $('.list_top');
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.active').removeClass('active');
          $( this ).addClass('active');
        });
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