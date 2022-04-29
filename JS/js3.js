window.addEventListener("load" , carregou)

function carregou(){

    /*var i = 0;
    var cor = ["red", "blue", "yellow", "green"]
    while (i < 4) {
        (function(i) {
            setTimeout(function() {
                document.body.innerHTML = cor[i]
            }, 1000 * (i + 1))
        })(i++)
        if(i >= 4){
           i = 0
        }
    }*/
    var i = 0;
    var cor = ["red", "blue", "yellow", "green"]
    function start(i) {

        setTimeout(function() {
            document.getElementById("carregando").style.display = "none"
            document.body.style.backgroundColor = cor[i]
            
            i++;
            if(i > 3){
                i = 0
            }
          // Again
          start(i);
    
          // Every 3 sec
        }, 1000);
    }
    
    // Begins
    start(i);

    
      
}