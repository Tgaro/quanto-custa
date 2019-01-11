const deleteDestinos = async () => {

	const itens = checkBoxes()
	const url = `${host.value}/destinos/delete/${itens}`
	console.log('Delete destinos', url)

	const xhr = new XMLHttpRequest();
	xhr.open("DELETE", url);
	xhr.onload = function () {
		var response = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(response);
		} else {
			console.log(response);
		}
	}
	await xhr.send(null);

	refreshPage()
}

const deletePlanos = async () => {

	const itens = checkBoxes()
	const url = `${host.value}/planos/delete/${itens}`
	console.log('Delete planos', url)
	
	const xhr = new XMLHttpRequest();
	xhr.open("DELETE", url);
	xhr.onload = function () {
		var response = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(response);
		} else {
			console.log(response);
		}
	}
	await xhr.send(null);

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