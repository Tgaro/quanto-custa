const planoModel = require('../models/planos')

const createPlano = async (req) => {

	req.body.id = await findLast()

	const newplano = new planoModel(req.body)
	let retorno
	if (await checkPlano(newplano, planoModel)){
		
		try{
			retorno = await newplano.save()
		}catch(err){
			retorno = err
		}
	}
	else
		retorno = `You can't create another plano with same id`

	return retorno
}

const checkPlano = async (plano, model) => {
	let check = []
	await model.find({id: plano.id}, (err, result) => {
		err
		? console.log(err)
		: check = result
	})

	if(check.length > 0)
		return false
	else
		return true
}

const updatePlano = async (req) => {

	let retorno
	await planoModel.findOneAndUpdate(

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

const readPlano = async () => {

	let retorno
	await planoModel.find({}, {'_id': 0}, (err, result) => {
		
		err
		? retorno = `Can't complete query due error: ${err}`
		: retorno = result
	})

	return retorno
}

const readPlanoById = async (req) => {

	let retorno
	await planoModel.find({id: req.params.planoId}, (err, result) => {
		
		err
		? retorno = `Can't complete query due error: ${err}`
		: retorno = result
	})
	return retorno
}

const deletePlano = async (req) => {

	let retorno
	const ids = req.params.planoId.split(',')

	ids.forEach( async item => {
		await planoModel.deleteMany({id: item}, (err, result) => {
			
			err
			? retorno = `Can't delete due error: ${err}`
			: retorno = `plano deleted ${result}`
		})
	})
	
	return retorno
}

const findLast = async () => {

	let retorno
	await planoModel.findOne({}, {}, { sort: { 'id' : -1 } }, (err, result) => {
		  
		  if(err)
		  	retorno = 1
		  else if (result == null)
		  	retorno = 1
		  else 
		  	retorno = result.id + 1
	})
	return retorno
}


module.exports = {createPlano, updatePlano, readPlano, readPlanoById, deletePlano}