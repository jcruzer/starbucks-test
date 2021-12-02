const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지 숨기기
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:0
    });
  }
  else{   // window.scrollY <= 500
    // 뱃지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 클래스에 fade-in 들어간거 모두 찾아서 딜레이로 애니메이션효과
const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    opacity:1,
    delay:(index + 1) * .7  // 딜레이로 0.7초 1.4초 2.1초 2.7초뒤 순차적 등장
  });
});

new Swiper('.notice-line .swiper.container', {
  direction:'vertical',
  autoplay:true,
  loop:true
});

new Swiper('.promotion .swiper.container', {
  direction:'horizontal',
  slidesPerView:3,
  spaceBetween: 10,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination',
    clickable:true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper.container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
  }

});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(
    selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement:spyEl,
    tiggerHook: .8,
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();