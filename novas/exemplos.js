$(document).ready(function(){
    $("body").html("<p>Escrever</p>")
    $("body").append("<p>Adicionar</p>")
    $("p").attr("class","nomeDaClasse");
    $(".nomeDaClasse").css({
        "background":"red"
    });
});