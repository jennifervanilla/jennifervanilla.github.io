const makeAnchorListeners = () => {
	let items = Array.from(document.querySelector('.nav')
		.firstElementChild
		.querySelectorAll('.nav-link'));
	items.forEach(li => {
		li.addEventListener('click', () => {
			let target = document.getElementById(`a-${li.id}`);	
			// target.scrollIntoView({behavior: "smooth", block: "start"});
		})
	})
};

let arrow1Rotate = false;
const makeArrowListeners = () => {
	let arrow1 = document.querySelector('.icon-arrow');
	arrow1.addEventListener('click', (event) => {
		let action = !arrow1Rotate ? 'add' : 'remove'

		event.target.classList[action]('icon-arrow--rotate');
		arrow1Rotate = !arrow1Rotate
	})
}


const init = () => {
	makeAnchorListeners();
	makeArrowListeners();
};

init();