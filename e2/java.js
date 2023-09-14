function calcularIdade(){
    var ano1 = window.prompt('Em que ano você nasceu?');
    var idade = 2023 - ano1;
    document.getElementById('mensagem').innerHTML = "Quem em " + ano1 + " vai completar " + idade + " anos em 2023";
}