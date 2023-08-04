class PantallaOpciones{
    constructor(){
        this.idHTML = "PantallaOpciones";
        this.idTit = "tituloOp";
        this.idDivBtns = "btnsOp";
        this.idDivSalir = "divSalir";
        this.idBtnSalir = "btnOp";

        this.arrayBtns = new Array();
        this.arrayBtns.push(new Boton("arriba"));
        this.arrayBtns.push(new Boton("abajo"));
        this.arrayBtns.push(new Boton("izquierda"));
        this.arrayBtns.push(new Boton("derecha"));
        this.arrayBtns.push(new Boton("saltar"));
        this.arrayBtns.push(new Boton("interactuar"));

        this.html = '<h2 id="' + this.idTit + '">Controles</h1> ';
        this.html += '<div id="'+this.idDivBtns+'" >';
        ///Div botones.
        for (let i=0; i<this.arrayBtns.length; i++){
            this.html += this.arrayBtns[i].html;
        };
        this.html += '</div>';
        this.html += '<div id="'+ this.idDivSalir +'" > <button id="'+ this.idBtnSalir +'" >Jugar</button> </div>';
        document.getElementById(this.idHTML).innerHTML = this.html;

        ///Titulo style.
        document.getElementById(this.idTit).style.color = "Red";
        document.getElementById(this.idTit).style.fontFamily = "Lucida Handwriting";
        document.getElementById(this.idTit).style.fontStyle = "italic";
        document.getElementById(this.idTit).style.fontSize = "400%"
        document.getElementById(this.idTit).style.fontWeight = "bold";
        document.getElementById(this.idTit).style.textAlign = "center";
        document.getElementById(this.idTit).style.paddingTop = "80px";
        ///Div botones style.
        document.getElementById(this.idDivBtns).style.paddingLeft = "50px";
        document.getElementById(this.idDivBtns).style.paddingRight = "50px";
        ///Botones style.
        for (let i=0; i<this.arrayBtns.length; i++){
            this.arrayBtns[i].aplicarEstilos();
        };

        ///Div Salir style.
        document.getElementById(this.idDivSalir).style.display = 'flex';
        document.getElementById(this.idDivSalir).style.justifyContent = "center";
        ///Boton Salir style.
        document.getElementById(this.idBtnSalir).style.display = "block";
        document.getElementById(this.idBtnSalir).style.textAlign = "center";
        document.getElementById(this.idBtnSalir).style.color = "#ffffff";
        document.getElementById(this.idBtnSalir).style.border = "3px solid #2e518b";
        document.getElementById(this.idBtnSalir).style.padding = "20px 50px";
        document.getElementById(this.idBtnSalir).style.textDecoration = "none";
        document.getElementById(this.idBtnSalir).style.textTransform = "uppercase";
        document.getElementById(this.idBtnSalir).style.fontFamily = 'Helvetica';
        document.getElementById(this.idBtnSalir).style.borderRadius = "50px";
        document.getElementById(this.idBtnSalir).style.cursor = 'pointer';
        document.getElementById(this.idBtnSalir).style.backgroundColor = "#9e911b";
        document.getElementById(this.idBtnSalir).style.display = 'block';
        document.getElementById(this.idBtnSalir).style.margin = "50px";

        /*
        let btnArriba = document.getElementById("arriba");
        btnArriba.addEventListener("click", function(){
            console.log(teclado.teclas);
        });
        let btnAbajo = document.getElementById("btnOptions");
        btnAbajo.addEventListener("click", function(){
            
        });
        let btnIzquierda = document.getElementById("btnOptions");
        btnIzquierda.addEventListener("click", function(){
            
        });
        let btnDerecha = document.getElementById("btnOptions");
        btnDerecha.addEventListener("click", function(){
            
        });
        let btnEspacio = document.getElementById("btnOptions");
        btnEspacio.addEventListener("click", function(){
            
        });
        let interactuar = document.getElementById("btnOptions");
        interactuar.addEventListener("click", function(){
            
        });
        */
        let regresar = document.getElementById(this.idBtnSalir);
        regresar.addEventListener("click", function(){
            document.getElementById("PantallaOpciones").style.display = "none";
            document.getElementsByTagName("body")[0].onclick = ""; ///Anulando el evento
            controladorPantallas.cambiarPantalla(listadoPantallas.NIVEL,listadoLocalizaciones.obtenerLocalizacion("Inicio"));
        });
        
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";     
    }

    actualizar(registroTemporal) {
    }

    dibujar = function() {
    }
}