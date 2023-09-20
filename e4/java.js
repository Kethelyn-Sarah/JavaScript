function CalcularIMC(){
    var altura = parseFloat(document.getElementById("cm").value) / 100;
    var peso = parseFloat(document.getElementById("kg").value);
    var IMC = peso/(altura * altura);
    
    if (IMC < 18.5) {
        document.getElementById('ic').innerHTML = "Magreza";
    } else if (IMC >= 18.5 && IMC < 25) {
        document.getElementById('ic').innerHTML = "Normal";
    } else if (IMC >= 25 && IMC < 30) {
        document.getElementById('ic').innerHTML = "Sobrepeso";
    } else if (IMC >= 30 && IMC < 35) {
        document.getElementById('ic').innerHTML = "Obesidade grau I";
    } else if (IMC >= 35 && IMC < 40) {
        document.getElementById('ic').innerHTML = "Obesidade grau II";
    } else if (IMC >= 40) {
        document.getElementById('ic').innerHTML = "Obesidade grau III";
    }



}