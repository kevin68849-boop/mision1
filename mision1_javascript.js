
//----------------------generacion de clases---------------------------------------------

class Peon {
    constructor(color) {
        this.tipo = "peon";
        this.color = color;

        if (color === "negro") {
            this.imagen = "./recursoso/peon-negro.png";
        } else {
            this.imagen = "./recursoso/peon-blanco.png";
        }
    }
}
class Alfil {
    constructor(color) {
        this.tipo = "alfil";
        this.color = color;

        if (color === "negro") {
            this.imagen = "./recursoso/alfil-negro.png";
        } else {
            this.imagen = "./recursoso/alfil-blanco.png";
        }
    }
}
class Caballo {
    constructor(color) {
        this.tipo = "pecaballoon";
        this.color = color;

        if (color === "negro") {
            this.imagen = "./recursoso/caballo-negro.png";
        } else {
            this.imagen = "./recursoso/caballo-blanco.png";
        }
    }
}
class Torre {
    constructor(color) {
        this.tipo = "torre";
        this.color = color;

        if (color === "negro") {
            this.imagen = "./recursoso/torre-negra.png";
        } else {
            this.imagen = "./recursoso/torre-blanca.png";
        }
    }
}
class Reina {
    constructor(color) {
        this.tipo = "reina";
        this.color = color;

        if (color === "negro") {
            this.imagen = "./recursoso/reina-negra.png";
        } else {
            this.imagen = "./recursoso/reina-blanca.png";
        }
    }
}
class Rey {
    constructor(color) {
        this.tipo = "rey";
        this.color = color;

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


const tablero_html = document.getElementById("tablero");
for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");
        casilla.dataset.fila = fila;
        casilla.dataset.columna = columna;
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



function MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna) {
    tablero[DestinoFila][DestinoColumna] = tablero[OrigenFila][OrigenColumna];
    tablero[OrigenFila][OrigenColumna] = null;
}

function MoverPeon(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna) {
    tablero[DestinoFila][DestinoColumna] = tablero[OrigenFila][OrigenColumna];
    tablero[OrigenFila][OrigenColumna] = null;
}