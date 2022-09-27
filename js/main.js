$(function () {
	$('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/gallery__arr-left.svg" alt="arrow_left"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/gallery__arr-right.svg" alt="arrow_right"></button>',
	});

	$('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

});


function color_changer(anything) {
	document.querySelector('.header__title').style.color = anything;
}

// for language 

const select = document.querySelector('select');
const all_lang = ['en', 'ru', 'ua'];

select.addEventListener('change', change_URL_language);

// перенаправить на url с указанием языка
function change_URL_language() {
	let lang = select.value;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function change_language() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!all_lang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = lang_arr['title_mane'][hash];
	// document.querySelector('.lng-chip').innerHTML = lang_arr['chip'][hash]; // для одного
	for (let key in lang_arr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = lang_arr[key][hash];
		}

	}
	// переробить
	const lng_night = document.querySelectorAll('.lng-popular__card-night');
    for (let i = 0; i < lng_night.length; i++) {
        lng_night[i].innerHTML = lang_arr['popular__card-night'][hash];
    }

	const lng_day = document.querySelectorAll('.lng-popular__card-day');
    for (let i = 0; i < lng_day.length; i++) {
        lng_day[i].innerHTML = lang_arr['popular__card-day'][hash];
    }

	const lng_price = document.querySelectorAll('.lng-popular__price');
    for (let i = 0; i < lng_price.length; i++) {
        lng_price[i].innerHTML = lang_arr['popular__price'][hash];
    }


}

change_language();