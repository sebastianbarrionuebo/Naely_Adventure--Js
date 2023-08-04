let controles = {
    arriba: false,
    abajo: false,
    izquierda: false,
    derecha: false,
    ///Controlar las teclas pulsadas
    actualizar: function() {
		if (teclado.teclaPulsada(controlesTeclado.arriba)) {
			controles.arriba = true;
			console.log("arriba");
		}
		if (teclado.teclaPulsada(controlesTeclado.abajo)) {
			controles.abajo = true;
			console.log("abajo");
		}
		if (teclado.teclaPulsada(controlesTeclado.izquierda)) {
			controles.izquierda = true;
			console.log("izquierda");
		}
		if (teclado.teclaPulsada(controlesTeclado.derecha)) {
			controles.derecha = true;
			console.log("derecha");
		}
    },
    ///Volver los botones a falsos
    reiniciar: function() {
        controles.arriba = false;
        controles.abajo = false;
        controles.izquierda = false;
        controles.derecha = false;
    }
}