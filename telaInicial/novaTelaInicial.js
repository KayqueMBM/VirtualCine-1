   // função pra ler querystring
        
   function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
var variavel = queryString("email");

function VerificaBotoes() {
  if(variavel == undefined){
      document.getElementById('entrar').style.display = 'inline-block';
      document.getElementById('cadastro').style.display = 'inline-block';
      document.getElementById('assinar').style.display = 'none';
  }
  else{
      document.getElementById('entrar').style.display = 'none';
      document.getElementById('cadastro').style.display = 'none';
      document.getElementById('assinar').style.display = 'inline-block';
  }
}

function telafilme(i){

    if (variavel == undefined) {
      alert('Precisa logar-se antes!');
    }  
    else {
      window.location.href= '../telasFilmes/telaFilmes'+i+'.html';
    }
}

c = 0
d = 0
co = 0
p = 0
function mostramenucategoria()
{
    c = c + 1 

    if (d==1)  
    {
        destaques.classList.add("sobe");
        d = 0
    }
    if (co==1)  
    {
        combos.classList.add("sobe");
        co = 0
    }
    if (p==1)  
    {
        perfil.classList.add("sobe");
        p = 0
    }
    if (c == 1)
    {
        categorias.classList.add("desliza");
        categorias.classList.remove("sobe");
    }
    else{
        categorias.classList.add("sobe");
        categorias.classList.remove("desliza");
        c = 0
    }
    
}
function mostramenudestaque()
{
    d = d + 1 

    if (c==1)  
    {
        categorias.classList.add("sobe");
        c = 0
    }
    if (co==1)  
    {
        combos.classList.add("sobe");
        co = 0
    }
    if (p==1)  
    {
        perfil.classList.add("sobe");
        p = 0
    }
    if (d == 1)
    {
        destaques.classList.add("desliza");
        destaques.classList.remove("sobe");
    }
    else{
        destaques.classList.add("sobe");
        destaques.classList.remove("desliza");
        d = 0
    }
}
function mostramenucombo()
{
    co = co + 1 

    if (c==1)  
    {
        categorias.classList.add("sobe");
        c = 0
    }
    if (d==1)  
    {
        destaques.classList.add("sobe");
        d = 0
    }
    if (p==1)  
    {
        perfil.classList.add("sobe");
        p = 0
    }
    if (co == 1)
    {
        combos.classList.add("desliza");
        
        combos.classList.remove("sobe");
    }
    else{
        combos.classList.add("sobe");
        combos.classList.remove("desliza");
        co = 0
    }
}
function mostramenuperfil()
{
    p = p + 1 

    if (c==1)  
    {
        categorias.classList.add("sobe");
        c = 0
    }
    if (d==1)  
    {
        destaques.classList.add("sobe");
        d = 0
    }
    if (co == 1)
    {
        combos.classList.add("sobe");
        co = 0
    }
    if (p == 1)
    {
        perfil.classList.add("desliza");
        perfil.classList.remove("sobe");
    }
    else{
        // Quando ele clicar no perfil ele vai adicionar uma classe que tem uma animação de descer
        perfil.classList.add("sobe");
        perfil.classList.remove("desliza");
        p=0
    }
}

