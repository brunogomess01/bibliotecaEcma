function Trocarcor(toggleButton) 
{
    
  // Verifica a cor atual do fundo

    if (document.body.style.backgroundColor ==="black") 
    {
        //Se estiver preto muda para branco e altera o texto para preto.
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "black"

        //Atualiza o texto do botão para indicar o "Modo escuro"
        document.getElementById("toggleButton").textContent = "Modo-Claro"
    }

     else 
    {
    //Se estiver branco muda para preto e altera o texto para branco
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

    //Atualiza o texto do botão para indicar o "Modo claro" 
    document.getElementById("toggleButton").textContent = "Modo-Escuro";
        
    }
}