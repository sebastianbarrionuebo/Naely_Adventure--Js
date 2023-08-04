class PantallaDeInicio{
    constructor(){
        this.idHTML = "PantallaIntro";
        this.idTit = "titulo";
        this.idBtnJugar = "btnJugar";
        this.idBtnOpciones = "btnOptions";
        this.idBtn = "botones";

        this.html = '<h1 id="' + this.idTit + '">Naely Adventure</h1> ';
        let htmlBtn1 = '<button id="' + this.idBtnJugar + '" > Jugar </button>';
        let htmlBtn2 = '<button id="' + this.idBtnOpciones + '" > Opciones </button>';
        let htmlBtn = '<div id="' + this.idBtn + '" >"' + htmlBtn1 + htmlBtn2 + '"</div>';
        this.html += htmlBtn;

        document.getElementById(this.idHTML).innerHTML = this.html;
        document.getElementById(this.idBtn).style.display = 'flex';
        document.getElementById(this.idBtn).style.alignItems = "center";
        document.getElementById(this.idBtn).style.justifyContent = "center";
        document.getElementById(this.idBtn).style.padding = "30px";

        document.getElementById(this.idTit).style.color = "Red";
        document.getElementById(this.idTit).style.fontFamily = "Lucida Handwriting";
        document.getElementById(this.idTit).style.fontStyle = "italic";
        document.getElementById(this.idTit).style.fontSize = "600%"
        document.getElementById(this.idTit).style.fontWeight = "bold";
        document.getElementById(this.idTit).style.textAlign = "center";
        document.getElementById(this.idTit).style.paddingTop = "80px";
        
        document.getElementById(this.idBtnJugar).style.textAlign = "center";
        document.getElementById(this.idBtnJugar).style.color = "#ffffff";
        document.getElementById(this.idBtnJugar).style.border = "3px solid #2e518b";
        document.getElementById(this.idBtnJugar).style.padding = "20px 50px";
        document.getElementById(this.idBtnJugar).style.textDecoration = "none";
        document.getElementById(this.idBtnJugar).style.textTransform = "uppercase";
        document.getElementById(this.idBtnJugar).style.fontFamily = 'Helvetica';
        document.getElementById(this.idBtnJugar).style.borderRadius = "50px";
        document.getElementById(this.idBtnJugar).style.cursor = 'pointer';
        document.getElementById(this.idBtnJugar).style.backgroundColor = "#2e911b";
        document.getElementById(this.idBtnJugar).style.display = 'block';
        document.getElementById(this.idBtnJugar).style.margin = "50px";


        document.getElementById(this.idBtnOpciones).style.textAlign = "center";
        document.getElementById(this.idBtnOpciones).style.color = "#ffffff";
        document.getElementById(this.idBtnOpciones).style.border = "3px solid #2e518b";
        document.getElementById(this.idBtnOpciones).style.padding = "20px 50px";
        document.getElementById(this.idBtnOpciones).style.textDecoration = "none";
        document.getElementById(this.idBtnOpciones).style.textTransform = "uppercase";
        document.getElementById(this.idBtnOpciones).style.fontFamily = 'Helvetica';
        document.getElementById(this.idBtnOpciones).style.borderRadius = "50px";
        document.getElementById(this.idBtnOpciones).style.cursor = 'pointer';
        document.getElementById(this.idBtnOpciones).style.backgroundColor = "#2e211b";
        document.getElementById(this.idBtnOpciones).style.display = 'block';
        document.getElementById(this.idBtnOpciones).style.margin = "50px";

        
        let boton1 = document.getElementById("btnJugar");
        boton1.addEventListener("click", function(){
            document.getElementById("PantallaIntro").style.display = "none";
            document.getElementsByTagName("body")[0].onclick = ""; ///Anulando el evento
            controladorPantallas.cambiarPantalla(listadoPantallas.NIVEL,listadoLocalizaciones.obtenerLocalizacion("Inicio"));
        });
        let boton2 = document.getElementById("btnOptions");
        boton2.addEventListener("click", function(){
            document.getElementById("PantallaIntro").style.display = "none";
            document.getElementsByTagName("body")[0].onclick = ""; ///Anulando el evento
            controladorPantallas.cambiarPantalla(listadoPantallas.MENU_OPCIONES);
        });
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        

        ///audio
        audio.reproducir(audio.pista1);
        
    }

    actualizar(registroTemporal) {
    }

    dibujar = function() {
    }
}