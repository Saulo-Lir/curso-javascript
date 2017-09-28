//Criando classe, propriedades e métodos

function Animal(){
    this.raca = 'Cão'; // Definindo uma propriedade
    this.nome = 'Lulu';
    this.idade = 20;
    this.peso = 10;
    
    // Definindo métodos
    
    this.latir = function(){
        console.log('Au, Au, Au');
    }
    
    this.comer = function(kg){
        //Método auxiliar
        for(var i=0;i<kg;i++){
            this.mastigar();
        }
        console.log('Hummm, Delicious...');
        this.peso = this.peso + kg;
    }
    
    this.mastigar = function(){ // Método auxiliar, serve apenas como complemento para outro método
        console.log('Nhoc Nhoc...');
    }
    
    
}

// Intanciando a classe Animal
var lulu = new Animal();

//Usando os métodos
lulu.latir();

lulu.comer(5);





