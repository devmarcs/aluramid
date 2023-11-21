function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)
     if (elemento && elemento.localName === 'audio') {
        elemento.play
     }else {
        alert('Elemento não encontrado ou seletor inválido!')
     }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listaDeTeclas.length; contador +=1) {

    
    const tecla = listaDeTeclas[contador];

    
    const instrumento =  tecla.classList[1]; 

    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    
    tecla.onkeydown = function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add('ativa');
        }  
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

