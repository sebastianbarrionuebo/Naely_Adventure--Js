let teclado = {
    teclas: new Array(),
    iniciar: function() {
		document.onkeydown = teclado.guardarTecla;
		document.onkeyup = teclado.borrarTecla;
    },
    guardarTecla: function(e) {
        if(teclado.teclas.indexOf(e.key) == -1) { ///verificar si esta en el array
            teclado.teclas.push(e.key);
        }
    },
    borrarTecla: function(e) { 
        var posicion = teclado.teclas.indexOf( e.key ); ///verificar si esta en el array
        if (posicion !== -1) {
            teclado.teclas.splice( posicion, 1 ); ///Splice quita elementos de un array 
        }
    },
    teclaPulsada: function(codigoTecla) {
		return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
    }
};