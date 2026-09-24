//----------------------variables globales----------------------------------------------

let contadorTurnos = 0;
let turnoActual = "blanco";

//----------------------generacion de clases---------------------------------------------

class pieza{
    constructor(color){
        this.color = color;
    }
    MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna) {
        const piezaOrigen = tablero[OrigenFila][OrigenColumna];
        const piezaDestino = tablero[DestinoFila][DestinoColumna];
        if(piezaDestino !== null && piezaOrigen.color === piezaDestino.color){
            return;
        }else if(piezaOrigen == null || piezaOrigen.color != turnoActual){
            return;
        }else{
            tablero[DestinoFila][DestinoColumna] = tablero[OrigenFila][OrigenColumna];
            tablero[OrigenFila][OrigenColumna] = null;
            
            if(turnoActual == "negro"){
                turnoActual = "blanco";
            }else{
                turnoActual = "negro";
            }
            contadorTurnos++;
        }
    
    }
}



class Peon extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "peon";
        this.contador = 0;
        

        if (color === "negro") {
            this.imagen = "./recursoso/peon-negro.png";
        } else {
            this.imagen = "./recursoso/peon-blanco.png";
        }
    }
    MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna){

        let direccion;
        if (this.color === "blanco") {
            direccion = -1;
        } else {
            direccion = 1;
        }

        const mismaColumna = DestinoColumna === OrigenColumna;

        const destinoVacio = tablero[DestinoFila][DestinoColumna] === null;

        const avanzaUno = DestinoFila === OrigenFila + direccion;

        const avanzaDos = this.contador === 0 && DestinoFila === OrigenFila + (direccion * 2);


        if(this.contador === 0){
            
            if(DestinoFila !== (OrigenFila + direccion) && DestinoFila !== (OrigenFila + direccion * 2)){
                return;
            }else

            this.contador++;
            super.MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna);

        }
        

        if(DestinoFila !== (OrigenFila + direccion) || DestinoFila !== (OrigenFila + direccion * 2)){
            return;
        }


        super.MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna);
        this.contador++;
    }
}
class Alfil extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "alfil";
        

        if (color === "negro") {
            this.imagen = "./recursoso/alfil-negro.png";
        } else {
            this.imagen = "./recursoso/alfil-blanco.png";
        }
    }
}
class Caballo extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "caballo";
        

        if (color === "negro") {
            this.imagen = "./recursoso/caballo-negro.png";
        } else {
            this.imagen = "./recursoso/caballo-blanco.png";
        }
    }
}
class Torre extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "torre";
        

        if (color === "negro") {
            this.imagen = "./recursoso/torre-negra.png";
        } else {
            this.imagen = "./recursoso/torre-blanca.png";
        }
    }
}
class Reina extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "reina";
        

        if (color === "negro") {
            this.imagen = "./recursoso/reina-negra.png";
        } else {
            this.imagen = "./recursoso/reina-blanca.png";
        }
    }
}
class Rey extends pieza {
    constructor(color) {
        super(color);
        this.tipo = "rey";
        

        if (color === "negro") {
            this.imagen = "./recursoso/rey-negro.png";
        } else {
            this.imagen = "./recursoso/rey-blanco.png";
        }
    }
}
//--------------------------objetos--------------------------------------------------

// PEONES NEGROS
const PN1 = new Peon("negro");
const PN2 = new Peon("negro");
const PN3 = new Peon("negro");
const PN4 = new Peon("negro");
const PN5 = new Peon("negro");
const PN6 = new Peon("negro");
const PN7 = new Peon("negro");
const PN8 = new Peon("negro");

// PEONES BLANCOS
const PB1 = new Peon("blanco");
const PB2 = new Peon("blanco");
const PB3 = new Peon("blanco");
const PB4 = new Peon("blanco");
const PB5 = new Peon("blanco");
const PB6 = new Peon("blanco");
const PB7 = new Peon("blanco");
const PB8 = new Peon("blanco");


// TORRES
const TN1 = new Torre("negro");
const TN2 = new Torre("negro");

const TB1 = new Torre("blanco");
const TB2 = new Torre("blanco");


// CABALLOS
const CN1 = new Caballo("negro");
const CN2 = new Caballo("negro");

const CB1 = new Caballo("blanco");
const CB2 = new Caballo("blanco");


// ALFILES
const AN1 = new Alfil("negro");
const AN2 = new Alfil("negro");

const AB1 = new Alfil("blanco");
const AB2 = new Alfil("blanco");


// REINAS
const REINANEGRA = new Reina("negro");
const REINABLANCA = new Reina("blanco");


// REYES
const REYNEGRO = new Rey("negro");
const REYBLANCO = new Rey("blanco");

//------------------------generacion tablero-----------------------------------------

let tablero = [
    [TN1,CN1,AN1,REINANEGRA,REYNEGRO,AN2,CN2,TN2],
    [PN1,PN2,PN3,PN4,PN5,PN6,PN7,PN8],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [PB1,PB2,PB3,PB4,PB5,PB6,PB7,PB8],
    [TB1,CB1,AB1,REINABLANCA,REYBLANCO,AB2,CB2,TB2]
];


let piezaSeleccionada = null;
let filaOrigen = null;
let columnaOrigen = null;
const tablero_html = document.getElementById("tablero");

function dibujarTablero() {
    const tablero_html = document.getElementById("tablero");
    tablero_html.innerHTML = "";

    for (let fila = 0; fila < 8; fila++) {
        for (let columna = 0; columna < 8; columna++) {
            const casilla = document.createElement("div");
            casilla.classList.add("casilla");
            casilla.dataset.fila = fila;
            casilla.dataset.columna = columna;
            casilla.addEventListener("click", () =>{
                if(piezaSeleccionada === null){
                    piezaSeleccionada = tablero[fila][columna];
                    if(piezaSeleccionada != null){
                        filaOrigen = fila;
                        columnaOrigen = columna;

                    }
                }else{
                    piezaSeleccionada.MoverPieza(filaOrigen, columnaOrigen, fila, columna);
                    piezaSeleccionada = null;
                    dibujarTablero();
                }
            });
            if ((fila + columna) % 2 === 0) {
                casilla.classList.add("blanca");
            } else {
                casilla.classList.add("negra");
            }
            tablero_html.appendChild(casilla);
            const pieza = tablero[fila][columna];

            if (pieza !== null) {
                const imagen = document.createElement("img");
                imagen.src = pieza.imagen;
                casilla.appendChild(imagen);
            }
            
        }
    }
    
}

dibujarTablero();






