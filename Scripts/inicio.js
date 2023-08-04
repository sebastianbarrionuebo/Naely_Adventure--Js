// ctrl + f5 - recargar limpiando la cache
var inicio = {
    iniciadores: [
        dimensiones.iniciar(),
        controladorPantallas.iniciar(),
        teclado.iniciar(),
        joystick.iniciar(),
        bucleJuego.iterar()
    ],
    iniciarJuego: function () {
        inicio.encadenarInicios(inicio.iniciadores.shift()); ///shift devuelve el primer elemento del array y lo borra
    },
    encadenarInicios: function(iniciador) {
        if(iniciador) {
            iniciador( () => inicio.encadenarInicios(iniciadores.shift()) );
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);

