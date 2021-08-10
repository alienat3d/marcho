$(function() {
  // === SLICK SLIDER PLUGIN ===
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // === / SLICK SLIDER PLUGIN ===

  // === RATEYO PLUGIN ===
  $(".star-rating").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });
  // === / RATEYO PLUGIN ===
});