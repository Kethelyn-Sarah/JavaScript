function time(){
    var num = parseInt(document.getElementById("num").value);
    var resp = document.getElementById("respota");

    if(document.getElementById("ctof").checked==true)
    resp.innerHTML = ctof(num); 
}
function ctof(x)
{
    return(1.8*x + 32);
}