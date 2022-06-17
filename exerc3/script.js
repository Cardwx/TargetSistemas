

function calcular(){
    var valor = document.querySelector(".input-text").value
    var resposta = document.querySelector("#resposta")
    var ultimo = 1;var penultimo = 0;var numero = [];
    var fib = 20;
    if(fib <= 2){
        numero = valor -  1
    }  else
    for(var count=3 ; count<=fib ; count++){
     numero = ultimo + penultimo;
     penultimo = ultimo;
     ultimo = numero;
     
    }

  
   //resposta.innerHTML=numero;
 }


