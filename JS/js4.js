const btnContinuar = document.getElementById("continuar")
btnContinuar.addEventListener("click" , carregou)

const btnParar = document.getElementById("parar")
btnParar.addEventListener("click" , parar)

function carregou(){
    var i = 0;
    while (i < 5) {
        (function(i) {
            setTimeout(function() {
                document.getElementById('d01').innerHTML += 5 - i + " - Amo JS<br>";
            }, 1000 * i)
        })(i++)
    }
    
      
}

function parar(){
    document.location.reload(true);
}