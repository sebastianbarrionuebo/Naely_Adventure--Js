let audio = {
    musica: null,
    pista1: "Audio/394261__sirkoto51__rpg-battle-loop-2-the-heros-passage.wav",  ///https://freesound.org/people/Sirkoto51/sounds/394261/
    pista2: "",
    volumen: 0.1,
    reproducir(rutaPista){
        if(audio.musica != null){
            audio.musica.pause();
            audio.musica.src="";
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.volume = audio.volumen;
        
        //esto es para comprobar si la musica la permitio el navegador reproduce si lo permite y sino deja el mensaje de error
        audio.musica.play().then(function () {
            console.log('Se esta reproduciendo!');
        }).catch(function(error) {
            console.log('no se pudo reproducir.');
            console.log(error);
        });
    },
    pause(){
        audio.musica.pause();
        audio.musica.src="";
    }
};