function abrirTela(pasta,arquivo){
    let str = '../'+pasta+'/'+arquivo;
    location.href = str;
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

j = 0

function mostrarMenu(id,val){

    j++;
    if (j == 1)  {
        $('#'+id).css('z-index',2);
        
        $('#'+id).animate({opacity:1,top: (val)}, 1000);
        // $('#'+id).animate({},1000);
        $('#'+id).siblings().animate({top: '0%',opacity:0},500);
        
    }
    else { 
        
        j = 0;
        $('#'+id).animate({top: '-100%',opacity:0},500);
        $('#'+id).css('z-index',1);
       
        
    } 
}

function FecharPerfil(){
    $('#menuPerfil').animate({"z-index": "-2"},10);
    $('#menuPerfil').animate({"display": "none"},200);
    $('#menuPerfil').animate({"height": "0%"},200);
   
   
  
}

function MostrarPerfil(){
   
    $('#menuPerfil').animate({height: '100%'},100);
   
    $('#menuPerfil').css("display", "flex");
  
    $('#menuPerfil').animate({"z-index": "20"},10);
}

var precoDiv = document.getElementById('preco');
let valor = 0;
let valorb = 0;

function Mostrarq1(id1,id2,id3,id4){
    $('#'+id1).css("display", "flex");
    $('#'+id2).css("display", "none");
    $('#'+id3).css("display", "none");
    $('#'+id4).css("display", "none");
    $('#'+id1).animate({width:'100%'},1000);
    valor += 10 + valorb
    precoDiv.innerHTML = 'R$' + valor +'.00'
    valor = 0; 
}

function Mostrarq2(id1,id2,id3,id4){
    $('#'+id1).css("display", "flex");
    $('#'+id2).css("display", "flex");
    $('#'+id3).css("display", "none");
    $('#'+id4).css("display", "none");
    $('#'+id1).animate({width:'50%'},500);
    $('#'+id2).animate({width:'50%'},500);
    valor += 20 + valorb
    precoDiv.innerHTML = 'R$' + valor +'.00'
    valor = 0;
    
}

function Mostrarq3(id1,id2,id3,id4){
    $('#'+id1).css("display", "flex");
    $('#'+id2).css("display", "flex");
    $('#'+id3).css("display", "flex");
    $('#'+id4).css("display", "none");
    $('#'+id1).animate({width:'33%'},500);
    $('#'+id2).animate({width:'33%'},500);
    $('#'+id3).animate({width:'33%'},500);
    valor += 30 + valorb
    precoDiv.innerHTML = 'R$' + valor +'.00'
    valor = 0;
    

}

function Mostrarq4(id1,id2,id3,id4){
    $('#'+id1).css("display", "flex");
    $('#'+id2).css("display", "flex");
    $('#'+id3).css("display", "flex");
    $('#'+id4).css("display", "flex");
    $('#'+id1).animate({width:'25%'},500);
    $('#'+id2).animate({width:'25%'},500);
    $('#'+id3).animate({width:'25%'},500);
    $('#'+id4).animate({width:'25%'},500);
    valor += 40 + valorb
    precoDiv.innerHTML = 'R$' + valor +'.00'
    valor = 0;
    
}

setInterval(function() {
    $('#slides').animate({left:'0%'},1000);
    $('#slides').animate({left:'0%'},5000);
    $('#slides').animate({left:'-20%'},1000);
    $('#slides').animate({left:'-20%'},5000);
    $('#slides').animate({left:'-40%'},1000);
    $('#slides').animate({left:'-40%'},5000);
    $('#slides').animate({left:'-60%'},1000);
    $('#slides').animate({left:'-60%'},5000);
    $('#slides').animate({left:'-80%'},1000);
    $('#slides').animate({left:'-80%'},5000);
   
    
    $('#slides').animate({left:0},5000);
 
  
  }, 1000);

 
function abrirTela(pasta,arquivo){
    let str = '../'+pasta+'/'+arquivo;
    location.href = str;
}

function Assinatura(){
  
    $('#c1').css("background-color", "white");
    $('#c2').css("background-color", "#161A1D");
    $('#c3').css("background-color", "#161A1D");
    
     
}

function AssinaturaA(){
  
    $('#c2').css("background-color", "white");
    $('#c1').css("background-color", "#161A1D");
    $('#c3').css("background-color", "#161A1D");
   
 
}

function AssinaturaB(){
  
    $('#c2').css("background-color", "#161A1D");
    $('#c1').css("background-color", "#161A1D");
    $('#c3').css("background-color", "white");
}

var op = document.getElementsByClassName('planosOpcoes');
var op2 = document.getElementsByClassName('planosCabecalho');
var op3 = document.getElementsByClassName('planoPreco');
var op4 = document.getElementsByClassName('planosEscolhas');
var op5 = document.getElementsByClassName('planosEscolhas2');


function Individual(){
    for (var i = 0; i < op.length; i++) {
        op[i].style.backgroundImage = 'linear-gradient(to top, #0B090A,#161A1D)';
        
        
    }
    op2[0].style.backgroundColor = '#161A1D';
    
    op3[0].style.backgroundImage = 'linear-gradient(to bottom,#A4161A,#660708)';
    op4[0].style.borderBottom = '50px solid #161A1D'
    op5[0].style.borderBottom = '0px solid #A4151A'
}

function Familia(){
    for (var i = 0; i < op.length; i++) {
        
        op[i].style.backgroundImage = 'linear-gradient(to bottom,#A4161A,#660708)';

    }
    op2[0].style.backgroundColor = '#A4161A';
    op3[0].style.backgroundImage = 'linear-gradient(to top, #0B090A,#161A1D)';
    op5[0].style.borderBottom = '50px solid #A4151A'
    op4[0].style.borderBottom = '0px solid #A4151A'
}