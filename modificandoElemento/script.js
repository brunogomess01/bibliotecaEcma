//.toggle observa o elemento e altera

//.contains caso seja 


let meuElemento = document.getElementById("meuElemento");


function tornarCirculo() {

        meuElemento.classList.add("circle");
        meuElemento.classList.remove("square");
}

function tornarQuadrado() {

    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function alterarFormato() {

    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");
}


function verificarClasse() {
    //Se a caixa conter a class "circle", ele ira disparar uma mensagem no terminal.
    if (meuElemento.classList.contains("circle")){
    console.log("O elemento possui a classe circle");

}
else {
    //Caso contrario, a class que estará em ação será a "square, com isso também irá mostrar uma mensagem no terminal".
    console.log("O elemento possui a class square");
}
}