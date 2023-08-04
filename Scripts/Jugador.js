class Jugador{
    constructor(posicionInicialEnPx, pantallaJuego){
        this.pantallaJuego = pantallaJuego;
        this.ancho = 48;
        this.alto = 48;

        this.rutaHojaSprite = "Imgs/personajes48.png";
        this.personaje = 0; ///Seleccion de npc
        this.origenXSprite = 0;
        this.origenYSprite = this.alto * this.personaje; 

        this.velocidadMov = 6;

        this.velocidadX = 0;
        this.velocidadY = 0;

        this.subiendo = false;
        this.saltoBloqueado = false;
        this.saltoInicial = 0;
        this.frameAereosMax = 12;
        this.frameAereos = this.frameAereosMax;

        this.velociadadTerminal = 10;
        this.velocidadCaida = 0;

        //modo escalera
        this.enEscalera = false;

        this.enMovimiento = false;
        this.frameAnimacion = 0;

        /// centro de la pantalla: dimensiones.ancho / 2
        /// ancho del jugador: this.ancho / 2
        /// Con trunc elimno los decimales para poder centrarl al jugador
        let centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
        let centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);
        this.posicionCentrada = new Punto( centroX, centroY );
        /// Rectangulo para la deteccion de localizaciones
        this.rectangulosGenera = new Rectangulo(centroX,centroY, this.ancho, this.alto);

        ///Colisiones
        this.limiteArriba = new Rectangulo(centroX + this.ancho / 3, centroY, this.ancho / 3, 1);
        this.limiteAbajo = new Rectangulo(centroX + this.ancho / 3, centroY + this.alto - 1, this.ancho / 3, 1);
        this.limiteIzquierda = new Rectangulo(centroX, centroY + this.alto / 3, 1, this.alto / 3);
        this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY + this.alto / 3, 1, this.alto / 3);

        this.colisionArriba = false;
        this.colisionAbajo = false;
        this.colisionIzquierda = false;
        this.colisionDerecha = false;

        ///Convierto los signos
        posicionInicialEnPx.x *= -1;
        posicionInicialEnPx.y *= -1;
        this.posicionMapaEnPx = new Punto(this.posicionCentrada.x + posicionInicialEnPx.x, 
                                            this.posicionCentrada.y + posicionInicialEnPx.y);
        this.aplicarEstilosJugador();
    }

    aplicarEstilosJugador() {
        let idHTML = "Jugador";
        //document.getElementById(idHTML).style.backgroundColor = "white";
        document.getElementById(idHTML).style.position = "absolute";
        document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
        document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
        document.getElementById(idHTML).style.width = this.ancho + "px";
        document.getElementById(idHTML).style.height = this.alto + "px";
        ///para asegurar que el jugador este en sima del mapa pongo 10 debido a que no hay mas de 10 capas
        document.getElementById(idHTML).style.zIndex = "10";
        ///Se selecciona la hoja de sprites
        document.getElementById(idHTML).style.background = "url('" + this.rutaHojaSprite + "')";
        ///Se selecciona el personaje en la hora
        document.getElementById(idHTML).style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";
        document.getElementById(idHTML).style.backgroundClip = "border-box";
        document.getElementById(idHTML).style.outline = "1px solid transparent";
    }

    comprobarColisiones(mapa) { 
        this.colisionArriba = false;
        this.colisionAbajo = false;
        this.colisionIzquierda = false;
        this.colisionDerecha = false;

        if(!this.limiteArriba.interseccion(mapa.limiteMapa) ) {
            this.colisionArriba = true;
        }
        if(!this.limiteAbajo.interseccion(mapa.limiteMapa) ) {
            this.colisionAbajo = true;
        }
        if(!this.limiteIzquierda.interseccion(mapa.limiteMapa) ) {
            this.colisionIzquierda = true;
        }
        if(!this.limiteDerecha.interseccion(mapa.limiteMapa) ) {
            this.colisionDerecha = true;
        }

        for(let i=0; i< mapa.rectangulosColisiones.length; i++) {
            ///es Necesario un cambio debido a que la posicion del jugador es en el centro de la pantalla 
            ///y la posicion de las colisiones estan respecto del mapa del juego.
            let traduccionDeCoordenadas = new Rectangulo(  ///Este rectangulo se ubica respecto al jugador
                mapa.rectangulosColisiones[i].x + mapa.posicion.x,
                mapa.rectangulosColisiones[i].y + mapa.posicion.y,
                mapa.rectangulosColisiones[i].ancho,
                mapa.rectangulosColisiones[i].alto
            )

            if( this.limiteArriba.interseccion(traduccionDeCoordenadas)) {
                this.colisionArriba = true;
            }
            if( this.limiteAbajo.interseccion(traduccionDeCoordenadas)) {
                this.colisionAbajo = true;
            }
            if( this.limiteIzquierda.interseccion(traduccionDeCoordenadas) ) {
                this.colisionIzquierda = true;
            }
            if( this.limiteDerecha.interseccion(traduccionDeCoordenadas) ) {
                this.colisionDerecha = true;
            }
        }
    }

    moverEnMapaMundi() {
        this.velocidadX = 0;
        this.velocidadY = 0;
        ///las cuentas las realizo alrrevez para poder hacer que paresca que se mueva el pj
        if(!this.colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)){
            this.velocidadY += this.velocidadMov;
        }
        if(!this.colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)){
            this.velocidadY -= this.velocidadMov;
        }
        if(!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)){
            this.velocidadX += this.velocidadMov;
        }
        if(!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)){
            this.velocidadX -= this.velocidadMov;
        }
        //console.log(this.posicionCentrada.x + ", " + this.posicionCentrada.y);
        this.posicionMapaEnPx.x += this.velocidadX;
        this.posicionMapaEnPx.y += this.velocidadY;
    }

    moverEnNivel() {
        this.velocidadX = 0;
        this.velocidadY = 0;
        if(!this.enEscalera) {
            ///Reset valores
            if(this.saltoBloqueado && this.colisionAbajo && !teclado.teclaPulsada(controlesTeclado.saltar)) {
                this.saltoBloqueado = false;
                this.velocidadCaida = 0;
            }
            ///Saltando
            if(!this.saltoBloqueado && teclado.teclaPulsada(controlesTeclado.saltar)) {
                this.subiendo = true;
                this.saltoBloqueado = true;
            }
            ///Subiendo
            if (!this.colisionArriba && this.subiendo) {
                this.frameAereos--;
                this.velocidadY = 1 * this.velocidadMov + this.frameAereos;
                if(this.frameAereos <= 0) {
                    this.subiendo = false;
                    this.frameAereos = this.frameAereosMax;
                }
            }
            ///Choque con techo
            if (this.colisionArriba && this.subiendo) {
                this.velocidadY = -1 * this.velocidadMov;
            }
        
            if (!this.colisionAbajo && !this.subiendo) {
                this.velocidadY = Math.round(-this.velocidadCaida);
                if(this.velocidadCaida < this.velociadadTerminal) {
                    this.velocidadCaida += 0.3;
                }
            }
        } else {
            ///En escaleras
            if(!this.colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)){
                this.velocidadY += this.velocidadMov;
            }
            if(!this.colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)){
                this.velocidadY -= this.velocidadMov;
            }
        }
        
        if (!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) {
            this.velocidadX = 1 * this.velocidadMov;
        }
    
        if (!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) {
            this.velocidadX = -1 * this.velocidadMov;
        }


        this.posicionMapaEnPx.x += this.velocidadX;
        this.posicionMapaEnPx.y += this.velocidadY;
    }

    dirigir() {
        if(this.pantallaJuego == listadoPantallas.MAPAMUNDI) {
            if(this.velocidadY > 0) { ///Arriba
                this.origenXSprite = this.ancho * 6;
            }
            if(this.velocidadY < 0) { ///Abajo
                this.origenXSprite = 0;
            }
            if(this.velocidadX < 0  || this.velocidadY < 0 || this.velocidadY > 0) { ///Izquierda
                document.getElementById("Jugador").style.transform = "scaleX(1)";
            }
        }
        if(this.pantallaJuego == listadoPantallas.NIVEL) {
            if(this.velocidadX < 0) { ///Izquierda
                document.getElementById("Jugador").style.transform = "scaleX(1)";
            }
        }
        if(this.velocidadX < 0) { ///Izquierda
            this.origenXSprite = this.ancho * 3;
        }
        if(this.velocidadX > 0) { ///Derecha
            this.origenXSprite = this.ancho * 3;
        }

        if(this.velocidadX > 0) { ///Derecha
            document.getElementById("Jugador").style.transform = "scaleX(-1)";
        }
        document.getElementById("Jugador").style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";
    }

    animar() {
        if(this.velocidadX == 0 && this.velocidadY == 0){
            this.frameAnimacion = 0;
            return;
        }
        if(this.pantallaJuego == listadoPantallas.NIVEL) {
            if(this.saltoBloqueado) {
                return;
            }
        }

        this.frameAnimacion++;
        let paso1 = 10;
        let paso2 = 20;
        let origenXSpriteTemporal = this.origenXSprite;
        if(!this.enEscalera){
            if(this.frameAnimacion > 0 && this.frameAnimacion < paso1){
                origenXSpriteTemporal += this.ancho;
            }
            if(this.frameAnimacion >= paso1 && this.frameAnimacion < paso2){
                origenXSpriteTemporal += this.ancho *2;
            }
            if(this.frameAnimacion == paso2){
                this.frameAnimacion = 0;
            }
        }else{
            if(this.frameAnimacion > 0 && this.frameAnimacion < paso1){
                origenXSpriteTemporal += this.ancho*4;
            }
            if(this.frameAnimacion >= paso1 && this.frameAnimacion < paso2){
                origenXSpriteTemporal += this.ancho *5;
            }
            if(this.frameAnimacion == paso2){
                this.frameAnimacion = 0;
            }

        }

        document.getElementById("Jugador").style.backgroundPosition = "-" + origenXSpriteTemporal + "px -" + this.origenYSprite + "px";
    }

    actualizar(registroTemporal, mapa) {
        this.comprobarColisiones(mapa);
        if(this.pantallaJuego == listadoPantallas.MAPAMUNDI) {
            this.moverEnMapaMundi();
        }
        if(this.pantallaJuego == listadoPantallas.NIVEL) {
            this.moverEnNivel();
        }
        this.dirigir();
        this.animar();
    }
}
