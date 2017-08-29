function scroll() {
    var x = document.getElementById("navbar").clientHeight;
    var y = document.getElementById("splash").clientHeight;
    var z = y - x;
    window.scrollBy(0, z);
}

var title = document.querySelector("#title");
var subText = document.querySelector("#subText");

title.addEventListener("animationend",function(e){
    title.style.border = 0;
    subText.style.visibility = "visible";  
},false);

