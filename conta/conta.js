function voltar(){
    window.location.href=("../telaInicial/novaTelaInicial.html");
}

function mudarConfiguracao(config){
   
    $('#'+config).css("display", "flex");
    $('#'+config).siblings().css("display", "none");
}