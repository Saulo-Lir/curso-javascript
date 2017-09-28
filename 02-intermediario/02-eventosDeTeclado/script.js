
function apertouTecla(evento){
    console.log('Apertou a tecla '+evento.keyCode); // keyCode: identifica o número do caractere digitado correspondente ao da tabela ASCII
    
    if(evento.keyCode == 65){
        alert('Apertou a tecla A');
    }
}

function soltouTecla(evento){
    console.log('Soltou a tecla');
}

function teclaPressionada(evento){
    console.log('Tecla está sendo pressionada');
}
