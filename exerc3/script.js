
let Json =  
[
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]
let soma = 0
// função para descobrir a média mensal
/*for(let i = 0; Json[i].dia <= Json.length ; i++){
	if(Json[i].valor > 0)
	console.log(Json[i])
	soma += Json[i].valor
}*/
// funçao para pegar o maior valor
const maiorValor = Json.reduce(function(prev, current){
	return (prev.valor > current.valor) ? prev : current
 })

 // função para gerar o menor valor
 const menorValor = Json.reduce(function(prev, current){
	return (prev.valor < current.valor) ? prev : current
 })

 // funçao para gerar a média 
 //remove os dias com valor 0 da média
 const eliminaZero =(function(){
	var soma = 0
	var buceta = 0
	for (let index = 0; index < Json[29].dia; index++) {
		//filtra apenas os dias sem lucro para realizar o cálculo da média
		if(Json[index].valor > 0){
			soma = parseInt(Json[index].valor)
			buceta = soma + soma
			console.log(buceta)
		}
		
	}
	
 })



//imprime os resultados
console.log("O menor valor ocorreu em",menorValor)
console.log("O maior valor correu em",maiorValor)
//console.log("Soma da média mensal:",soma.toFixed(2))
console.log(eliminaZero())



