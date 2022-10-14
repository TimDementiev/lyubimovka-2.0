
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