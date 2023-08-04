let controladorPantallas = {
    pantallaActual: null,

    iniciar: function() {
        controladorPantallas.cambiarPantalla(listadoPantallas.PANTALLA_INTRO);
    },

    cambiarPantalla: function(nuevaPantalla, entradaLocalizacion) {
        switch(nuevaPantalla){
            case listadoPantallas.PANTALLA_INTRO:
                console.log("intro");
                controladorPantallas.pantallaActual = new PantallaDeInicio();
            break;

            case listadoPantallas.MENU_OPCIONES:
                controladorPantallas.pantallaActual = new PantallaOpciones();
            break;

            case listadoPantallas.MAPAMUNDI:
                controladorPantallas.pantallaActual = new PantallaJuego(listadoPantallas.MAPAMUNDI,entradaLocalizacion.rutaMapa,
                                                    entradaLocalizacion.coordenadaXInicial,entradaLocalizacion.coordenadaYInicial);
            break;
            
            case listadoPantallas.NIVEL:
                controladorPantallas.pantallaActual = new PantallaJuego(listadoPantallas.NIVEL,entradaLocalizacion.rutaMapa,
                                                    entradaLocalizacion.coordenadaXInicial,entradaLocalizacion.coordenadaYInicial);
            break;

            default:
                console.log("Error en el switch de pantallas.")
            break;
        }
    },

    actualizar: function(registroTemporal) {
        controladorPantallas.pantallaActual.actualizar(registroTemporal);
    },
    
    dibujar: function() {
        controladorPantallas.pantallaActual.dibujar();
    }

}