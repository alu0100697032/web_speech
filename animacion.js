$(document).ready(function(){
    $("#mic").click(function(){
        $(this).css("background-color", "#2E9AFE");
    });
});

function animar(interimResult, recognition){
    if(interimResult.indexOf('derecha') != -1)
        $("#mic").animate({left: '+=10%', right: '-=10p%'});
    if(interimResult.indexOf('izquierda') != -1)
        $("#mic").animate({right: '+=10%', left: '-=10%'});
    if(interimResult.indexOf('arriba') != -1)
        $("#mic").animate({bottom: '+=10%', top: '-=10%'});
    if(interimResult.indexOf('abajo') != -1)
        $("#mic").animate({top: '+=10%', bottom: '-=10%'});
    if(interimResult.indexOf('ocultar') != -1)
        $("#mic").hide();
    if(interimResult.indexOf('mostrar') != -1)
        $("#mic").show();
    if (interimResult.indexOf('terminar') != -1){
        $("#mic").css("background-color", "#FF0000");
        $("#mic").animate({
            top:'49%',
            bottom:'49%',
            left:'45%',
            right:'45%',});
            recognition.stop();
        }
}