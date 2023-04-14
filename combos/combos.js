function voltar(){
    window.open("../telaInicial/novaTelaInicial.html");
}

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