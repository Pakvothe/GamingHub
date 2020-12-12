import axios from 'axios';
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, LOADING_PRODUCT, GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCTS, LOADING, ERROR } from './../constants';

const { REACT_APP_API_URL } = process.env;

//esperar respuesta de la db (?)

export const addProduct = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/products`, payload)
			.then((product) => {
				dispatch(
					{
						type: ADD_PRODUCT,
						payload: product
					}
				)
			})
			.catch() //check errors
	}

}

export const deleteProduct = (payload) => { //payload = product.id
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/products/${payload}`)
			.then(() => {
				dispatch(
					{
						type: DELETE_PRODUCT,
						payload
					}
				)
			})
			.catch() //check errors
	}
}

export const editProduct = (payload) => {
	return {
		type: EDIT_PRODUCT,
		payload
	}
}

export const getProduct = (payload) => {
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCT });
		return axios.get(`${REACT_APP_API_URL}/products/${payload}`)
			.then(product => {
				dispatch({
					type: GET_PRODUCT,
					payload: product.data
				})
			})
			.catch(err => {
				dispatch({
					type: GET_PRODUCT_ERROR
				})
			})
	}
}

export const getProducts = () => {
	return function (dispatch) {
		dispatch({ type: LOADING });
		return axios.get(`${REACT_APP_API_URL}/products`)
			.then(product => {
				dispatch({
					type: GET_PRODUCTS,
					payload: product.data
				})
			})
			.catch(err => {
				dispatch({
					type: ERROR
				})
			})
	}
}
