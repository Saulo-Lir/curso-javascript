// Web Storage é usado para guardar informações do site no navegador
// Semelhantes aos cookies e sessions do php

// localStorage =  Guardar informação localmente, semelhante ao cookie
//Parâmetros: Nome do dado a ser armazenado, valor

localStorage.setItem('nome','Gandalf');

// Acessar item armazenado
localStorage.getItem('nome');

// Remover um localStorage

localStorage.removeItem('nome');

// Forma fácil de utilizar o localStorage
//Armazenar
localStorage.nome = 'Gandalf';

//Acessar
localStorage.nome;

// Manipulando o localStorage na página

if(typeof localStorage.nome == 'undefined'){ // Ou localStorage.nome == null
    localStorage.nome = prompt('Qual seu nome?');
}

document.getElementById('info').innerHTML = localStorage.nome;


// sessionStorage = É utilizado da mesma forma que o localStorage,
// A única diferença é que o conteúdo é apagado quando a página for fechada


