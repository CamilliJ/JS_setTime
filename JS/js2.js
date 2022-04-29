window.addEventListener("load" , carregou)

function carregou(){

    var i = 0;
    while (i < 5) {
        (function(i) {
            setTimeout(function() {
                document.getElementById("carregando").style.display = "none"
                document.getElementById('d01').innerHTML += 5 - i + " - Amo JavaScript<br>";
            }, 1000 * i)
        })(i++)
    }
    
      
}