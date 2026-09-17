const tablero_html = document.getElementById("tablero");
for (let fila = 0; fila < 8; fila++) {
    for (let columna = 0; columna < 8; columna++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");
        if ((fila + columna) % 2 === 0) {
            casilla.classList.add("blanca");
        } else {
            casilla.classList.add("negra");
        }
        tablero_html.appendChild(casilla);
        
    }
    
}
const PN1 = {
    tipo: "peon",
    color: "negro",
    imagen: "./recursoso/peon-negro.png"
};

const PN2 = {
    tipo: "peon",
    color: "negro",
    imagen: "./recursoso/peon-negro.png"
};
const PN3 = {
    tipo: "peon",
    color: "negro",
    imagen: "./recursoso/peon-negro.png"
};
const PN4 = {
    tipo: "peon",
    color: "negro",
    imagen: "./recursoso/peon-negro.png"
};
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

function MoverPieza(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna) {
    tablero[DestinoFila][DestinoColumna] = tablero[OrigenFila][OrigenColumna];
    tablero[OrigenFila][OrigenColumna] = null;
}

function MoverPeon(OrigenFila, OrigenColumna, DestinoFila, DestinoColumna) {
    tablero[DestinoFila][DestinoColumna] = tablero[OrigenFila][OrigenColumna];
    tablero[OrigenFila][OrigenColumna] = null;
}