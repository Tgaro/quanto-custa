module.exports = (tarifa, tempo, minutosExcedentes) => {
//Função que realiza o cálculo do valor do plano e sem o plano, atráves do tempo informado, plano e a tarifa do plano.
	let valorSemPlano = parseFloat(0).toFixed(2)
	let valorComPlano = parseFloat(0).toFixed(2)

	valorSemPlano = parseFloat(tempo * tarifa).toFixed(2)

	if(minutosExcedentes > 0)
		valorComPlano = parseFloat(minutosExcedentes * (tarifa * 1.1)).toFixed(2)

	return {
		valorComPlano: valorComPlano,
		valorSemPlano: valorSemPlano,
		alerta: null,
		excedentes: minutosExcedentes,
		tarifa: tarifa
	}
}