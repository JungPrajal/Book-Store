


// Scroll Btn
var scrollTarget = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunc()};
function scrollFunc() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    		scrollTarget.style.display = "block";
  	} else {
    		scrollTarget.style.display = "none";
  	}
}

function scroll2Top() {
  	document.body.scrollTop = 0; //For Safari
  	document.documentElement.scrollTop = 0; //For Chrome
}