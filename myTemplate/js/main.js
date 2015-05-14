$(document).ready(function () {
  var trigger = $('.hamburger'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $('.row.combo').animate({"left":"0"}, "0");
        $('#page-content-wrapper').css({width : '100%'});
        isClosed = false;
      } else {   
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        $('#page-content-wrapper').css({top :'0%', bottom: '0%', position: 'absolute', width: '84%'});
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});