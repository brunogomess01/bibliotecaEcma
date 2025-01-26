//getAtribute - obter o valor do atributo/elemento (valor da linha).

//setAttribute - Definir ou modificar o valor.

function changeImage() {
     
    const img = document.getElementById("myImage");
    //Aqui conseguimos armazenar o conteudo da imagem

    const observerImage = img.getAttribute("src");
    //Aqui pegamos o atributo SRC da imagem que basicamente diz o caminho de origem da imagem.

    if (observerImage === "/modificandoAtributo/img/number1.png") {

                 //Se a origem da atual da imagem for igual a "mc-gp-904x640.jpg"
        img.setAttribute("src","/modificandoAtributo/img/number2.png"); //Usando o SetAttribute 
        img.setAttribute("alt","imagem numero2"); //Usando o SetAttribute 
    
    }

    else{ //Caso contrario fazer o processo inverso
           
        img.setAttribute("src","/modificandoAtributo/img/number1.png"); //Usando o SetAttribute 
        img.setAttribute("alt","imagem 01"); //Usando o SetAttribute 

    }
}

