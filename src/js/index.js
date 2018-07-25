import videos from './videos';

const theme = document.querySelector('.theme');
const title = document.getElementById('jv-title');
const arrow1 = document.querySelector('.icon-arrow');
const arrow2 = document.querySelector('.icon-arrow--down');
const verticalNav = document.querySelector('.js-vertical-nav');
const random = document.getElementById('random');
const clock = document.getElementById('clock');
const mobileClock = document.getElementById('clock--mobile');

let arrow1Rotate = false;
let arrow2Rotate = false;
let idx;
let prevItem;
let prevView;

const makeNavListeners = () => {
	let items = Array.from(document.querySelector('.js-vertical-nav')
		.querySelectorAll('.nav-link'));

	items.forEach(li => {
		
		let id = li.id || null;
		li.addEventListener('click', () => {
			li.classList.add('nav-link--active');
			if (prevItem && prevItem !== li) prevItem.classList.remove('nav-link--active');
			prevItem = li;

			let view = document.getElementById(`a-${id}`);	
			view.classList.add('view-option--show');
			if (prevView && prevView !== view) prevView.classList.remove('view-option--show');
			prevView = view;
		})
	})
};

const makeArrowListeners = () => {
	arrow1.addEventListener('click', (event) => {
		let action = !arrow1Rotate ? 'add' : 'remove';
		let horizontalNav = document.querySelector('.js-horizontal-nav');
		event.target.classList[action]('icon-arrow--rotate');
		horizontalNav.classList[action]('nav-main__list--show');
		if (!arrow1Rotate) {
			let video = getRandomVideo();
			displayVideo(video);
			random.classList.add('view-option--show');
			if (prevView && prevView !== random) prevView.classList.remove('view-option--show');
			prevView = random;
		} else {
			displayVideo('');
			random.classList.remove('view-option--show');
		}

		arrow1Rotate = !arrow1Rotate;
	});

	arrow2.addEventListener('click', (event) => {
		console.log('prevView: ', prevView);
		random.setAttribute('style', 'transform: translateY(0)');
		let action = !arrow2Rotate ? 'add' : 'remove';
		event.target.classList[action]('icon-arrow--down--rotate');
		verticalNav.classList[action]('nav--show');
		if (!arrow2Rotate)
			prevView && prevView.classList.add('view-option--show');
		else if (arrow2Rotate) 
			prevView && prevView.classList.remove('view-option--show');
		arrow2Rotate = !arrow2Rotate;
	});
};


const makeTitleListener = () => {
	title.addEventListener('click', () => {
		updateTheme();
		window.scrollTo(0, -30);
	})
};

let played = false;
const makeClockListener = () => {
	clock.addEventListener('click', () => {
		if (!played) played = true;
		let video = getRandomVideo();
		let src = played ? `${video}?autoplay=1` : video;
		displayVideo(src);
	})

	mobileClock.addEventListener('click', () => {
		console.log('prevView: ', prevView);
		if (arrow2Rotate) random.setAttribute('style', 'transform: translateY(-220px)');
		if (prevView && prevView !== random) prevView.classList.remove('view-option--show');
		if (!played) played = true;
		let video = getRandomVideo();
		let src = played ? `${video}?autoplay=1` : video;
		displayVideo(src);
		random.classList.add('view-option--show');
		prevView = random;
		console.log('prevView: ', prevView);
	})
};

let videosCopy = [...videos];
let num = 11;
const getRandomVideo = () => {
	if (num === 0) {
		num = 11;
		videosCopy = [...videos];
	}
	let i = Math.floor(Math.random() * num);
	let video = videosCopy[i];
	videosCopy.splice(i, 1);
	num--
	return video;
};

const displayVideo = (video) => {
	random.firstElementChild.src = video;
}

const themes = ['off', 'pink', 'purple', 'image', 'red',  'green', 'blue'];
const updateTheme = () => {
	let prevTheme = themes[idx];
	if (idx < 6) idx++
	else idx = 1;
	let nextTheme = themes[idx];
	theme.classList.remove(`theme--${prevTheme}`);
	theme.classList.add(`theme--${nextTheme}`);
};

const init = () => {
	idx = Math.floor(Math.random() * 6);
	theme.classList.remove(`theme--off`);
	updateTheme();
	makeArrowListeners();
	makeNavListeners();
	makeTitleListener();
	makeClockListener();
};

init();