function tocaSom(idElementoAudio) {
    return document.querySelector(idElementoAudio).play();
}

//Pegou todos os elementos da classe .tecla 
const listaDeTeclas = document.querySelectorAll('.tecla');

//contador para contar a condição booleana do while


for (contador = 0; contador < listaDeTeclas.length; contador +=1) {

    //Salvando todos os elementos da classe tecla com índex do contador na const tecla
    const tecla = listaDeTeclas[contador];

    //Pego cada item da classlist do elemento da classe tecla
    const instrumento =  tecla.classList[1]; 

    //Acrescento uma concatenação da inicial do id do áudio com a segunda parte da lista de teclas (me pareceu uma gambiarra)
    const idAudio = `#som_${instrumento}`
    
    //Ao clicar no botão no html chama a função anonima que contém a função que toca o som específico de cada tecla
    tecla.onclick = function(){
        tocaSom(idAudio)
    };
}

