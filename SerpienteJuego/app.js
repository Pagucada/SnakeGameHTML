let i = 1;
// Indice con el cual se definirá la id de cada 'div.casilla'

let puntuacion = 0;
let juego = 'activo';
let tasaAparicionFruta = 1000;
let direccionSerpiente = "quieta";
let estadoDeJuego = "quieto";
let velocidadSerpiente = 180;
let contadorTiempo = 60;
// let coordenadasX = 220;
// let coordenadasY = 510;

// posicionSerpienteInicial es un número random que abarca desde el 1 hasta el 1601
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
    // 3% de chance de que se ejecute este bloque de código y aparezca una frutaCheta en vez de una fruta común
    // La cual dará más puntos y tiempo extra de juego...
    if (Math.floor(Math.random() * 100) <= 31) {
        // Defino frutaNueva como un random entre 1 y 1600
        frutaNueva = Math.floor(Math.random() * 1600) + 1;
        // Filtro frutaNueva y vuelvo a llamar esta función hasta que frutaNueva sea diferente a todas las demás
        // Esto se hace para no poner mas de una fruta por casilla
        if ($('#' + frutaNueva).hasClass('fruta') || $('#' + frutaNueva).hasClass('frutaCheta')) {
            crearFruta(frutas)
        } else {
            // Si frutaNueva tiene un valor que no ha sido poblado por una fruta, se crea la fruta
            frutas.push(frutaNueva)
            $('#' + frutas[fruitIndex]).addClass('frutaCheta');
            $('#' + frutas[fruitIndex]).removeClass('casilla');
        }

    } else {
        // Defino frutaNueva como un random entre 1 y 1600
        frutaNueva = Math.floor(Math.random() * 1600) + 1;
        // Filtro frutaNueva y vuelvo a llamar esta función hasta que frutaNueva sea diferente a todas las demás
        // Esto se hace para no poner mas de una fruta por casilla
        if ($('#' + frutaNueva).hasClass('fruta') || $('#' + frutaNueva).hasClass('frutaCheta')) {
            crearFruta(frutas)
        } else {
            frutas.push(frutaNueva)
            $('#' + frutas[fruitIndex]).addClass('fruta');
            $('#' + frutas[fruitIndex]).removeClass('casilla');
        }

    }
}


for (columna = 0; columna < 40; columna++) {
    if (i === posicionSerpienteInicial) {
        $("#tablero").append("<div class='casilla serpienteAb' id='" + i + "'>");
        if (i === 1) {
            $("#" + i).css('border-top-left-radius', '10px');
        } else if (i === 1561) {
            $("#" + i).css('border-bottom-left-radius', '10px');
        }
        i++
    } else {
        $("#tablero").append("<div class='casilla' id='" + i + "'>");
        if (i === 1) {
            $("#" + i).css('border-top-left-radius', '10px');
        } else if (i === 1561) {
            $("#" + i).css('border-bottom-left-radius', '10px');
        }
        i++
    }

    for (filas = 0; filas < 39; filas++) {

        if (i === posicionSerpienteInicial) {
            $("#tablero").append("<div class='casilla serpienteAb' id='" + i + "'>");
            if (i === 40) {
                $("#" + i).css('border-top-right-radius', '10px');
            } else if (i === 1600) {
                $("#" + i).css('border-bottom-right-radius', '10px');
            }
            i++
        } else {
            $("#tablero").append("<div class='casilla' id='" + i + "'>");
            if (i === 40) {
                $("#" + i).css('border-top-right-radius', '10px');
            } else if (i === 1600) {
                $("#" + i).css('border-bottom-right-radius', '10px');
            }
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




$(document).keydown(function (event) {
    // console.log(event.which);
    if (event.which === 32) {
        // direccionSerpiente = "quieta";
        // console.log("detener");
    } else {
        if (estadoDeJuego === 'quieto' && event.which === 39 || event.which === 40 || event.which === 37 || event.which === 38) {
            // console.log('oof')
            contadorTiempo--
        }
        if (juego === 'activo') {
            if (event.which === 39 || event.which === 40 || event.which === 37 || event.which === 38) {
                estadoDeJuego = 'corriendo';
                $('#estadoDeJuego').addClass('d-none');
            }
            if (event.which === 39) {
                direccionSerpiente = "derecha";
                // console.log("moverDerecha");
            } else if (event.which === 40) {
                direccionSerpiente = "abajo";
                // console.log("moverAbajo");
            } else if (event.which === 37) {
                direccionSerpiente = "izquierda";
                // console.log("moverIzquierda");
            } else if (event.which === 38) {
                direccionSerpiente = "arriba";
                // console.log("moverArriba");
            }
        }
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
            puntuacion += 100;
            contadorTiempo += 5;
        } else {
            $('#' + posicionSerpienteMoviendose).removeClass('fruta');
            $('#' + posicionSerpienteMoviendose).addClass('casilla');
            puntuacion += 50;
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

$('#contadorTiempo').text(contadorTiempo);
setInterval(() => {
    $('#contadorTiempo').text(contadorTiempo);
}, 100);
setInterval(() => {
    if (estadoDeJuego === 'quieto') {

    } else {
        if (contadorTiempo != 0) {
            contadorTiempo--
        } else if (contadorTiempo == 0) {
            contadorTiempo = 0;
            $('#cartelFinal').append('Felicidades! <br> Tu puntuación fue: ' + puntuacion);
            $('#cartelFinal').removeClass('d-none');
        }
    }
}, 1000);

let fruitIndex = 0;
frutas = []
setInterval(() => {
    if (direccionSerpiente != 'quieta') {

        crearFruta(frutas)
        fruitIndex++
    } else if (direccionSerpiente === 'quieta') {
        return false
    }
}, tasaAparicionFruta);

while (estadoDeJuego === 'corriendo') {
    if ($('#estadoDeJuego').hasClass('d-none')) {

    } else {
        $('#estadoDeJuego').addClass('d-none');
    }
}

// Poner contador de 60 segundos que cuando llegue a cero termine el juego
// Poner contador de puntaje que contará las frutas comidas
// El que come más frutas en 60 segundos gana
// Idea: cada fruta cheta da 5 segundos más de tiempo
// Idea: hacer que desaparezcan las frutas que no fueron comidas despues de X segundos





