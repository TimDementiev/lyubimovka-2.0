//Бургерное меню
const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu-body');
    iconMenu.addEventListener('click', function(){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })  
}
const imgArrayChange = [
	'./image/gallery-grid_pic_1.jpg',
	'./image/gallery-grid_pic_2.jpg',
	'./image/gallery-grid_pic_3.jpg',
	'./image/gallery-grid_pic_4.jpg',
	'./image/gallery-grid_pic_5.jpg',
	'./image/gallery-grid_pic_6.jpg',
	'./image/gallery-grid_pic_7.jpg',
	'./image/gallery-grid_pic_8.jpg',
	'./image/gallery-grid_pic_9.jpg',
]

const twoVideo = new Swiper('.video__slider', {
  slideClass: 'video__slide',
  wrapperClass: 'video__slider-wrapper',
  setWrapperSize: true,
  slidesPerView: 1.4,
  spaceBetween: 30,
  allowTouchMove: true,
  setWrapperSize: true,
  grabCursor: true,
  navigation: {
    nextEl: '.video__button-next',
    prevEl: '.video__button-prev',
  },
  breakpoints: {
    625: {
      slidesPerView: 2,
      spaceBetween: 59
    },
  }
});

const threeVideo = new Swiper('.video__slider_type_triple', {
  slideClass: 'video__slide',
  wrapperClass: 'video__slider-wrapper_type_triple',
  setWrapperSize: true,
  slidesPerView: 1.4,
  spaceBetween: 30,
  allowTouchMove: true,
  setWrapperSize: true,
  grabCursor: true,
  breakpoints: {
    625: {
      slidesPerView: 2,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 59
    }
  }
});

