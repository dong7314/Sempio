// 체크박스 전체선택 함수
function allCheck(btn, elem) {
  if ( $(btn).hasClass('all') ) {
    $(btn).toggleClass('all');
    $(elem).prop('checked', false);
    $(btn).text('전체선택');
  } else {
    $(btn).toggleClass('all');
    $(elem).prop('checked', true);
    $(btn).text('전체해제');
  }
}

// 파일 미리보기 함수
function readURL(input) {
  if ( input.files && input.files[0] ) {
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = function(e){
      console.log(e.target.result);
      $('#image-section').attr('src', e.target.result);
    }
  }
}
/*
// 오토 슬라이드
let timerId = null;
let auto = function(){
  timerId = setInterval(function(){
    $('#carousel-next').trigger('click');
    // $('#carousel-next').click();
  }, 3000);
}

auto();
$('#carousel-prev, #carousel-next').on({
  mouseenter: function(){
    clearInterval(timerId);
  }, mouseleave: function(){
    timerId = setInterval(function(){
      $('#carousel-next').trigger('click');
    }, 1000);
  }
});
*/

/*
// wheel auto move
let windowHeight = $(window).innerHeight();
let direc = 0; // 방향 전환을 위한 변수 정의
let wheelAction = false;
let maxDirec = $('.wheel-wrap section').length - 1;
function wheelMove() {
  $('html').animate({ scrollTop: direc*windowHeight }, {
    duration: 1000,
    start: function(){
      wheelAction = true;
    },
    complete: function(){
      wheelAction = false;
    }
  });
}
wheelMove();
$(window).on('wheel', function(event){
  // console.log(event.originalEvent.wheelDelta);
  let eventDelta = event.originalEvent.wheelDelta;
  if ( eventDelta > 0 && wheelAction == false ) {
    // console.log('wheel up');
    if ( direc <= 0 ) {
      direc = 0;
    } else {
      direc--;
      wheelMove()
    }
  } else if ( eventDelta < 0 && wheelAction == false ){
    // console.log('wheel down');
    // direc += 1;
    if ( direc >= maxDirec ) {
      direc = maxDirec;
    } else {
      direc++;
      // console.log(direc);
      wheelMove();
    }
  }
});
*/

/*
// typing animation function
function autoType(elementClass, typingSpeed, innerText){
  let thisElem = $(elementClass);
  // console.log(thisElem);
  thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>');
  thisElem = thisElem.find('.text');
  thisElem.text(innerText);
  let text = thisElem.text().trim().split('');
  // console.log(text);
  thisElem.text('');
  let amntOfChars = text.length;
  // console.log(amntOfChars);
  let newString = '';

  setTimeout(function(){
    thisElem.css('opacity', '1');
    thisElem.prev().removeAttr('style');
    for( let i = 0; i < amntOfChars; i++) {
      (function(count, char){
        setTimeout(function(){
          newString += char;
          thisElem.text(newString);
        }, count*typingSpeed);
      })(i+1, text[i])
    }
  }, 1500);
};
*/
