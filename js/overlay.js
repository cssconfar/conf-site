$(document).ready(function() {

  // OPEN TALK OVERLAY
  $('.m-speaker__img, .m-speaker__name').on('click', function() {
    $('.overlay-bg').fadeIn();

    var modalName = $(this).attr('data-modal');

    $('.m-modal').hide();
    $(modalName).fadeIn();
  });


  // CLOSE TALK OVERLAY
  $('.m-modal__close').on('click', function() {
    $(this).parent().fadeOut();
    $('.overlay-bg').fadeOut();
  });

  $('.overlay-bg').on('click', function() {
    $(this).fadeOut();
    $('.m-modal').fadeOut();
  });

});
