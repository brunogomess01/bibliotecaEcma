//Variavel typed fazer uma nova(new)digitacao(Typed)

const typed = new Typed('#typed-text', {

    strings: ["Texto 0000","Segundo texto 0002"],
    typeSpeed: 50, //Velocidade que sera digitado nosso texto
    backSpeed: 2, //Velocidade de retorno
    loop: true, //texto em execução infinto 
    showCursor: false, //Remove o cursor padrao de html.
    fadeOut: true, //Adiciona uma transição
});