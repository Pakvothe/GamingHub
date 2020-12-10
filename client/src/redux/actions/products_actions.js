import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../constants.js ';


//esperar respuesta de la db (?)

export const addProduct = (payload) => {
	return {
		type: ADD_PRODUCT,
		payload
	}
}

export const deleteProduct = (payload) => {
	return {
		type: DELETE_PRODUCT,
		payload
	}
}

export const editProduct = (payload) => {
	return {
		type: EDIT_PRODUCT,
		payload
	}
}
