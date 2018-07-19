const makeAnchorListeners = () => {
	let items = Array.from(document.querySelector('.nav')
		.firstElementChild
		.querySelectorAll('.nav-link'));
	items.forEach(li => {
		li.addEventListener('click', () => {
			let target = document.getElementById(`a-${li.id}`);
			console.log('target: ', target);
			
			// target.scrollIntoView({behavior: "smooth", block: "start"});
		})
	})
}


const init = () => {
	makeAnchorListeners();
};

init();