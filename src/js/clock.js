import $ from 'jquery';

/// <summary>Rotaciona os ponteiros de acordo com a hora, minuto e segundos do dia</summary>
/// <param name="sec" type="Number">Segundos</param>
/// <param name="min" type="Number">Minutos</param>
/// <param name="hour" type="Number">Horas</param>
let rotate = (sec, min, hour) => {
    //lógica para pegar ângulo do ponteiro
    var degSec = 360 / 60 * sec;
    var degMin = 360 / 60 * min;
    var degHour = 360 / 12 * hour;

    var secPointer = $('#s');
    secPointer.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)"
    });

    var minPointer = $('#m');
    minPointer.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)"
    });

    var hourPointer = $('#h');
    hourPointer.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)"
    });
};

export {rotate};