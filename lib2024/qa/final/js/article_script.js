// This function is called to close a menu by setting the display property of the menu wrapper to 'none'
function closeMenu() {
    document.querySelector('.menu-wrapper').style.display = 'none';
}

// This function implements a debounce function, which limits the rate at which a function is called
// by delaying its execution until a certain amount of time has passed without the function being called again.
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
// This code selects all the img elements on the page and stores them in the variable 'sliderImages'
let sliderImages = document.querySelectorAll("img");
// This function is an event handler that is called when the 'scroll' event is triggered on the window.
// It checks the position of the images on the page and adds or removes a CSS class based on whether
// the images are visible in the viewport or not.
function checkSide(e) {
	sliderImages.forEach((sliderImage) => {
		// half way through the image
		const slideInAt =
			window.scrollY + window.innerHeight - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add("active");
		} else {
			sliderImage.classList.remove("active");
		}
	});
}
window.addEventListener("scroll", checkSide);

