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

const makeArrowListeners = () => {
	let arrow1 = document.querySelector('.icon-arrow');
	arrow1.addEventListener('click', (event) => {
		console.log('target: ', event.target);
		event.target.classList.add('icon-arrow--rotate');
	})
}


const init = () => {
	makeAnchorListeners();
	makeArrowListeners();
};

init();