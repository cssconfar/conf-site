$(document).ready(function() {
  $('.js-flip-map').on('click', function(ev) {
    ev.preventDefault();

    $('.flip-container').toggleClass('show-map');
    $(this).toggleClass('i-venue__cta--map');
  });
});
