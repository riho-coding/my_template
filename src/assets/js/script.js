'use strict';

// **
// * 360px未満のデバイスはviewportの書き換えで対応
// *

!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

// **
// * Internet Explorer判定
// *

!(function () {
  const browser = window.navigator.userAgent.toLowerCase();
  const root = document.documentElement;
  // IEからアクセスされた場合、html要素に`class="ua-ie"`を付与する
  if (browser.indexOf('msie') > 0 || browser.indexOf('trident') > 0) {
    root.classList.add('ua-ie');
  }
})();

// **
// * ヒーローヘッダーを画面の高さいっぱいに表示
// *

const heroHeaderHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// ブラウザリサイズ時も発動する
window.addEventListener('resize', heroHeaderHeight);
heroHeaderHeight(); // 初期化

// **
// * 現在の西暦を取得
// *

const currentYear = new Date().getFullYear();
const outputYear = document.getElementById('currentYear');
outputYear.innerText = `${currentYear}`;
