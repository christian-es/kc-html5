if (!Modernizr.inputtypes.date){
	$('<link/>', {
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css'
	}).appendTo('head');

	/*$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js')
		.done(function() {
			$('input[type="date"]').datepicker({
				dateFormat: 'yy-mm-dd'
			});
		});*/
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

form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	var apellidosRadioInput = {
		"apellidos_si": document.getElementById("apellidos_si"),
		"apellidos_no": document.getElementById("apellidos_no")
	};
	var emailInput = document.getElementById("email");

	var estasSeguroRadioInput = {
		"seguro_si": document.getElementById("seguro_si"),
		"seguro_no": document.getElementById("seguro_no")
	};

	var submitInput = document.getElementById("enviar");

	if (apellidosRadioInput.apellidos_si.checkValidity() == false) {
		alert("Selecciona si tienes apellidos");
		evt.preventDefault();
		return false;
	}

	if (email.checkValidity() == false) {
		alert("Escribe tu email");
		email.focus();
		evt.preventDefault();
		return false;
	}

	//submitInput.appendChild(loadingButton);
	evt.preventDefault();

	setTimeout(function(){
		//submitInput.removeChild(loadingButton);
		sendNotification("Formulario recibido", "...");
	}, 1000);


});









