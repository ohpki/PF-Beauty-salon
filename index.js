function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
  let changeElement = (e)=> {
    //el.classList.toggle('active');
  //   console.log(e)
  //   if(e.style.display==''){
  //     console.log('test1')
  //     e.style.display='block';
  //   }else{
  //     console.log('test2')
  //     e.style.display='';
  //   }
  // }
   
  if(e.style.display==''){
    e.style.display='none';
  }else{
    e.style.display='';
  }
}
}

document.getElementById('hamburger').addEventListener('click' , function () {
  console.log('hamburger')
  hamburger();
  document.getElementById('nav').classList.toggle('nav-hidden');
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

const slideShow = function () {

  const images = document.querySelectorAll( '.slideShow ul.imgWrap li' ),
        imagesLength = images.length - 1,
        next = document.querySelector( '.slideShow .btn-next' ),
        prev = document.querySelector( '.slideShow .btn-prev' );

  let cnt = 0;

  function showNext () {
      if ( cnt >= imagesLength ) {
          cnt = 0;
          images.item( cnt ).classList.add( 'is-show' );
          images.item( imagesLength ).classList.remove( 'is-show' );
      } else {
          images.item( cnt ).classList.remove( 'is-show' );
          images.item( cnt + 1 ).classList.add( 'is-show' );
          cnt += 1;
      }
  }

  function showPrev () {
      if ( cnt === 0 ) {
          images.item( cnt ).classList.remove( 'is-show' );
          images.item( imagesLength ).classList.add( 'is-show' );
          cnt = imagesLength;
      } else {
          images.item( cnt ).classList.remove( 'is-show' );
          images.item( cnt - 1 ).classList.add( 'is-show' );
          cnt -= 1;
      }
  }

  next.addEventListener( 'click', showNext );
  prev.addEventListener( 'click', showPrev );

};

slideShow();