if (!Modernizr.inputtypes.date){
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css'
	}).appendTo('head');
}

if (!Modernizr.inputtypes.number) {
	$.getScript('js/number-polyfill.js');
}

var form = document.getElementById("form-contact");

var conocisteInput = document.getElementById("conociste");
var comoConocisteInput = document.getElementById("como-conoces");

conocisteInput.addEventListener('keyup', function(evt) {
	if (this.value > "Otro") {
		comoConocisteInput.style.display = 'block';
	} else {
		comoConocisteInput.style.display = 'none';
	}
});