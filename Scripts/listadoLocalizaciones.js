let listadoLocalizaciones = {
    obtenerLocalizacion: function(nombre) {
        let localizaciones = new Array();
        localizaciones.push( new RegistroNivel("Inicio",listadoPantallas.NIVEL, "Niveles/Naely Casa.json", "Imgs/Naely Casa.nivel.png", 250, 390));
        localizaciones.push( new RegistroNivel("Cabudare",listadoPantallas.NIVEL, "Niveles/Cabudare.json", "Imgs/Cabudare.nivel.png", 50, 775));
        localizaciones.push( new RegistroNivel("Naely Casa",listadoPantallas.NIVEL, "Niveles/Naely Casa.json", "Imgs/Naely Casa.nivel.png", 150, 630));
        localizaciones.push( new RegistroNivel("Salir de casa",listadoPantallas.NIVEL, "Niveles/Cabudare.json", "Imgs/Cabudare.nivel.png", 1430, 775));
        localizaciones.push( new RegistroNivel("Salir al mundo",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",480, 1970));
        localizaciones.push( new RegistroNivel("Chosa del Chaman",listadoPantallas.NIVEL, "Niveles/Chosa del Chaman.json", "Imgs/Chosa del Chaman.nivel.png",170,240));
        localizaciones.push( new RegistroNivel("Salir de la chosa",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",1960,1820));
        localizaciones.push( new RegistroNivel("Bosque Tenebroso",listadoPantallas.NIVEL, "Niveles/Bosque Tenebroso.json", "Imgs/Bosque Tenebroso.nivel.png",70, 500));
        localizaciones.push( new RegistroNivel("Regresar",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",1880, 1610));
        localizaciones.push( new RegistroNivel("Las Montanias",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",1880, 900)); 
        localizaciones.push( new RegistroNivel("Bosque de Hadas",listadoPantallas.NIVEL, "Niveles/Bosque de Hadas.json", "Imgs/Bosque de Hadas.nivel.png",80, 550));
        localizaciones.push( new RegistroNivel("Salir del Bosque de las Hadas",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",350, 600));
        localizaciones.push( new RegistroNivel("Bosque Dekku",listadoPantallas.NIVEL, "Niveles/Bosque de Hadas.json", "Imgs/Bosque de Hadas.nivel.png",4620, 620));
        localizaciones.push( new RegistroNivel("Bosque Tenebrosoo",listadoPantallas.NIVEL, "Niveles/Bosque Tenebroso.json", "Imgs/Bosque Tenebroso.nivel.png",2750, 680));
        localizaciones.push( new RegistroNivel("Volver a las Montanias",listadoPantallas.MAPAMUNDI, "Maps/Wonderland.json", "Imgs/Wonderland.mapa.png",1200, 400));
        for( let i=0; i< localizaciones.length; i++ ){
            if(nombre == localizaciones[i].nombre){
                return localizaciones[i];
            }
        }
    }
}