let ajax = {
    cargarArchivo: function(ruta, manipularDatos) {
		var peticion = new XMLHttpRequest();

		peticion.onreadystatechange = function() {
            ///0 - UNSENT - 
            ///1 - OPENED - Conetado al servidor
            ///2 - HEADERS_RECIVED - peticion recibida
            ///3 - LOADING - procesando peticion
            ///4 - DONE - Peticion finalizada, respuesta preparada 
			if (peticion.readyState == XMLHttpRequest.DONE) {
				if (peticion.status == 200) {
					manipularDatos(JSON.parse(peticion.responseText));
				} else if (peticion.status == 400) {
					console.log("error");
				} else {
					console.log("resultado inesperado");
				}
			}
		};

		peticion.open("GET", ruta, true);
		peticion.send();
	}
}
