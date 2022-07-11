const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});

$('.product-slider__arrow--direction--prev').click(e => {
  slider.goToPrevSlide();
});

$('.product-slider__arrow--direction--next').click(e => {
  slider.goToNextSlide();
});