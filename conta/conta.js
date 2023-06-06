function voltar(){
    window.location.href=("../telaInicial/novaTelaInicial.html");
}

function mudarOpcao(config){
   
    $('#'+config).css("display", "flex");
    $('#'+config).siblings().css("display", "none");
}