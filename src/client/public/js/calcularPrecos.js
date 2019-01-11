const socket = io()
const divValores = document.querySelector("#valores")

const limpaDados = () => {

	//Esconde a div de resultados
	divValores.classList.add('hide')
	//Força os selects retornarem para a opção 0
	const selects = [].slice.call(document.querySelectorAll('select'))
	selects.forEach(item => {
		item.options[0].selected = true
		M.FormSelect.init(item)
	})
	//Faz com que o valor do campo tempo seja nulo 
	tempo.value = null
}

const calculaCotacao = () => {
	
	//Monta objeto necessário para realizar o cálculo dos planos
	const request = {
		origem : origem.value,
		destino : destino.value,
		plano : plano.value,
		tempo : tempo.value
	}
	console.log('envia', request)
	//Envia o objeto
	socket.emit('calcular cotacao', request)
}

//Cria um listenner para o retorno do cálculo dos planos
socket.on('retorno cotacao', valores => {

	console.log('retorno', valores)
	//Formata os valores caso sejam indesejaveis
	if(valores.tarifa == undefined)
		valores.tarifa = 0
	if(valores.excedentes == null)
		valores.excedentes = 0
	if(tempo.value == '')
		tempo.value = 0

	//Remove a classe hide da div que mostra os resultados
	//Atribui aos respectivos campos os valores do plano e o cálculo
	divValores.classList.remove('hide')
	valorComPlano.innerText = `R$ ${valores.valorComPlano}`
	valorSemPlano.innerText = `R$ ${valores.valorSemPlano}`

	calculoComPlano.innerText = `Valor = ${valores.excedentes} x (${valores.tarifa} x 1.1)`
	calculoSemPlano.innerText = `Valor = ${tempo.value} x ${valores.tarifa}`

	//Caso não haja tarifa para o código e origem informados, retorna TOAST de alerta
	if(valores.alerta != null)
		 M.toast({html: valores.alerta, classes: 'rounded'})
})