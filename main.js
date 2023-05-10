function playSound (audioSelector) {
    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
            element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido'); 
    }
}

const listaDeTeclas = document.querySelectorAll('.key');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const key = listaDeTeclas[contador];
    const instrumento = key.classList[1];
    const idAudio = `#som_${instrumento}`;

    key.onclick = function () {
        playSound(idAudio)
    }   

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }

    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }

}
