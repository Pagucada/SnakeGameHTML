let i = 1;
// Indice con el cual se definirá la id de cada 'div.casilla'

let velocidadSerpiente = 100;
let coordenadasX = 220;
let coordenadasY = 510;

let posicionSerpienteInicial = Math.floor(Math.random() * 1600) + 1;

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
// posicionSerpienteInicial es un número random que abarca desde el 1 hasta el 1601


for (columna = 0; columna < 40; columna++) {

    if (i === posicionSerpienteInicial) {
        $("#tablero").append("<div class='casilla serpienteAb' id='" + i + "'>");
        i++
    } else {
        $("#tablero").append("<div class='casilla' id='" + i + "'>");
        i++
    }

    for (filas = 0; filas < 39; filas++) {

        if (i === posicionSerpienteInicial) {
            $("#tablero").append("<div class='casilla serpienteAb' id='" + i + "'>");
            i++
        } else {
            $("#tablero").append("<div class='casilla' id='" + i + "'>");
            i++
        }
        
    }
};
// Se construye el tablero de 40x40 casillas
// Se define posicionSerpienteInicial como una casilla con una clase extra '.serpiente'
// Con el valor obtenido en la variable posicionSerpienteInicial definida anteriormente (número al azar entre 1 y 1600)
// Se define la casilla en la que la serpiente comenzará el juego

posicionSerpienteMoviendose = posicionSerpienteInicial;
// Se crea una variable posicionSerpienteMoviendose idéntica a posicionSerpienteInicial, sólo que esta la modificaremos a lo largo del juego



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
    // console.log("Y" + Math.floor(scrollY) + " | X" + Math.floor(scrollX))
});

// Bloque de código que se repetirá cada 500 milisegundos para actualizar posición de serpiente
setInterval(function () {
    if (tieneNumero(frutas, posicionSerpienteMoviendose)) { 
        if ($('#' + posicionSerpienteMoviendose).hasClass('frutaCheta')) {
        $('#' + posicionSerpienteMoviendose).removeClass('frutaCheta');
        $('#' + posicionSerpienteMoviendose).addClass('casilla');
    } else {
        $('#' + posicionSerpienteMoviendose).removeClass('fruta');
        $('#' + posicionSerpienteMoviendose).addClass('casilla');
    }
        
    }// Se come la fruta
    
    if (direccionSerpiente === "quieta") {
        // console.log("Funciona!!")
        posicionSerpienteMoviendose = posicionSerpienteMoviendose;
    } else if (direccionSerpiente === "derecha") {
        // Movimiento a la derecha --------------------------------------------------------------------------------------->
        if (posicionSerpienteMoviendose % 40 === 0) {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose -= 39;
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteD");

        } else {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose += 1

            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteD");

        }
        // Fin del movimiento a la derecha ------------------------------------------------------------------------------->
    } else if (direccionSerpiente === "abajo") {
        // Movimiento hacia abajo  --------------------------------------------------------------------------------------->
        if (posicionSerpienteMoviendose > 1560) {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose -= 1560;

            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteAb");

        } else {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose += 40;
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteAb");
        }
        // Fin del movimiento abajo --------------------------------------------------------------------------------------->
    } else if (direccionSerpiente === "izquierda") {
        if ((posicionSerpienteMoviendose % 40 === 1) || (posicionSerpienteMoviendose === 1)) {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose += 39;
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteI");
        } else {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            };

            posicionSerpienteMoviendose--
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteI");
        }
    } else if (direccionSerpiente === "arriba") {
        if (posicionSerpienteMoviendose < 41) {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose += 1560;
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteAr");
        } else {
            $("#" + posicionSerpienteMoviendose).addClass('casilla');

            if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteD')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteD')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAr')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAr')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteAb')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteAb')
            } else if ($("#" + posicionSerpienteMoviendose).hasClass('serpienteI')) {
                $("#" + posicionSerpienteMoviendose).removeClass('serpienteI')
            }

            posicionSerpienteMoviendose -= 40;
            $("#" + posicionSerpienteMoviendose).removeClass('casilla');
            $("#" + posicionSerpienteMoviendose).addClass("serpienteAr");
        }
    }


}, velocidadSerpiente)

let fruitIndex = 0;
frutas = []
setInterval(() => {
    if (direccionSerpiente != 'quieta') {
        function crearFruta(frutas) {
            if (Math.floor(Math.random() * 100) <= 4) {
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
}, 4000);


// Poner contador de 60 segundos que cuando llegue a cero termine el juego
// Poner contador de puntaje que contará las frutas comidas
// El que come más frutas en 60 segundos gana





