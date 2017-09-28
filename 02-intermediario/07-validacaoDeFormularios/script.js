function validar(){
    var valor = document.getElementById('numero').value;
    
    if(valor.length > 2){
        alert('Digite um número com até DOIS algarismos!');
        return false; // Retornando falso, o formulário não será enviado 
    }else{
        return true;
    }
    
}
