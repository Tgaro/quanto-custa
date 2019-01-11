const destinoModel = require('../models/destinos')

const createDestino = async (req) => {

	req.body.id = await findLast()

	const newDestino = new destinoModel(req.body)
	console.log(newDestino)
	let retorno
	if (await checkDestino(newDestino, destinoModel)){
		
		try{
			retorno = await newDestino.save()
		}catch(err){
			retorno = err
		}
	}
	else
		retorno = `You can't create another Destino with same id`

	return retorno
}

const checkDestino = async (destino, model) => {
	let check = []
	await model.find({id: destino.id}, (err, result) => {
		err
		? console.log(err)
		: check = result
	})

	if(check.length > 0)
		return false
	else
		return true
}

const updateDestino = async (req) => {

	let retorno
	await destinoModel.findOneAndUpdate(

		req.body,
		req.body,
		{new: true},
		(err, result) => {

			err
			? retorno = `Can't complete query due error: ${err}`
			: retorno = result
	})

	return retorno
}

const readDestino = async () => {

	let retorno
	await destinoModel.find({}, {'_id': 0}, (err, result) => {
		
		err
		? retorno = `Can't complete query due error: ${err}`
		: retorno = result
	})

	return retorno
}

const readOrigens = async () => {

	let origens = []
	const destinos = await readDestino()
	destinos.forEach(item => origens.push(item.origem))

	origens = origens.filter((item, pos) => {
	    return origens.indexOf(item) == pos;
	})
	return origens
}

const readDestinos = async () => {

	let destino = []
	const destinos = await readDestino()
	destinos.forEach(item => destino.push(item.destino))

	destino = destino.filter((item, pos) => {
	    return destino.indexOf(item) == pos;
	})
	return destino
}


const readDestinoById = async (req) => {

	let retorno
	await destinoModel.find({id: req.params.destinoId}, (err, result) => {
		
		err
		? retorno = `Can't complete query due error: ${err}`
		: retorno = result
	})
	return retorno
}

const deleteDestino = async (req) => {

	let retorno
	const ids = req.params.destinoId.split(',')

	ids.forEach( async item => {
		await destinoModel.deleteMany({id: item}, (err, result) => {
			
			err
			? retorno = `Can't delete due error: ${err}`
			: retorno = `Destino deleted ${result}`
		})
	})
	
	return retorno
}

const findLast = async () => {

	let retorno
	await destinoModel.findOne({}, {}, { sort: { 'id' : -1 } }, (err, result) => {
		  
		  console.log('last',result)
		  if(err)
		  	retorno = 1
		  else if (result == null)
		  	retorno = 1
		  else 
		  	retorno = result.id + 1
	})
	return retorno
}

module.exports = {createDestino, updateDestino, readDestino, readDestinoById, deleteDestino , readOrigens, readDestinos}