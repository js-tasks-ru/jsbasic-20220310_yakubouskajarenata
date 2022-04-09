function initCarousel() {
	let currentSlideNumber = 0;
	let amountSlides = 4;
	let containerElem = document.querySelector('[data-carousel-holder]');

	let carouselInnerElement = containerElem.querySelector('.carousel__inner')
	let carouselArrowLeft = containerElem.querySelector('.carousel__arrow_left');
	let carouselArrowRight = containerElem.querySelector('.carousel__arrow_right');

	update();
	containerElem.onclick = ({ target }) => {
		if (target.closest('.carousel__arrow_right')) {
			nextSlide();
		}
		if (target.closest('.carousel__arrow_left')) {
			prevSlide();
		}
	};
	function nextSlide() {
		currentSlideNumber++;
		/*if (currentSlideNumber == amountSlides - 1) {
			carouselArrowRight.style.display = 'none';
		} else {
			carouselArrowRight.style.display = '';
		}*/
		update();

	}
	function prevSlide() {
		currentSlideNumber--;
		/*if (currentSlideNumber == 0) {
			carouselArrowLeft.style.display = 'none';
		} else {
			carouselArrowLeft.style.display = '';
		}*/
		update();
	}
	function update() {
		let offset = -carouselInnerElement.offsetWidth * currentSlideNumber;
		carouselInnerElement.style.transform = `translateX(${offset}px)`;

		if (currentSlideNumber == amountSlides - 1) {
			carouselArrowRight.style.display = 'none';
		} else {
			carouselArrowRight.style.display = '';
		}

		if (currentSlideNumber == 0) {
			carouselArrowLeft.style.display = 'none';
		} else {
			carouselArrowLeft.style.display = '';
		}
	}
	// ваш код...
}
