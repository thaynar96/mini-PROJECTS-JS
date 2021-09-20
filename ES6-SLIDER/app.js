import people from './data.js';
const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

container.innerHTML = people
	.map((person, slideIndex) => {
		const { img, name, job, text } = person;
		let position = 'next';
		if (slideIndex === 0) {
			position = 'active';
		}
		if (slideIndex === people.length - 1) {
			position = 'last';
		}
		return `	<article class="slide ${position}">
					<img
						src="${img}"
						class="img"
						alt="${name}"
					/>
					<h4>${name}</h4>
					<p class="title">${job}</p>
					<p class="text">
						${text}
					</p>
          <div class="quote-icon"><div class="fas fa-quote-right"></i></div>
          </div>
				</article>`;
	})
	.join('');

const startSlider = () => {
	const active = document.querySelector('.active');
	const last = document.querySelector('.last');
	let next = active.nextElementSibling;

	if (!next) {
		next = container.firstElementChild;
	}

	active.classList.remove(['active']);
	last.classList.remove(['last']);
	next.classList.remove(['next']);

	active.classList.add('last');
	last.classList.add('next');
	next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
	startSlider();
});

prevBtn.addEventListener('click', () => {
	startSlider();
});
