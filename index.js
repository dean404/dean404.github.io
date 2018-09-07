let menu = document.getElementById("menu");
let burgerIcon = document.getElementById("burger");
let navbar = document.getElementById("navbar");
let splashPage = document.getElementById("splash");
let distanceTop = navbar.offsetTop;

window.onscroll = (() => {
	stick();
	slowScroll();
});

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

// fix navbar to top of page or fix i to the bottom
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

// slow the scroll of te intro text
function slowScroll() {
	if (document.body.clientWidth >= 800) {
		let wScroll = window.pageYOffset;
		let introBox = document.getElementById("intro");
		introBox.style.transform = "translate(0px, " + wScroll/2.3 + "%)";	
	} else {
		//do nothing
	}
}