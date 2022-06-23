const data1 = [67.836 ,36.678 ,29.229, 27.165, 19.849]

// função de soma
var soma = data1.reduce(function(soma, i) {
    return soma + i;
});
//console.log(soma.toFixed(3));

// função converte em %

function porcentagem (){
    var somaVetor = []
    var v1 = 0
    for(var index = 0; index <= 4; index++){
       v1 = data1[index] * soma / 100
       somaVetor = v1
       console.log(somaVetor.toFixed(2))
    }}

console.log(porcentagem())


