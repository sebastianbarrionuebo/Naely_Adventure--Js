//namespace - espacio de nombres
//main loop - bucle principal
//aps - actualizaciones por segundo
//fps - frames por segundo
//callback 
var bucleJuego = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal) {
        bucleJuego.idEjecucion = window.requestAnimationFrame(bucleJuego.iterar);
        bucleJuego.actualizar(registroTemporal);
        bucleJuego.dibujar();

        if(registroTemporal - bucleJuego.ultimoRegistro > 999) {
            bucleJuego.ultimoRegistro = registroTemporal;
            console.log("APS: " + bucleJuego.aps + " | FPS: " + bucleJuego.fps);
            bucleJuego.aps = 0;
            bucleJuego.fps = 0;
        }
    },
    detener: function() {

    },
    actualizar: function(registroTemporal) {
        joystick.actualizar();
        controladorPantallas.actualizar(registroTemporal);
        bucleJuego.aps++;
    },
    dibujar: function(registroTemporal) {
        controladorPantallas.dibujar();
        bucleJuego.fps++;
    }
}