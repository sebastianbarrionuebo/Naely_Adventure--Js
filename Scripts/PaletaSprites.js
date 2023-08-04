class PaletaSprites{
    constructor(datosSprites) {
        this.rutaImagen = datosSprites.image;
    
        this.anchoImagen = parseInt(datosSprites.imagewidth);
        this.altoImagen = parseInt(datosSprites.imageheight);
    
        this.anchoSprites = parseInt(datosSprites.tilewidth);
        this.altoSprites = parseInt(datosSprites.tileheight);
    
        this.primerSpriteSobreUno = parseInt(datosSprites.firstgid); /// Recordar que comienza por 1
    
        this.anchoImagenMedidoenSprites = this.anchoImagen / this.anchoSprites;
        this.altoImagenMedidoenSprites = this.altoImagen / this.altoSprites;
        this.totalSprites = this.anchoImagenMedidoenSprites * this.anchoImagenMedidoenSprites;
        
        this.sprites = [];
    
        for(let s=0; s < this.totalSprites; s++) {
            let idActualSobreZero = this.primerSpriteSobreUno - 1 + s;
            this.sprites.push(new Sprite(this.rutaImagen, idActualSobreZero, this.obtenerPoscionDesdeIdSprite(idActualSobreZero)));
        }
    }

    obtenerPoscionDesdeIdSprite(idSpriteSobreZero) {
        let y = Math.floor(idSpriteSobreZero / this.anchoImagenMedidoenSprites);
        let x = idSpriteSobreZero % this.anchoImagenMedidoenSprites;
        return new Punto(x * this.anchoSprites, y * this.altoSprites );
    }

}