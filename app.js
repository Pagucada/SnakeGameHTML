let i = 1;
// Indice con el cual se definirá la id de cada 'div.casilla'

let velocidadSerpiente = 250;
let coordenadasX = 220;
let coordenadasY = 510;

let serpienteInicial = Math.floor(Math.random() * 1600) + 1;

function tieneNumero(array, numero) {
    for (let indice = 0; indice < array.length; indice++) {
        if (array[indice] === numero) {
            return true
        }
    }
    return false
};

function crearFruta(frutas) {
            if (Math.floor(Math.random() * 100) <= 2) {
                frutas.push(Math.floor(Math.random() * 1600) + 1);
                $('#' + frutas[fruitIndex]).addClass('frutaCheta');
                $('#' + frutas[fruitIndex]).removeClass('casilla');
            } else {
                frutas.push(Math.floor(Math.random() * 1600) + 1);
                $('#' + frutas[fruitIndex]).addClass('fruta');
                $('#' + frutas[fruitIndex]).removeClass('casilla');
            }
        }
// serpienteInicial es un número random que abarca desde el 1 hasta el 1601


for (columna = 0; columna < 40; columna++) {

    if (i === serpienteInicial) {
        $("#tablero").append("<div class='casilla serpiente' id='" + i + "'>");
        $("#" + serpienteInicial).css("background-image", "url('Textures/cabezaSerpienteAbajo.png')");
        i++
    } else {
        $("#tablero").append("<div class='casilla' id='" + i + "'>");
        i++
    }
    for (filas = 0; filas < 39; filas++) {
        if (i === serpienteInicial) {
            $("#tablero").append("<div class='casilla serpiente' id='" + i + "'>");
            $("#" + serpienteInicial).css("background-image", "url('Textures/cabezaSerpienteAbajo.png')");
            i++
        } else {
            $("#tablero").append("<div class='casilla' id='" + i + "'>");
            i++
        }
    }
};
// Se construye el tablero de 40x40 casillasf
// Se define serpienteInicial como una casilla con una clase extra '.serpiente'
// Con el valor obtenido en la variable serpienteInicial definida anteriormente (número al azar entre 1 y 1600)
// Se define la casilla en la que la serpiente comenzará el juego

serpienteMoviendose = serpienteInicial;
// Se crea una variable serpienteMoviendose idéntica a serpienteInicial, sólo que esta la modificaremos a lo largo del juego



direccionSerpiente = "quieta";

$(document).keydown(function (event) {
    // console.log(event.which);
    if (event.which === 32) {
        direccionSerpiente = "quieta";
        console.log("detener");
    }
    else if (event.which === 39) {
        direccionSerpiente = "derecha";
        console.log("moverDerecha");
    } else if (event.which === 40) {
        direccionSerpiente = "abajo";
        console.log("moverAbajo");
    } else if (event.which === 37) {
        direccionSerpiente = "izquierda";
        console.log("moverIzquierda");
    } else if (event.which === 38) {
        direccionSerpiente = "arriba";
        console.log("moverArriba");
    }
});


$(document).on("scroll", function () {
    console.log("Y" + Math.floor(scrollY) + " | X" + Math.floor(scrollX))
});

// Bloque de código que se repetirá cada 500 milisegundos para actualizar posición de serpiente
setInterval(function () {
    if (serpienteMoviendose === frutas[fruitIndex]) {
        $('#' + frutas[fruitIndex]).removeClass('fruta');
        $('#' + frutas[fruitIndex]).addClass('casilla');
        frutas.splice(frutas[fruitIndex], 0);
    }
    if (direccionSerpiente === "quieta") {
        // console.log("Funciona!!")
        serpienteMoviendose = serpienteMoviendose;
    } else if (direccionSerpiente === "derecha") {
        // Movimiento a la derecha --------------------------------------------------------------------------------------->
        if (serpienteMoviendose % 40 === 0) {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose -= 39;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteDerecha.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        } else {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose += 1
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteDerecha.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        }
        // Fin del movimiento a la derecha ------------------------------------------------------------------------------->
    } else if (direccionSerpiente === "abajo") {
        // Movimiento hacia abajo  --------------------------------------------------------------------------------------->
        if (serpienteMoviendose > 1560) {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose -= 1560;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteAbajo.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        } else {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose += 40;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteAbajo.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        }
        // Fin del movimiento abajo --------------------------------------------------------------------------------------->
    } else if (direccionSerpiente === "izquierda") {
        if ((serpienteMoviendose % 40 === 1) || (serpienteMoviendose === 1)) {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose += 39;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteIzquierda.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        } else {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose--
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteIzquierda.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        }
    } else if (direccionSerpiente === "arriba") {
        if (serpienteMoviendose < 41) {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose += 1560;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteArriba.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        } else {
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/casilla.png')");
            $("#" + serpienteMoviendose).removeClass("serpiente");
            serpienteMoviendose -= 40;
            $("#" + serpienteMoviendose).css("background-image", "url('Textures/cabezaSerpienteArriba.png')");
            $("#" + serpienteMoviendose).addClass("serpiente");
        }
    }


}, velocidadSerpiente)

let fruitIndex = 0;
frutas = []
setInterval(() => {
    if (direccionSerpiente != 'quieta') {
        function crearFruta(frutas) {
            if (Math.floor(Math.random() * 100) <= 0) {
                frutas.push(Math.floor(Math.random() * 1600) + 1);
                $('#' + frutas[fruitIndex]).addClass('frutaCheta');
                $('#' + frutas[fruitIndex]).removeClass('casilla');
            } else {
                frutas.push(Math.floor(Math.random() * 1600) + 1);
                $('#' + frutas[fruitIndex]).addClass('fruta');
                $('#' + frutas[fruitIndex]).removeClass('casilla');
            }
        }
        crearFruta(frutas)
        fruitIndex++
    } else if (direccionSerpiente === 'quieta') {
        return false
    }
}, 10);





