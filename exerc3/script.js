
let Json =  require("./dados.json")
// funçao para pegar o maior valor
const maiorValor = Json.reduce(function(prev, current){
	return (prev.valor > current.valor) ? prev : current
 })

 // função para gerar o menor valor
 const menorValor = Json.reduce(function(prev, current){
	return (prev.valor < current.valor) ? prev : current
 })
// media mensal feita somando os valores no qual fora maiores que 0, os dias que o lucro foi 0 nao foi considerado para a média

// cáculo da média mensal
 function diasMediaMensal(){
	var mediaMesal = 20865.37
	let quantidade = 0
	for(let i = 0; i < Json[29].dia ; i++){
		if(Json[i].valor > mediaMesal){
			quantidade++}}return quantidade}
//imprime os resultados
console.log("O menor valor ocorreu em",menorValor)
console.log("O maior valor correu em",maiorValor)
console.log("O número da faturamento diário foi maior que o mensal em:",diasMediaMensal(),"dias")






