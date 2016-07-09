$(document).ready(function() {

  // OPEN OVERLAY
  $('.m-speaker__img, .m-speaker__name').on('click', function() {
    $('.m-modal,.overlay-bg').fadeIn();

  });


  // CLOSE OVERLAY
  $('.m-modal__close').on('click', function() {
    $(this).parent().fadeOut();
    $('.overlay-bg').fadeOut();
  });

  $('.overlay-bg').on('click', function() {
    $(this).fadeOut();
    $('.m-modal').fadeOut();
  });

});
