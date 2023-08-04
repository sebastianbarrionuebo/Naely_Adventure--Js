let controlesTeclado = {
    arriba: 'w',
    abajo: 's',
    izquierda: 'a',
    derecha: 'd',
    interactuar: 'p',
    saltar: ' ', ///Barra espaciadora
    obtenerTecla(nombre){
        switch(nombre){
            case "arriba":
                return this.arriba;
            break;
            case "abajo":
                return this.abajo;
            break;
            case "izquierda":
                return this.izquierda;
            break;
            case "derecha":
                return this.derecha;
            break;
            case "saltar":
                if(this.saltar == ' '){
                    return "ESPACIO";
                }
                return this.saltar;
            break;
            case "interactuar":
                return this.interactuar;
            break;
        }
    },
    modificarTecla(nombre,tecla){
        switch(nombre){
            case "arriba":
                this.arriba = tecla;
            break;
            case "abajo":
                this.abajo = tecla;
            break;
            case "izquierda":
                this.izquierda = tecla;
            break;
            case "derecha":
                this.derecha = tecla;
            break;
            case "saltar":
                this.saltar = tecla;
            break;
            case "entrarLocalizacion":
                this.entrarLocalizacion = tecla;
            break;
        }
    }
}