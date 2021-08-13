"use strict"
$(function () {
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

  // === RANGE SLIDER PLUGIN ===
  $(".filter-price__input").ionRangeSlider({
    prefix: "$",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });
  // === / RANGE SLIDER PLUGIN ===

  // === FORM STYLER PLUGIN ===
  $(".select-styled").styler();
  // === / FORM STYLER PLUGIN ===

  // === LIST FILTER JQ ===
  $(".shop-content__filter-btn").on('click', function(){
    $(".shop-content__filter-btn").removeClass("shop-content__filter-btn--active");
    $(this).addClass("shop-content__filter-btn--active");
  });

  $(".button-list").on("click", function(){
    $(".product-card").addClass("product-card--list");
  });

  $(".button-grid").on("click", function(){
    $(".product-card").removeClass("product-card--list");
  });
  // === / LIST FILTER JS ===

  // === COUNTDOWN JS ===
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector(".promo__countdown");
    const daysSpan = clock.querySelector(".promo__countdown-days");
    const hoursSpan = clock.querySelector(".promo__countdown-hours");
    const minutesSpan = clock.querySelector(".promo__countdown-minutes");
    const secondsSpan = clock.querySelector(".promo__countdown-seconds");

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $(".promo__countdown").attr("data-time");
  initializeClock(".promo__countdown", deadline);
  // === / COUNTDOWN JS ===
});
