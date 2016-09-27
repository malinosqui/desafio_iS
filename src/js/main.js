import $ from "jquery";
import moment from "moment";
import * as clock from './clock';

//booleano utilizado para troca de texto
let hide = false;

//IIFE com JQuery
$(function () {
    update();

    //listener de click do botão
    $("#btnToggleClock").click(($ev) => {
        //adiciona ou remove classe para esconder ou mostrar relógio
        $(".clock").toggleClass("hide");

        //booleano para troca de texto
        hide = !hide;

        //caso esteja escondido troca o texto para 'Mostrar relógio'
        if (hide)
            $("#btnToggleClock").html('Mostrar relógio');
        //caso esteja amostra troca o texto para 'Esconder relógio
        else
            $("#btnToggleClock").html('Esconder relógio');

    });
});

/// <summary>Atualiza o relógio de segundo em segundo</summary>
function update() {
    //pega data atual com o moment.js
    var dateNow = moment();
    //chama função para rotacionar ponteiros
    clock.rotate(dateNow.format('ss'), dateNow.format('mm'), dateNow.format('HH'));
    setTimeout(update, 1000);
}










