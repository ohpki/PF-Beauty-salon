function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('menu_text').textContent = "close";
  document.getElementById('nav').classList.toggle('in');
  let changeElement = (e)=> {
    //el.classList.toggle('active');
    
    if(e.style.display==''){
      e.style.display='none';
    }else{
      e.style.display='';
    }
  }
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
});

let slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
let slideContsRect = []; // 要素の位置を入れるための配列
let slideContsTop = []; // 要素の位置を入れるための配列
let windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
let windowH = window.innerHeight; // ウィンドウの高さを取得
let remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
for (let i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (let i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  
  for (let i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > slideContsTop[i] - windowH + remainder) {
      // .showを付与
      slideConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      slideConts[i].classList.remove('show');
    }
  }
});