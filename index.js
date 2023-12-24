// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**
//
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
//
// ## Objetivo:
//
// 	Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// 	depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
//
// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal
//
// ## Saída
//
// Ao final deve se exibir uma mensagem:
// 	"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
//

function calculateWinningBalance(wins, loses) {
	return wins - loses
}

function calculateRank(winningBalance) {
	switch (true) {
		case winningBalance >= 101:
			return "Imortal"
		case winningBalance >= 91:
			return "Lendário"
		case winningBalance >= 81:
			return "Diamante"
		case winningBalance >= 51:
			return "Ouro"
		case winningBalance >= 21:
			return "Prata"
		case winningBalance >= 11:
			return "Bronze"
		default:
			return "Ferro"
	}
}

(function(){
	let wins, loses, winningBalance
	while (true) {
		wins = Number(prompt("Insira o número de vitórias do Herói"))
		loses = Number(prompt("Insira o número de derrotas do Herói"))
		winningBalance = calculateWinningBalance(wins, loses)
		alert(`O Herói tem de saldo de **${winningBalance}** está no nível de **${calculateRank(winningBalance)}**`)
		if (confirm("Deseja finalizar?")) {
			return
		}
	}
})()