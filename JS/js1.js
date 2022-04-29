window.addEventListener("load",carregou)

function carregou(){
    const msgFinal = setTimeout(texto, 5000);

    function texto() {
        document.getElementById("demo").innerHTML = "Amo JavaScript"
        document.getElementById("carregando").style.display = "none"
    }

}