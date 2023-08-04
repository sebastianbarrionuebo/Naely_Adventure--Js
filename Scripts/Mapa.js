class Mapa{
    constructor(objetoJson, pantallaJuego) {
        this.pantallaJuego = pantallaJuego;
        this.posicion = new Punto(0,0);
        this.posicionActualizada = new Punto(0,0); //Compara posicion actual para evitar renderizados innecesario.
    
        let rutaCompletaImagenFondo = objetoJson.tilesets[0].image;
        let rutaImagenFondo = rutaCompletaImagenFondo.split("/");
        let nombreImgFondo = rutaImagenFondo[rutaImagenFondo.length-1];
        let nombreMapa = nombreImgFondo.split(".");

        if(this.pantallaJuego == listadoPantallas.MAPAMUNDI ){
            this.rutaImagenMapa = "Imgs/" + nombreMapa[0] + ".mapa.png";
        }
        if(this.pantallaJuego == listadoPantallas.NIVEL ) {
            this.rutaImagenMapa = "Imgs/" + nombreMapa[0] + ".nivel.png";
        }

        this.anchoMedidoEnTiles = parseInt(objetoJson.width);
        this.altoMedidoEnTiles = parseInt(objetoJson.height);
        this.anchoDeTiles = parseInt(objetoJson.tilewidth);
        this.altoDeTiles = parseInt(objetoJson.tileheight);
    

        this.rectangulosColisiones = [];
        this.rectangulosLocalizaciones = [];
        this.rectangulosEscaleras = [];
        this.rectangulosInteres = [];
        this.iniciarCapas(objetoJson.layers);
    
        this.iniciarElementosMapa();

        this.limiteMapa = new Rectangulo(this.posicion.x, this.posicion.y, 
                                        this.anchoMedidoEnTiles * this.anchoDeTiles,
                                        this.altoMedidoEnTiles * this.altoDeTiles, "Colision");
        
    }

    iniciarCapas(datosCapas) {
        for(let i=0; i<datosCapas.length; i++) {
            if(datosCapas[i].name == "Colisiones") {
                for(let j=0; j<datosCapas[i].objects.length; j++) {
                    this.rectangulosColisiones.push( new Rectangulo( 
                        datosCapas[i].objects[j].x, datosCapas[i].objects[j].y,
                        datosCapas[i].objects[j].width, datosCapas[i].objects[j].height, "Colision"
                    ));
                }
            }
            if(datosCapas[i].name == "Localizaciones") {
                for(let j=0; j<datosCapas[i].objects.length; j++) {
                    this.rectangulosLocalizaciones.push( new Localizacion (new Rectangulo( 
                        datosCapas[i].objects[j].x, datosCapas[i].objects[j].y,
                        datosCapas[i].objects[j].width, datosCapas[i].objects[j].height, "Localizacion"
                        ), datosCapas[i].objects[j].name)
                    );
                }
            }
            if(datosCapas[i].name == "Escaleras") {
                for(let j=0; j<datosCapas[i].objects.length; j++) {
                    this.rectangulosEscaleras.push( new Rectangulo( 
                        datosCapas[i].objects[j].x, datosCapas[i].objects[j].y,
                        datosCapas[i].objects[j].width, datosCapas[i].objects[j].height, "Escalera"
                    ));
                }
            }
            if(datosCapas[i].name == "Interes") {
                for(let j=0; j<datosCapas[i].objects.length; j++) {
                    this.rectangulosInteres.push( new Localizacion (new Rectangulo( 
                        datosCapas[i].objects[j].x, datosCapas[i].objects[j].y,
                        datosCapas[i].objects[j].width, datosCapas[i].objects[j].height, "Intereses"
                        ), datosCapas[i].objects[j].name)
                    );
                }
            }
        }
    }

    iniciarElementosMapa() {
        let idHTML = "Mapa";
        document.getElementById(idHTML).style.position = "absolute";
        document.getElementById(idHTML).style.width = (this.anchoMedidoEnTiles*this.anchoDeTiles) + "px";
        document.getElementById(idHTML).style.height = (this.altoMedidoEnTiles*this.altoDeTiles) + "px";
        document.getElementById(idHTML).style.background = "url('" + this.rutaImagenMapa + "')";
        document.getElementById(idHTML).style.backgroundClip = "border-box";
        document.getElementById(idHTML).style.outline = "1px solid transparent";

        ///Capa de colisiones
        let htmlColisiones = "";
        for (let i=0; i<this.rectangulosColisiones.length ; i++ ) {
            htmlColisiones += this.rectangulosColisiones[i].html;
        }
        document.getElementById("Colisiones").innerHTML = htmlColisiones;

        ///Capa de localizaciones
        let htmlLocalizaciones = "";
        for (let i=0; i<this.rectangulosLocalizaciones.length ; i++ ) {
            htmlLocalizaciones += this.rectangulosLocalizaciones[i].rectangulo.html;
        }
        document.getElementById("Localizaciones").innerHTML = htmlLocalizaciones;

        ///Capa de Escaleras
        let htmlEscaleras = "";
        for (let i=0; i<this.rectangulosEscaleras.length ; i++ ) {
            htmlEscaleras += this.rectangulosEscaleras[i].html;
        }
        document.getElementById("Escaleras").innerHTML = htmlEscaleras;

        ///Capa de Intereses
        let htmlIntereses = "";
        for (let i=0; i<this.rectangulosInteres.length ; i++ ) {
            htmlIntereses += this.rectangulosInteres[i].rectangulo.html;
        }
        document.getElementById("Intereses").innerHTML = htmlIntereses;
        
        ///Mostrando objetos del json
        /////////////////////////////////////////////////////////////
        if(debug.debugging){
            for (let i=0; i<this.rectangulosColisiones.length ; i++ ) {
                this.rectangulosColisiones[i].aplicarEstilosTemporal("#ff0000");
            }
            for (let i=0; i<this.rectangulosLocalizaciones.length ; i++ ) {
                this.rectangulosLocalizaciones[i].rectangulo.aplicarEstilosTemporal("#00ff00");
            }
            for (let i=0; i<this.rectangulosEscaleras.length ; i++ ) {
                this.rectangulosEscaleras[i].aplicarEstilosTemporal("#0000ff");
            }
            for (let i=0; i<this.rectangulosInteres.length ; i++ ) {
                this.rectangulosInteres[i].rectangulo.aplicarEstilosTemporal("#ffff00");
            }
        }
        /////////////////////////////////////////////////////////////
        
        ///getElementsByTagName devuelve un array debido a esto el [0]
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }

    actualizar(registroTemporal, posicionJugadorPx) {
        this.posicion.x = posicionJugadorPx.x;
        this.posicion.y = posicionJugadorPx.y;

        this.limiteMapa.x = this.posicion.x;
        this.limiteMapa.y = this.posicion.y;
    }

    dibujar() {
        document.getElementById("Mapa").style.transform = 'translate3d(' + this.posicion.x + 'px, ' + this.posicion.y + 'px, 0)';
        
        if(debug.debugging){
            for (let c = 0; c < this.rectangulosColisiones.length ; c++) {
                this.rectangulosColisiones[c].mover(this.posicion.x, this.posicion.y);
            }
            for (let c = 0; c < this.rectangulosLocalizaciones.length ; c++) {
                this.rectangulosLocalizaciones[c].rectangulo.mover(this.posicion.x, this.posicion.y);
            }
            for (let c = 0; c < this.rectangulosEscaleras.length ; c++) {
                this.rectangulosEscaleras[c].mover(this.posicion.x, this.posicion.y);
            }
            for (let c = 0; c < this.rectangulosInteres.length ; c++) {
                this.rectangulosInteres[c].rectangulo.mover(this.posicion.x, this.posicion.y);
            }
        }
    }
}