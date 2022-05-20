$(function(){
  // back to top btn
  $(window).scroll(function(){
    let backToTop = $('.back-to-top');
    if ( $(this).scrollTop() != 0 ) {
      backToTop.addClass('on');
    } else {
      backToTop.removeClass('on');
    }
  });

  $('.back-to-top').click(function(){
    let thisHash = $(this.hash);
    let isAni = $('html,body').is(':animated');
    if ( !isAni ) {
      $('html,body').animate({ scrollTop : thisHash.offset().top }, 600, 'swing');
    }
    return false;
  });

  // slide banner
  const carInner = $('#carousel-inner');
  const widthNum = 320;
  // li의 개수 가져오기
  let liLeng = carInner.find('ul.column li').length;
  // li의 개수로 ul.column의 너비를 설정
  $('#carousel-inner ul.column').css('width', widthNum*liLeng);
  // 슬라이드 포지션 초기화 함수
  function initialFunc(init) {
    carInner.css('margin-left', -widthNum*3);
    if ( init === 'prev' ) {
      $('ul.column li:last').prependTo('ul.column');
      $('ul.column li:last').prependTo('ul.column');
      $('ul.column li:last').prependTo('ul.column');
    } else if ( init === 'next' ) {
      $('ul.column li:first').appendTo('ul.column');
      $('ul.column li:first').appendTo('ul.column');
      $('ul.column li:first').appendTo('ul.column');
    }
  }

  // 슬라이드 포지션 초기화
  initialFunc('prev')

  function actionBtn(elem){
    elem.click(function(){
      let carInMarginLeft = parseInt(carInner.css('margin-left'));
      let isAni = carInner.is(':animated');
      if ( !isAni ) {
        if( elem.attr('id') == 'carousel-prev' ) {
          carInner.animate({ marginLeft: carInMarginLeft + widthNum*3 }, 'slow', 'swing',function(){
            initialFunc('prev');
          })
        } else if ( elem.attr('id') == 'carousel-next' ) {
          carInner.animate({ marginLeft: carInMarginLeft - widthNum*3 }, 'slow', 'swing',function(){
            initialFunc('next');
          })
        };
      };
    });
  }

  $('.slide-btn').each(function(){
    actionBtn($(this));
  });
  /*
  // auto slide 구현
  let timerId = null;
  let auto = function(){
    timerId = setInterval(function(){
      $('#carousel-next').trigger('click');
    }, 3000);
    return timerId;
  }

  auto();

  $('#carousel, #carousel-prev, #carousel-next').on({
    mouseenter: function(){
      clearInterval(timerId);
    }, mouseleave: function(){
      timerId = setInterval(function(){
        $('#carousel-next').trigger('click');
      }, 3000);
    }
  });
  */
});
