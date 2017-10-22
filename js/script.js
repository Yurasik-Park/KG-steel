$(document).ready(function() {

  $(".form__item-phone").mask('+38-(000)-000-00-00');



  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.form__complete').animate({opacity: "1"}, 1000);
      $("#form").trigger("reset");
    });
    return false;
  });

  $(window).scroll(function() {

     if($(window).scrollTop() >= 450) {
       $(".service-right:first").addClass('fadeInRightBig');
     }
     if($(window).scrollTop() >= 650) {
       $(".service-left:first").addClass('fadeInLeftBig');
     }
     if($(window).scrollTop() >= 750) {
       $(".service-right:eq(1)").addClass('fadeInRightBig');
     }
     if($(window).scrollTop() >= 850) {
       $(".service-left:eq(1)").addClass('fadeInLeftBig');
     }
     if($(window).scrollTop() >= 950) {
       $(".service-right:last").addClass('fadeInRightBig');
     }
     if($(window).scrollTop() >= 150) {
       $('.benefit-title').addClass('bounceIn');
     }
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 20) {
      $('#back-top').css('display', 'block');
    }
    else {
      $('#back-top').css('display', 'none');
    }
  });
  $('#back-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
  }, 400);
  });

  $('.nav-line').click(function() {
    $('.navigation').toggleClass('navigation_active');
    $('.nav-close').css('display', 'block');
  });

  $('.nav-close').click(function() {
    $('.navigation').toggleClass('navigation_active');
    $('.nav-close').css('display', 'none');
  });



});
