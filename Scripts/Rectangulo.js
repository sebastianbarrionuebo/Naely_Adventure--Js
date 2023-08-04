class Rectangulo{
    constructor(x, y, ancho, alto, tipo){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.tipo = tipo;
        this.idHTML = tipo + ":x" + x + ",y" + y;  ///Ej: colision:x0,y0 (Ids unicos)
        this.html = '<div id="' + this.idHTML + '" ></div> ';
    }

    interseccion(rect){
        return (this.x < rect.x + rect.ancho && this.x + this.ancho > rect.x &&
                this.y < rect.y + rect.alto && this.y + this.alto > rect.y)
                ? true : false ;
    }


    aplicarEstilosTemporal(colorExadec) {
        if (!document.getElementById(this.idHTML)) {
            throw("El ID " + this.idHTML + " no existe en la hoja.");
        }
        document.getElementById(this.idHTML).style.backgroundColor = colorExadec;
        document.getElementById(this.idHTML).style.position = "absolute"; ///Se situe de forma absoluta en la pantalla.
        document.getElementById(this.idHTML).style.left = this.x + "px";
        document.getElementById(this.idHTML).style.top = this.y + "px";
        document.getElementById(this.idHTML).style.width = this.ancho + "px"; 
        document.getElementById(this.idHTML).style.height = this.alto + "px"; 
        document.getElementById(this.idHTML).style.zIndex = "5"; 
    }

    mover(x, y) {
        ///Mover cada tile - Trabaja con la gpu
        document.getElementById(this.idHTML).style.transform = 'translate3d(' + x + 'px,' + y + 'px, 0)';
    }
}
