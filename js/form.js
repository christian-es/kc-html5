/*if (!Modernizr.inputtypes.date){
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css'
	}).appendTo('head');
}

if (!Modernizr.inputtypes.number) {
	$.getScript('number-polyfill.js');
}*/

var form = document.getElementById("form-contact");

var message_error = {
	"nombre": "Ingrese su nombre",
	"email": "Ingrese su email",
	"num-contacto": "Ingrese su número de contacto"
};

form.addEventListener("submit", function (evt) {
	var input_nombre = document.getElementById("nombre");
	validate_input(input_nombre, message_error["nombre"], evt);

	var input_email = document.getElementById("email");
	validate_input(input_email, message_error["email"], evt);

	var input_contacto = document.getElementById("num-contacto");
	validate_input(input_contacto, message_error["num-contacto"], evt);
	validate_length(input_contacto.value, 9, true, evt);

	var input_comentario = document.getElementById("comentario");
	validate_input(input_comentario, message_error["comentario"], evt);
	validate_length(input_comentario.value, 150, false, evt);
});


function validate_input(input, message_error, evt){
	if (!input.checkValidity()){
		alert(message_error);
		input.focus();
		evt.preventDefault();
	}
}

function validate_length(input, length, cont_char, evt) {
	if (cont_char){
		if(input.length != length) {
			alert("Longitud de caracteres incorrecta!");
			input.focus();
			evt.preventDefault();
		}
	} else {
		var cont_words = input.split(" ");
		if(cont_words.length > length) {
			alert("Longitud de palabras incorrecta!");
			input.focus();
			evt.preventDefault();
		}
	}
}

/*var conocisteInput = document.getElementById("conociste");
var comoConocisteInput = document.getElementById("como-conoces");

conocisteInput.onchange = function(evt) {
	console.log( this.value);
	if (this.value == "otro") {
		comoConocisteInput.style.display = 'block';
	} else {
		comoConocisteInput.style.display = 'none';
	}
};

*/

