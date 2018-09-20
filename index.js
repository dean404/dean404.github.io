let menu = document.getElementById("menu");
let burgerIcon = document.getElementById("burger");
let navbar = document.getElementById("navbar");
let splashPage = document.getElementById("splash");
let cards = document.getElementsByClassName("card");
let about = document.getElementById("aboutMe");
let distanceTop = navbar.offsetTop;

window.onscroll = (() => {
	stick();
	slowScroll();

	if (isInViewport(cards[0])) {
		for (let i = 0; i < 3; i++) {
			setTimeout(function () {
				cards[i].classList.add("appear");
			}, 150 * (i + 1));
		}
	}

	if (isInViewport(about)) {
		about.classList.add("appear");
	}
});

// correct the position of the navar if the user changes the size of the window
window.onresize = (() => {
	correctNavbar();
});

// correct the navbar position when the window size changes
function correctNavbar() {
	if (navbar.clientTop == 0 && window.pageYOffset < splash.offsetHeight) {
		navbar.classList.remove("navigationBarTop");
		navbar.classList.add("navigationBarBottom");
	} else {
		//do nothing
	}
	distanceTop = navbar.offsetTop;
}

// fix navbar to top or bottom of page 
function stick() {
	correctNavbar();
	if (window.pageYOffset >= distanceTop) {
		navbar.classList.remove("navigationBarBottom");
		navbar.classList.add("navigationBarTop");
	} else {
		navbar.classList.remove("navigationBarTop");
		navbar.classList.add("navigationBarBottom");
	}
}

// prevent element from being removed beofre animation ends
function awaitTransition() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("resolved");
		}, 200)
	});
}

//show menu
document.getElementById("burger").onclick = function () {
	menu.style.animation = "fadeIn 200ms ease-in-out";
	menu.classList.toggle("showHide");
	burgerIcon.style.display = "none";
};

// hide menu
document.getElementById("cross").onclick = async function () {
	menu.style.animation = "fadeOut 200ms ease-in-out";
	let remove = await awaitTransition();
	menu.classList.toggle("showHide");
	burgerIcon.style.display = "block";
};

// check if element is in viewport
function isInViewport(element) {
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || html.clientHeight) &&
		rect.right <= (window.innerWidth || html.clientWidth)
	);
}

// slow the scroll of te intro text
function slowScroll() {
	if (document.body.clientWidth >= 800) {
		let wScroll = window.pageYOffset;
		let introBox = document.getElementById("hero");
		introBox.style.transform = "translate(0px, " + wScroll / 3.5 + "%)";
	} else {
		//do nothing
	}
}

// change state of toggle switch

function changeTheme() {
	let btn = document.getElementById("switch");
	let toggle = document.getElementById("toggle");
	btn.classList.toggle("switchLight");
	toggle.classList.toggle("toggleLight");
}