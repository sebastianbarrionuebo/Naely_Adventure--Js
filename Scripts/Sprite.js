function Sprite(ruta, idSobreZero, posicionEnHoja) {
    let elementoRuta = ruta.split("/");  ///split separa una cadena de texto cuando llega al string ingresado.
    this.rutaHojaOrigen = "Imgs/" + elementoRuta[elementoRuta.length - 1];
    this.idSobreZero = idSobreZero;
    this.idSobreUno = idSobreZero + 1;
    this.posicionEnHoja = posicionEnHoja;
}

