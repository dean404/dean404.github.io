let lastScrollPos = 0;
let ticking = false;
let navbar = document.querySelector('nav');
let distanceTop = navbar.offsetTop;

function stick() {
	if (window.pageYOffset >= distanceTop) {
		navbar.classList.remove("navigationBarBottom");
		navbar.classList.add("navigationBarTop");
	} else {
		navbar.classList.remove("navigationBarTop");
		navbar.classList.add("navigationBarBottom");
	}
}