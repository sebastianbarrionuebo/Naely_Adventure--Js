var joystick = {
    objeto: null,
    eventosDosponibles: 'ongamepadconnected' in window,  ///Consulta el navegador si hay un joystick conectado
    conectado: false,
    iniciar: function() {
        if(joystick.eventosDosponibles) {
            window.addEventListener("gamepadconnected", joystick.conectar);
            window.addEventListener("gamepaddisconnected", joystick.desconectado);
        }else{
            joystick.actualizar();
        }
    },
    conectar: function(evento){
        joystick.objeto = evento.gamepad;
        joystick.identificar();
    },
    desconectado: function(evento){
        console.log("joystick desconectado del indice %d: %s.", evento.gamepad.index, evento.gamepad.id);
    },
    actualizar: function(){
        if(!joystick.eventosDosponibles){
            joysticks = null;
            try{
                joysticks = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                joystick.objeto = joysticks[0];
                if(!joystick.conectado) {
                    joystick.conectado = true;
                    joystick.identificar();
                }
            }catch(exception){
                console.log(exception.message);
            }
        }

        if(!joystick.objeto) {
            return;
        }

        if(joystick.botonPulsado(joystick.objeto.buttons[0])) {
            console.log("Joystick: A");
        }
    },
    botonPulsado: function(evento){
        if(typeof(evento) == "object") {
            return evento.pressed;
        }
        return evento == 1.0;
    },
    identificar: function(){
        console.log("Mando conectado en el indice %d: %s. %d botones, %d ejes.", 
        joystick.objeto.index, joystick.objeto.id, joystick.objeto.buttons.length, joystick.objeto.axes.length
        );
    }


}