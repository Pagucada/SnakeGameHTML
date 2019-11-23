$('#cartelFinal').css('opacity', '0');
$('#cartelFinal').slideUp(1);


let i = 1;
// Indice con el cual se definirá la id de cada 'div.casilla'
let probabilidadFrutaCheta = 49
let puntuacion = 0;
let juego = 'activo';
let tasaAparicionFruta = 2500;
let direccionSerpiente = "quieta";
let estadoDeJuego = "quieto";
let velocidadSerpiente = 165;
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
    if (Math.floor(Math.random() * 100) <= probabilidadFrutaCheta) {
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
        if (estadoDeJuego === 'quieto') {
            if (event.which === 39 || event.which === 40 || event.which === 37 || event.which === 38) {
                // console.log(event.which)
                contadorTiempo--
            }
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
// Se come la fruta ---------------------------------------------------------------------------->
intervaloActualizarMovimientoSerpiente = setInterval(function () {                                                                    /**/
    if (juego === 'activo') {                                                                /**/
        if (tieneNumero(frutas, posicionSerpienteMoviendose)) {                              /**/
            if ($('#' + posicionSerpienteMoviendose).hasClass('frutaCheta')) {               /**/
                $('#' + posicionSerpienteMoviendose).removeClass('frutaCheta');              /**/
                $('#' + posicionSerpienteMoviendose).addClass('casilla');                    /**/
                // velocidadSerpiente -= 40 PREGUNTAR ---> NO FUNCA                          /**/
                puntuacion += 10;                                                            /**/
                contadorTiempo += 5;                                                         /**/
            } else {                                                                         /**/
                $('#' + posicionSerpienteMoviendose).removeClass('fruta');                   /**/
                $('#' + posicionSerpienteMoviendose).addClass('casilla');                    /**/
                // velocidadSerpiente -= 20 PREGUNTAR                                        /**/
                puntuacion += 5;                                                             /**/
            }                                                                                /**/
        }                                                                                    /**/
        // Se come la fruta -------------------------------------------------------------------->

        if (direccionSerpiente === "quieta") {
            // console.log("Funciona!!")
            posicionSerpienteMoviendose = posicionSerpienteMoviendose;
        } else if (direccionSerpiente === "derecha") {
            // Movimiento a la derecha --------------------------------------------------------------------------------------->
            if (posicionSerpienteMoviendose % 40 === 0) {
                // juego = 'terminado';
                // $('#cartelFinal').removeClass('d-none');
                // $('#cartelFinal').append('¡¡Perdiste!!')
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
    }
}, velocidadSerpiente)



$('#contadorTiempo').text(contadorTiempo);
intervaloActualizarTiempoYPuntaje = setInterval(() => {
    $('#contadorTiempo').text(contadorTiempo);
    $('#contadorPuntos').text(puntuacion);
    if (contadorTiempo == 0 || contadorTiempo < 0) {
        clearInterval(intervaloActualizarTiempoYPuntaje)
    }
}, 1);
$('#cartelFinal').css('opacity', '1');
let contadorTiempoAuxiliar = 0;
$(document).keydown(function (event) {
    if (event.which === 39 || event.which === 40 || event.which === 37 || event.which === 38) {
        if (contadorTiempoAuxiliar === 0) {
            contadorTiempoAuxiliar++
            intervaloContador = setInterval(() => {
                if (contadorTiempo != 0) {
                    contadorTiempo--
                } else if (contadorTiempo == 0) {
                    contadorTiempo = -1;
                    direccionSerpiente = 'quieta';
                    juego = 'terminado';
                    if (puntuacion == 0) {
                        aviso = 'Qué cagada!';
                    } else {
                        aviso = 'Terminaste!'
                    }
                    $('#cartelFinal').append(aviso + ' <br> Tu puntuación fue: ' + puntuacion);
                    setTimeout(() => {
                        $('#cartelFinal').slideDown();
                    }, 150); 
                    clearInterval(intervaloContador);
                }
            }, 1000);
        }
    }
})


let fruitIndex = 0;
frutas = []
intervaloDeFrutas = setInterval(() => {
    if (direccionSerpiente != 'quieta') {
        if (juego === 'terminado') {
            clearInterval(intervaloDeFrutas);
        }
        crearFruta(frutas)
        fruitIndex++
    } else if (direccionSerpiente === 'quieta') {
        juego = 'terminado';
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





