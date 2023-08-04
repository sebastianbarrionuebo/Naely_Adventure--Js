class Boton{
    constructor( nombre ) {
        this.idHTML = nombre;
        this.html = '<button id="' + this.idHTML + '" >' + nombre +': ' + controlesTeclado.obtenerTecla(nombre) + '</button> ';
    }

    aplicarEstilos() {
        if (!document.getElementById(this.idHTML)) {
            throw("El ID " + this.idHTML + " no existe en la hoja.");
        }
        document.getElementById(this.idHTML).style.textAlign = "center";
        document.getElementById(this.idHTML).style.height = "80px";
        document.getElementById(this.idHTML).style.width = "160px";
        document.getElementById(this.idHTML).style.color = "#ffffff";
        document.getElementById(this.idHTML).style.border = "3px solid #2e518b";
        document.getElementById(this.idHTML).style.textDecoration = "none";
        document.getElementById(this.idHTML).style.textTransform = "uppercase";
        document.getElementById(this.idHTML).style.fontFamily = 'Helvetica';
        document.getElementById(this.idHTML).style.borderRadius = "50px";
        document.getElementById(this.idHTML).style.cursor = 'pointer';
        document.getElementById(this.idHTML).style.backgroundColor = "#2e211b";
        document.getElementById(this.idHTML).style.display = 'inline-block';
        document.getElementById(this.idHTML).style.margin = "50px";
    }
}