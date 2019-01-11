const deleteDestinos = () => {

	const itens = checkBoxes()
	const url = `${host.value}/destinos/delete/${itens}`
	console.log('Delete destinos', url)
	fetch(url , {
    	method: 'delete'
  	})
  	.then(response => console.log(response))
  	.then(refreshPage())
  	.catch(error => M.toast({html: error, classes: 'rounded'}))
}

const deletePlanos = () => {

	const itens = checkBoxes()
	const url = `${host.value}/planos/delete/${itens}`
	console.log('Delete planos', url)
	fetch(url , {
    	method: 'delete'
  	})
  	.then(response => console.log(response))
  	.then(refreshPage())
  	.catch(error => M.toast({html: error, classes: 'rounded'}))
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