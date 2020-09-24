$(document).ready(function () {
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  $('#up').on('click', function () {
    $('html, body').animate( {
       scrollTop: 0
    },  2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800
  })

});

 window.onload = function() {
  const EFFECT = document.querySelector("#effect");

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if(window.scrollY >= 30){
      EFFECT.style.opacity = '0';
      EFFECT.style.transition = '1s ease-in-out';
    }
    else {
      EFFECT.style.opacity = '1';
      EFFECT.style.transition = '1s ease-in-out';
    }
  }
  scrollEffect();
}

$("box").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
