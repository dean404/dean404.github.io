function scroll() {
    var y = document.getElementById("splash").clientHeight;
    window.scrollBy(0, y);
}

var title = document.querySelector("#title");

var subText = document.querySelector("#subText");

title.addEventListener("animationend",function(e){
    title.style.border = 0;
    subText.style.visibility = "visible";
},false);