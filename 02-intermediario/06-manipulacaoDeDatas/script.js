// A classe principal para manipulação de data no javascript é a new Date();

var dt = new Date();

    dt.getHours(); // Retorna a hora atual
    dt.getMinutes(); // Retorna os minutos
    dt.getSeconds(); // Retorna os segundos
    dt.getDate(); // Retorna o dia atual do mês (entre 1 e 31)
    dt.getDay(); // Retorna o dia da semana (entre 0 e 6)
    dt.getMonth(); // Retorna o mês atual (entre 0 e 11)
    dt.getFullYear(); // Retorna o ano atual

    // Gerar uma Data formatada:
 
    dt.getDate() +"/"+(dt.getMonth()+1) +"/"+ dt.getFullYear()
 
 
    // Armazenar os dias da semana num array para utiliza-lo
 
var dias = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
 
    dias[dt.getDay()];
 
 //Adicionar Meses, Horas, Minutos, Etc
 
    dt.setDate(dt.getDate() + 2); // Irá adicionar 2 dias ao dia atual
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
