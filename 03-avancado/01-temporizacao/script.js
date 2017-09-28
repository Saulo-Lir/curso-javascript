// Temporização serve para executar um script de x em x tempos

function acao(){
    document.write('Executou...<br/>');
}


// 1a forma de aplicar o temporizador
// Executa o script indefinidamente, até ser interrompido por terceiros

setInterval(acao, 2000); // Função que aplica a temporização , Parâmetros: Ação, tempo em milissegundos


// 2a forma de aplicar o temporizador
// Executa apenas uma vez o script

setTimeout(acao, 2000);

// Para controlar a função setInterval, atribuímos ela numa variável

var timer = setInteval(acao, 2000);

// Parar as funções

clearInterval(timer);

clearTimeout(timer);
