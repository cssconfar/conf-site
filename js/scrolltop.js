$(document).ready(function() {
  $(".site-nav__link").on('click', function(e) {
    e.preventDefault();

     var menuSection = $(this).attr('data-menu');

    $('html, body').stop().animate({
        scrollTop: $(menuSection).offset().top
    }, 800);
  });

  $('.arrow-top').on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
});
