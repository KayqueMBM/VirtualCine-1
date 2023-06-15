function voltar(){
    window.location.href=("../telaInicial/novaTelaInicial.html");
}

function mudarOpcao(config){
   
    $('#'+config).css("display", "flex");
    $('#'+config).siblings().css("display", "none");
}

function Traduzir(){
  
    $('#pt').css("background-color", "#8ac926");
    $('#esp').css("background-color", "beige");
    $('#fran').css("background-color", "beige");
    $('#en').css("background-color", "beige");
    $('#pt').css("color", "white");
    $('#esp').css("color", "#343a40");
    $('#fran').css("color", "#343a40");
    $('#en').css("color", "#343a40");
    $('#pt').html("Ativo")
    $('#esp').html("Selecionar")
    $('#fran').html("Selecionar")
    $('#en').html("Selecionar")
}

function Traduzir2(){
  
    $('#pt').css("background-color", "beige");
    $('#esp').css("background-color", "#8ac926");
    $('#fran').css("background-color", "beige");
    $('#en').css("background-color", "beige");
    $('#esp').css("color", "white");
    $('#pt').css("color", "#343a40");
    $('#fran').css("color", "#343a40");
    $('#en').css("color", "#343a40");
    $('#esp').html("Ativo")
    $('#pt').html("Selecionar")
    $('#fran').html("Selecionar")
    $('#en').html("Selecionar")
}

function Traduzir3(){
  
    $('#pt').css("background-color", "beige");
    $('#esp').css("background-color", "beige");
    $('#fran').css("background-color", "#8ac926");
    $('#en').css("background-color", "beige");
    $('#fran').css("color", "white");
    $('#pt').css("color", "#343a40");
    $('#esp').css("color", "#343a40");
    $('#en').css("color", "#343a40");
    $('#fran').html("Ativo")
    $('#pt').html("Selecionar")
    $('#esp').html("Selecionar")
    $('#en').html("Selecionar")
}

function Traduzir4(){
  
    $('#pt').css("background-color", "beige");
    $('#esp').css("background-color", "beige");
    $('#fran').css("background-color", "beige");
    $('#en').css("background-color", "#8ac926");
    $('#en').css("color", "white");
    $('#pt').css("color", "#343a40");
    $('#esp').css("color", "#343a40");
    $('#fran').css("color", "#343a40");
    $('#en').html("Ativo")
    $('#pt').html("Selecionar")
    $('#esp').html("Selecionar")
    $('#fran').html("Selecionar")
}