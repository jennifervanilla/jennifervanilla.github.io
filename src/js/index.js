const theme = document.querySelector('.theme');
console.log('theme: ', theme);
const title = document.getElementById('jv-title');
const arrow1 = document.querySelector('.icon-arrow');
const arrow2 = document.querySelector('.icon-arrow--down');
const verticalNav = document.querySelector('.js-vertical-nav');
const video = document.querySelector('.video');

let arrow1Rotate = false;
let arrow2Rotate = false;
let idx;

const makeNavListeners = () => {
	let items = Array.from(document.querySelector('.nav-main__list')
		.querySelectorAll('.nav-main__list-item'));

	items.forEach(li => {
		let id = li.id || null;
		li.addEventListener('click', () => {
			// updateTheme();
			if (!arrow2Rotate) {
				arrow2.classList.add('icon-arrow--down--rotate');
				verticalNav.classList.add('nav--show');
				arrow2Rotate = true;
			}

			let target = document.getElementById(`a-${id}`);	
			console.log('scrollY: ', window.scrollY)
			target.scrollIntoView({behavior: "smooth"});
			console.log('scrollY: ', window.scrollY)
		})
	})
};

const makeArrowListeners = () => {
	arrow1.addEventListener('click', (event) => {
		// updateTheme();
		let action = !arrow1Rotate ? 'add' : 'remove';
		let horizontalNav = document.querySelector('.js-horizontal-nav');
		event.target.classList[action]('icon-arrow--rotate');
		horizontalNav.classList[action]('nav-main__list--show');
		video.classList[action]('video--show');
		arrow1Rotate = !arrow1Rotate;
		
	});

	arrow2.addEventListener('click', (event) => {
		// updateTheme();
		let action = !arrow2Rotate ? 'add' : 'remove';
		event.target.classList[action]('icon-arrow--down--rotate');
		verticalNav.classList[action]('nav--show');
		arrow2Rotate = !arrow2Rotate;
		// video.style.opacity = 1;
	});
};


const makeTitleListener = () => {
	title.addEventListener('click', () => {
		updateTheme();
		window.scrollTo(0, -30);
		console.log(window.scrollY);
	})
};

const themes = ['off', 'pink', 'purple', 'image', 'red',  'green', 'blue'];
const updateTheme = () => {
	let prevTheme = themes[idx];
	if (idx < 6) idx++
	else idx = 1;
	let nextTheme = themes[idx];
	theme.classList.remove(`theme--${prevTheme}`);
	theme.classList.add(`theme--${nextTheme}`);
}

const init = () => {
	idx = Math.floor(Math.random() * 6);
	theme.classList.remove(`theme--off`);
	updateTheme();
	makeNavListeners();
	makeArrowListeners();
	makeTitleListener();
};

init();