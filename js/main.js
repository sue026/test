
/* 메인비주얼 스와이퍼 */
const mainSwiper = new Swiper('.main_swiper', {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  effect: 'fade',
  
  navigation: {
    nextEl: '.btn_next',
    prevEl: '.btn_prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

})

/* 교수진 안내 - 스와이퍼 */
const facultySwiper = new Swiper('.faculty_swiper', {
  // autoplay: true, //자동 실행
  autoplay: { 
    delay: 0, //다음 애니메이션 시작시간과의 간격
  },
  speed: 4000, //애니메이션 지속시간
  loop: true, //무한반복
  slidesPerView: 'auto', //화면에 보여질 슬라이드 갯수
  spaceBetween: 60, //슬라이드 사이 간격
});

/* 헤더 스타일 변경 */
// - scroll 클래스를 넣다 뺐다
const header = document.querySelector('header')
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')

gnbDep1.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    header.classList.add('scroll')
  })
  item.addEventListener('mouseout', function() {
    header.classList.remove('scroll')
  })
})

// gnbDep1.addEventListener('mouseover', function() {
//   header.classList.add('scroll')
// })
// gnbDep1.addEventListener('mouseout', function() {
//   header.classList.remove('scroll')
// })


/* 헤더 랭귀지 */
const langBtn = document.querySelector('.lang_wrap button')
const langList = document.querySelector('.lang_wrap ul')
const langIco = document.querySelector('.lang_wrap button span')

langBtn.addEventListener('click', function() {
  langList.classList.toggle('active')
  langIco.classList.toggle('active')
})

/* 헤더 검색 */
const searchBtn = document.querySelector('.search_wrap button')
const searchBox = document.querySelector('.search_box')

searchBox.style.display = 'none';
searchBtn.addEventListener('click', function() {
  if(searchBox.style.display === 'none') {
    searchBox.style.display = 'block'
  } else {
    searchBox.style.display = 'none'
  }
})

/* 전체메뉴 */
const allmenuOpenBtn = document.querySelector('.btn_allmenu_open')
const allmenuCloseBtn = document.querySelector('.btn_allmenu_close')
const allmenu = document.querySelector('.allmenu_popup')

allmenuOpenBtn.addEventListener('click', function() {
  allmenu.style.display = 'flex';
})
allmenuCloseBtn.addEventListener('click', function() {
  allmenu.style.display = 'none'
})


/* 푸터 패밀리사이트 */
const famBtn = document.querySelector('.family_site button')
const famList = document.querySelector('.family_site ul')

// famBtn.addEventListener('click', function() {})
famBtn.addEventListener('click', function() {
  if(famList.style.display === 'none') {
    famList.style.display = 'block'
  } else {
    famList.style.display = 'none'
  }
})
