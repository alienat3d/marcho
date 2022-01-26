'use strict';
$(function () {
  // === BURGER MENU ===
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  // === / BURGER MENU ===

  // === SLICK SLIDER PLUGIN ===
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // === / SLICK SLIDER PLUGIN ===

  // === RATEYO PLUGIN ===
  $('.star-rating').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    readOnly: true,
    starSvg:
      '<svg width="18" height="16"><path d="m8.102.555-2.04 4.14-4.566.664C.68 5.477.352 6.49.946 7.066l3.3 3.22-.781 4.546c-.14.82.726 1.438 1.45 1.05L9 13.739l4.086 2.145c.723.383 1.59-.23 1.45-1.051l-.782-4.547 3.3-3.219c.594-.578.266-1.59-.55-1.707l-4.567-.664L9.899.555c-.367-.735-1.425-.746-1.796 0Zm0 0"/></svg>',
  });
  // === / RATEYO PLUGIN ===

  // === RANGE SLIDER PLUGIN ===
  $('.filter-price__input').ionRangeSlider({
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  // === / RANGE SLIDER PLUGIN ===

  // === FORM STYLER PLUGIN ===
  $('.select-styled, .product-single__number').styler();
  // === / FORM STYLER PLUGIN ===

  // === [PRODUCT-PAGE] 2XSLIDER JQ ===
  $('.product-slide__thumbs').slick({
    asNavFor: '.product-slide__large',
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });
  $('.product-slide__large').slick({
    asNavFor: '.product-slide__thumbs',
    draggable: false,
    arrows: false,
    fade: true,
  });
  // === / [PRODUCT-PAGE] 2XSLIDER JQ ===

  // === [PRODUCT-PAGE] TABS JQ ===
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass(
      'product-tabs__content-item--active'
    );
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
  // === / [PRODUCT-PAGE] TABS JQ ===

  // === LIST FILTER JQ ===
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass(
      'shop-content__filter-btn--active'
    );
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });
  // === / LIST FILTER JQ ===

  // === BLOG SLIDER JQ ===
  $('.blog-page__slider').slick({
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="8" height="16"><path d="m.992 7.469 4.25-4.25a.747.747 0 0 1 1.059 0l.707.707a.747.747 0 0 1 0 1.058L3.996 8l3.012 3.012a.74.74 0 0 1 0 1.058l-.703.711a.752.752 0 0 1-1.063 0l-4.25-4.25a.745.745 0 0 1 0-1.062Zm0 0"></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="8" height="16"><path d="m7.008 8.531-4.25 4.25a.747.747 0 0 1-1.059 0l-.707-.707a.747.747 0 0 1 0-1.058l3.016-3.012L.992 4.992a.752.752 0 0 1 0-1.062l.703-.711a.752.752 0 0 1 1.063 0l4.25 4.25a.745.745 0 0 1 0 1.062Zm0 0"></svg></button>',
  });
  // === / BLOG SLIDER JQ ===

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
    const clock = document.querySelector('.promo__countdown');
    const daysSpan = clock.querySelector('.promo__countdown-days');
    const hoursSpan = clock.querySelector('.promo__countdown-hours');
    const minutesSpan = clock.querySelector('.promo__countdown-minutes');
    const secondsSpan = clock.querySelector('.promo__countdown-seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__countdown').attr('data-time');
  initializeClock('.promo__countdown', deadline);
  // === / COUNTDOWN JS ===
});
