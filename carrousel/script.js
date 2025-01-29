
// Seleciona o elemento que contem todas as imagens do carrosel
const track = document.getElementById('carouselTrack');

// Obtem o numero de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // Indice que rastreia a imagem atual


// funçao que move o carrossel para a proxima imagem
function moveCarousel() { 
    index++; //incrementa o indice para avançar uma imagem

    if (index >= items.length - 1) {
      

        setTimeout(() => {
          track.style.transition = 'none';

          index = 0;

          track.style.transform = `translateX(0)`;


        }, 500);
    }  else {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${index * 100}% )`;
    }

}

setInterval(moveCarousel, 1000);




