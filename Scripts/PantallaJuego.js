class PantallaJuego{
    constructor(idPantalla, rutaMapaJson, xInicial, yInicial) {
        let that = this; ///Necesario para poder extrar los datos de la instancia dentro de la funcion de cargarArchivo
        this.mapaListo = false;
        this.mapa = null;
        this.jugador = null;
        ajax.cargarArchivo(rutaMapaJson, function(objetoJson) {
            that.mapa = new Mapa(objetoJson, idPantalla);
            that.mapaListo = true;
            that.jugador = new Jugador(new Punto(xInicial, yInicial), idPantalla);
            console.log("Ajax finalizado");
        });
    }
 
    actualizar(registroTemporal){
        ///Controlando situacion
        if(!this.mapaListo || this.mapa == null || this.jugador == null) {
            return;
        }
        this.jugador.actualizar(registroTemporal,this.mapa);
        this.mapa.actualizar(registroTemporal, this.jugador.posicionMapaEnPx);

        ///Verificador de localizaciones
        let localizacionAtravezada = false;
        for (let i=0; i<this.mapa.rectangulosLocalizaciones.length ; i++){
            let rectActual = this.mapa.rectangulosLocalizaciones[i].rectangulo;
            let nombre = this.mapa.rectangulosLocalizaciones[i].nombre;
            let entradaLocalizacion = null;
            let rectTemporal = new Rectangulo( rectActual.x + this.mapa.posicion.x,
                                                rectActual.y + this.mapa.posicion.y,
                                                rectActual.ancho, rectActual.alto);
            if(rectTemporal.interseccion(this.jugador.rectangulosGenera)){
                localizacionAtravezada = true;
                entradaLocalizacion = listadoLocalizaciones.obtenerLocalizacion(nombre);
                if(!popup.visible){
                    popup.mostrar(dimensiones.ancho/2 - 150, dimensiones.alto/2 -100,
                                        300, nombre);
                }
                if(teclado.teclaPulsada(controlesTeclado.interactuar)) {
                    controladorPantallas.cambiarPantalla(entradaLocalizacion.tipo,entradaLocalizacion);
                }
            }
            if(!localizacionAtravezada && popup.visible){
                popup.ocultar();
            }
        }

        ///Verificador de Intereses
        for (let i=0; i<this.mapa.rectangulosInteres.length ; i++){
            let rectActual = this.mapa.rectangulosInteres[i].rectangulo;
            let nombre = this.mapa.rectangulosInteres[i].nombre;
            let interes = null;
            let rectTemporal = new Rectangulo( rectActual.x + this.mapa.posicion.x,
                                                rectActual.y + this.mapa.posicion.y,
                                                rectActual.ancho, rectActual.alto);
            if(rectTemporal.interseccion(this.jugador.rectangulosGenera)){
                localizacionAtravezada = true;
                interes = listadoDialogos.obtenerDialogo(nombre);
                if(!popup.visible){
                    popup.mostrar(dimensiones.ancho/2 - 150, dimensiones.alto/2 -130,
                                        300, interes);
                }
                if(teclado.teclaPulsada(controlesTeclado.entrarLocalizacion)) {
                    controladorPantallas.cambiarPantalla(interes.tipo,interes);
                }
            }
            if(!localizacionAtravezada && popup.visible){
                popup.ocultar();
            }
        }

        ///Verificador de Escaleras
        let escalerasAtravezada = false;
        for (let i=0; i<this.mapa.rectangulosEscaleras.length ; i++){
            let rectActual = this.mapa.rectangulosEscaleras[i];
            let rectTemporal = new Rectangulo( rectActual.x + this.mapa.posicion.x,
                                                rectActual.y + this.mapa.posicion.y,
                                                rectActual.ancho, rectActual.alto);
            if(rectTemporal.interseccion(this.jugador.rectangulosGenera)){
                escalerasAtravezada = true;
                this.jugador.enEscalera = true;
            }else{
                this.jugador.enEscalera = false;
            }
        }
    }
    
    dibujar(){
        if(!this.mapaListo){
            return;
        }
        this.mapa.dibujar();
    }
}
