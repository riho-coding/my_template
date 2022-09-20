// **
// * swiper
// *

const Swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  loop: true,
  // マウスホイールでもスライドさせる
  mousewheel: {
    thresholdDelta: 100,
    forceToAxis: true,
  },
  speed: 400,
  spaceBetween: 40,
  grabCursor: true,
  // ナビゲーション
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ページネーション
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  // レスポンシブ表示
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1320: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
