function tocaSom(idElementoAudio) {
    return document.querySelector(idElementoAudio).play();
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

