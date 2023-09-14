function calcularMedia(){
    
    var nome = window.prompt('Informe o nome do Aluno');
    var n1 = window.prompt('Informe a nota do trabalho:');
    var n2 = window.prompt('Informe a nota da prova:');
    var n3 = window.prompt('Informe a nota de caderno:');
   var media = (parseInt(n1) + parseInt(n2) + parseInt(n3))/3;

    document.getElementById('nome').innerHTML = (nome);
    document.getElementById('notas').innerHTML = (n1 +", "+ n2 +" e "+ n3);
    document.getElementById('media').innerHTML = (media).toFixed(3);
    
    
    if(media >= 6 ){
     document.getElementById('recado').innerHTML = "Meus Parabéns!";
    }else{
     document.getElementById('recado').innerHTML = "Ifelizmente o você não atingiu a média o suficiente!";
    }
}