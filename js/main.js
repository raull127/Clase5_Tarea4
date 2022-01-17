///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//TAREA4: En otro archivo distinto,
// Por cada clase de r/argentina programa existente (son 25), vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* const arrayPrueba = document.querySelectorAll(".texto-prueba");
console.log(arrayPrueba)
for (let i = 0; i < arrayPrueba.length; i++) {
    console.log(arrayPrueba[i].innerText);
} */
///////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#planilla-videos").onsubmit = function () {
    const segundos = document.querySelectorAll(".segundos");
    let contadorSegundos = 0;
    for (let i = 0; i < segundos.length; i++) {
        contadorSegundos = contadorSegundos + Number(segundos[i].value);
    }
    const segundosFinales = contadorSegundos % 60;
    const segundosRestantes = Math.floor(contadorSegundos / 60);
    const minutos = document.querySelectorAll(".minutos");
    let contadorMinutos = 0;
    for (let i = 0; i < minutos.length; i++) {
        contadorMinutos = contadorMinutos + Number(minutos[i].value);
    }
    contadorMinutos = contadorMinutos + segundosRestantes; 
    const minutosFinales = contadorMinutos % 60; 
    const minutosRestantes = Math.floor(contadorMinutos / 60); 
    const horas = document.querySelectorAll(".horas");
    let contadorHoras = 0;
    for (let i = 0; i < horas.length; i++) {
        contadorHoras = contadorHoras + Number(horas[i].value);
    }
    const horasFinales = contadorHoras + minutosRestantes;
    console.log(`Horas: ${horasFinales} - Minutos: ${minutosFinales} - Segundos: ${segundosFinales}`)

    document.querySelector("#mensaje-final-videos").innerText = `${horasFinales} horas ${minutosFinales} minutos y ${segundosFinales} segundos `

    return false;
}

