$(document).ready(function() {

  // build tween
  var tween = new TimelineMax ()
  	.add([
  		TweenMax.to(".logo-artistic__word-first i", 1, {y: -280, ease: Linear.easeNone}),
  		TweenMax.to(".logo-artistic__word-second i", 1, {y: -100, ease: Linear.easeNone}),
  		TweenMax.to(".logo-artistic__waves", 1, {y: -240, ease: Linear.easeNone}),
  		TweenMax.to(".m-info", 1, {y: "-30%", ease: Linear.easeNone}),

  		TweenMax.to(".date__month", 1, {y: -250, ease: Linear.easeNone}),
  		TweenMax.to(".date__year", 1, {y: -180, ease: Linear.easeNone})
  	]);

  var controller = new ScrollMagic.Controller();
  // build scene
  var scene = new ScrollMagic.Scene({duration: "100%"})
  				.setTween(tween)
  				.addIndicators() // add indicators (requires plugin)
  				.addTo(controller);
});
