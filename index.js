let menu = document.getElementById("menu");
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

// prevent element from being removed beofre animation ends
function awaitTransition() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 200)
  });
}

//show menu
document.getElementById("first").onclick = function() {
  menu.style.animation = "fadeIn 200ms ease-in-out";
  menu.classList.toggle("showHide");
};

// hide menu
document.getElementById("cross").onclick = async function() {
  menu.style.animation = "fadeOut 200ms ease-in-out";
  let remove = await awaitTransition();
  menu.classList.toggle("showHide");
};