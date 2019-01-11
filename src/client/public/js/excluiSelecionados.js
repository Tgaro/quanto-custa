const deleteDestinos = () => {

	const itens = checkBoxes()
	fetch(`${host.value}/destinos/delete/${itens}` , {
    	method: 'delete'
  	})
  	.then(response => refreshPage())
  	refreshPage()

}

const deletePlanos = () => {

	const itens = checkBoxes()
	fetch(`${host.value}/planos/delete/${itens}` , {
    	method: 'delete'
  	})
  	.then(response => refreshPage())
  	refreshPage()

}

const refreshPage = () => {
    document.location.reload()
} 

const checkBoxes = () => {

	let itens = []
	const checkboxes = [].slice.call(document.querySelectorAll('[type=checkbox]'))
	checkboxes.forEach(item => {
		if(item.checked)
			itens.push(item.value)
	})

	return itens.join(',')
}