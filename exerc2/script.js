
/*
function calcular(){
    var valor = document.querySelector(".input-text").value
    var resposta = document.querySelector("#resposta")
    var ultimo = 1;var penultimo = 0;var numero = [];
   
    if(valor <= 2){
        numero = valor -  1
    }  else
    for(var count=3 ; count<=fib ; count++){
     numero = ultimo + penultimo;
     penultimo = ultimo;
     ultimo = numero;
     
    }}*/

const numero = 4
let n1 = 0, n2 = 1, proximoTermo;


console.log("O número informado foi:",numero)
for (let i = 1; i <= numero; i++) {
    console.log(n1);
    proximoTermo = n1 + n2;
    n1 = n2;
    n2 = proximoTermo;
}
console.log("O número não pertence a sequencia fibonaci")
  

