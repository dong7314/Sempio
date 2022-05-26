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

  $('.back-to-top, .time-wrap ul li a').click(function(){
    let thisHash = $(this.hash);
    let isAni = $('html,body').is(':animated');
    if ( !isAni ) {
      $('html,body').animate({ scrollTop : thisHash.offset().top }, 600, 'swing');
    }
    return false;
  });

  // slide banner
  const carInner = $('#carousel-inner');
  const widthNum = $('#carousel ul li').outerWidth();
  // li의 개수 가져오기
  let liLeng = carInner.find('ul.column li').length;
  // li의 개수로 ul.column의 너비를 설정
  $('#carousel-inner ul.column').css('width', widthNum*liLeng);
  // 슬라이드 포지션 초기화 함수
  function initialFunc(init) {
    if ( $(window).width() <= 575 ) {
      carInner.css('margin-left', -widthNum*1);
      if ( init === 'prev' ) {
        $('ul.column li:last').prependTo('ul.column');
      } else if ( init === 'next' ) {
        $('ul.column li:first').appendTo('ul.column');
      }
    } else if ( $(window).width() <= 767 ) {
      carInner.css('margin-left', -widthNum*2);
      if ( init === 'prev' ) {
        $('ul.column li:last').prependTo('ul.column');
        $('ul.column li:last').prependTo('ul.column');
      } else if ( init === 'next' ) {
        $('ul.column li:first').appendTo('ul.column');
        $('ul.column li:first').appendTo('ul.column');
      }
    } else {
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
  }
  function actionBtn(elem){
    if ( $(window).width() <= 575 ) {
      elem.click(function(){
        let carInMarginLeft = parseInt(carInner.attr('style').split(':')[1]);
        let isAni = carInner.is(':animated');
        if ( !isAni ) {
          if( elem.attr('id') == 'carousel-prev' ) {
            carInner.animate({ marginLeft: carInMarginLeft + widthNum*1 }, 'slow', 'swing',function(){
              initialFunc('prev');
            })
          } else if ( elem.attr('id') == 'carousel-next' ) {
            carInner.animate({ marginLeft: carInMarginLeft - widthNum*1 }, 'slow', 'swing',function(){
              initialFunc('next');
            })
          };
        };
      });
    } else if ( $(window).width() <= 767 ) {
      elem.click(function(){
        let carInMarginLeft = parseInt(carInner.attr('style').split(':')[1]);
        let isAni = carInner.is(':animated');
        if ( !isAni ) {
          if( elem.attr('id') == 'carousel-prev' ) {
            carInner.animate({ marginLeft: carInMarginLeft + widthNum*2 }, 'slow', 'swing',function(){
              initialFunc('prev');
            })
          } else if ( elem.attr('id') == 'carousel-next' ) {
            carInner.animate({ marginLeft: carInMarginLeft - widthNum*2 }, 'slow', 'swing',function(){
              initialFunc('next');
            })
          };
        };
      });
    } else {
      elem.click(function(){
        let carInMarginLeft = parseInt(carInner.attr('style').split(':')[1]);
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
  }
  // 슬라이드 포지션 초기화
  initialFunc('prev')

  $('.slide-btn').each(function(){
    actionBtn($(this));
  });

  // header, footer underline
  function locationHref(value){
    let valueHref = $(value).attr('href').split('/');
    valueHref = valueHref[valueHref.length-1];
    valueHref = valueHref.split('.')[0];
    return valueHref;
  }

  let currentHref = locationHref(location);
  $('#top-nav ul li a, #footer-nav ul li a').each(function(){
    let matchHref = locationHref(this);
    if ( currentHref == matchHref ) {
      $(this).addClass('on');
    }
  });

  // timewrap fixed
  if ( locationHref(location) == 'who_are_sempio' ) {
    $(window).scroll(function(){
      let timewrap = $('.section5.who_are_sempio .wrapping .inner .time-wrap');
      if ( $(this).scrollTop() >= $('.section5.who_are_sempio').offset().top ) {
        timewrap.css('position', 'fixed').css('top', '160px');
      } else {
        timewrap.css('position', 'relative').css('top', '0');
      }
    });
  }

  // global_network tab click
  $('.tab-nav li').each(function(){
    $(this).click(function(){
      $('.tab-nav li').each(function(){
        $(this).removeClass('tab');
      });
      $(this).addClass('tab');
      let aText = $('a', this).text();
      $('.information-box').each(function(){
        $(this).removeClass('tab');
        $('.information-box').each(function(){
          if ( $(this).hasClass(aText) ) {
            $(this).addClass('tab');
          }
        });
      });
    });
  });

  // shop our range click
  $('#top-nav ul li:nth-child(5) a, #footer-nav ul li:nth-child(5) a').click(function(){
    $('#shop-our-range').addClass('active');
    $('#header').css('z-index', '0');
    return false;
  })
  $('#shop-our-range .close-btn').click(function(){
    $('#shop-our-range').removeClass('active');
    $('#header').css('z-index', '3');
  })

  // mediaquery

  // header slide
  $('#click-header').click(function(){
    $('#header .wrapping #top-nav ul').slideToggle();
  });
  $(window).resize(function(){
    if ($(this).width() >= 1150 && $(this).width() < 1250) {
      $('#top-nav ul').attr('style', '');
    }
  });
});
