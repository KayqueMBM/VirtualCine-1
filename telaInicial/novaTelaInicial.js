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
  var variavel = queryString("usuario");

  function VerificaBotoes() {
      if(variavel == undefined){
          document.getElementById('entrar').style.display = 'inline-block';
          document.getElementById('cadastro').style.display = 'inline-block';
      }
      else{
          document.getElementById('entrar').style.display = 'none';
          document.getElementById('cadastro').style.display = 'none';
      }
  }

  function telafilme1(){
      if (variavel == undefined) {
          alert('Precisa logar-se antes!')
      }
      else
      {
          window.location.href= 'tela_filme1.html';
      }
  }
  function telafilme2(){
      if (variavel == undefined) {
          alert('Precisa logar-se antes!')
      }
      else
      {
          window.location.href= 'tela_filme2.html';
      }
  }
  function telafilme3(){
      if (variavel == undefined) {
          alert('Precisa logar-se antes!')
      }
      else
      {
          window.location.href= 'tela_filme3.html';
      }
  }
  function telafilme4(){
      if (variavel == undefined) {
          alert('Precisa logar-se antes!')
      }
      else
      {
          window.location.href= 'tela_filme4.html';
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
            perfil.classList.add("sobe");
            perfil.classList.remove("desliza");
            p=0
        }
    }
    function abrirCombos(){
        window.open("../combos/combos.html");
    }