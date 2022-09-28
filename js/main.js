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
const all_lang = ['en', 'ua'];

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
	if (!all_lang.includes(hash)) {
		location.href = window.location.pathname + '#en';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = lang_arr['title_mane'][hash];
	for (let key in lang_arr) {
		let elem = document.querySelectorAll('.lng-' + key);
		for (let i = 0; i < elem.length; i++) {
			if (elem) {
				elem[i].innerHTML = lang_arr[key][hash];
			}
		}
	}
}

change_language();