let listadoDialogos = {
    obtenerDialogo: function(nombre) {
        let dialogos = new Array();   
        dialogos.push( new Dialogo("Dino", "Ermitanio Dino: Mira botija la espada esta en el bosque de las hadas, pero esta custodiada por dos guardianes. Anda con ojo."));
        dialogos.push( new Dialogo("Hermano Coco", "Hermano Coco: Naely chamo no seas tan ansioso!. Para encontrar la espada debes encontrar al ermitanio de las montanias el sabe la ubicacion de la espada."));
        dialogos.push( new Dialogo("Mama de Naely", "Mama de Naely: Hijo mio si quieres encontrar la espada en el bosque debes visitar al chaman que vive al este. El te guiara en tu viaje."));
        dialogos.push( new Dialogo("Suenio", "Bergacion que suenio tan peculiar eh tenido. Vi una espada en el bosque. Me la voy a ninjear!!! "));
        dialogos.push( new Dialogo("Josue", "Josue: Naely y si pruebas a usar un baston de druida."));
        dialogos.push( new Dialogo("Yuri", "Yuri: Entiende Naely. A ti te falta lvl para usar esta espada"));
        dialogos.push( new Dialogo("Tesoro", "Algun dia sera mia!!"));
        for( let i=0; i< dialogos.length; i++ ){
            if(nombre == dialogos[i].nombre){
                return dialogos[i].contenido;
            }
        }
    }
}