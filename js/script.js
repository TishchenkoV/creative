'use strict';

menu.onclick = function myFunction() {
	var x = document.getElementById('myNav');

	if (x.className === 'nav') {
		x.className += ' responsive';
	} else {
		x.className = 'nav';
	}
}

$('.pres__galery').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
