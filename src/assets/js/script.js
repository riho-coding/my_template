'use strict';

// **
// * 360px以下、1401px以上のデバイスはviewportの書き換えで対応
// *

!(function () {
  // metaタグの内、name属性が"viewport"である要素を取得する
  const viewport = document.querySelector('meta[name="viewport"]');

  // viewportのwidthを変更するための関数を定義する
  function switchViewport() {
    // ブラウザウィンドウの外側の幅を取得する
    const width = window.outerWidth;

    // 幅が375px以下の場合、'width=375'
    // 幅が1400pxより大きい場合、'width=1400'
    // それ以外の場合、'width=device-width,initial-scale=1'を設定する
    const value = width <= 375 ? 'width=375' : width > 1400 ? 'width=1400' : 'width=device-width,initial-scale=1';

    // viewportのcontent属性がvalueと異なる時のみ更新する
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }

  //リサイズイベントを監視し、switchViewport関数を呼び出す
  addEventListener('resize', switchViewport, false);
  switchViewport(); // 初期化
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
