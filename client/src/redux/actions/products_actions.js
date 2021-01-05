import axios from 'axios';
import {
	ADD_PRODUCT,
	DELETE_PRODUCT,
	EDIT_PRODUCT,
	LOADING_PRODUCT,
	GET_PRODUCT,
	GET_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_FILTER_PRODUCTS,
	EMPTY_FILTER,
	LOADING_FILTER_PRODUCTS,
	LOADING_PRODUCTS,
	GET_FILTER_PRODUCTS_ERROR,
	GET_PRODUCTS_ERROR,
	TOGGLE_ACTIVE_PRODUCT,
	DELETE_IMAGE,
	GET_SERIALS,
	ERROR_SERIAL,
	CLEAR_ERROR_SERIAL
} from './../constants';

const { REACT_APP_API_URL } = process.env;

//esperar respuesta de la db (?)

export const addProduct = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/products`, payload)
			.then((product) => {
				dispatch(
					{
						type: ADD_PRODUCT,
						payload: product.data
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
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/products/${payload.id}`, payload)
			.then((product) => {
				dispatch(
					{
						type: EDIT_PRODUCT,
						payload: product.data
					}
				)
			})
			.catch() //check errors
	}
}

export const toggleActiveProduct = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/products/${payload}/active`, payload)
			.then((product) => {
				dispatch(
					{
						type: TOGGLE_ACTIVE_PRODUCT,
						payload: product.data
					}
				)
			})
			.catch() //check errors
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

export const getFilterProducts = (payload, options) => {

	let limit = '', offset = '';

	if (options) {
		limit = options.limit ? '?limit=' + options.limit : limit;
		offset = options.offset ? '&offset=' + options.offset : offset;
	}

	return function (dispatch) {
		dispatch({ type: LOADING_FILTER_PRODUCTS });
		return axios.get(`${REACT_APP_API_URL}/category/${payload}${limit}${offset}`)
			.then(products => {
				dispatch({
					type: GET_FILTER_PRODUCTS,
					payload: { filter: payload, products: products.data.results, count: products.data.count }
				})
			})
			.catch(err => {
				dispatch({
					type: GET_FILTER_PRODUCTS_ERROR
				})
			})
	}
}

export const getSearchProducts = (payload, options) => {
	let limit = '', offset = '';

	if (options) {
		limit = options.limit ? '&limit=' + options.limit : limit;
		offset = options.offset ? '&offset=' + options.offset : offset;
	}

	return function (dispatch) {
		dispatch({ type: LOADING_FILTER_PRODUCTS });
		return axios.get(`${REACT_APP_API_URL}/products/search?query=${payload}${limit}${offset}`)
			.then(products => {

				dispatch({
					type: GET_FILTER_PRODUCTS,
					payload: { filter: payload, products: products.data.results, count: products.data.count }
				})
			})
			.catch(err => {
				dispatch({
					type: GET_FILTER_PRODUCTS_ERROR
				})
			})
	}
}

export const getProductsByName = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCTS })
		return axios.get(`${REACT_APP_API_URL}/products/?query=name`)
			.then(products => {
				dispatch({
					type: GET_PRODUCTS,
					payload: products.data
				})
			})
			.catch(err => {
				dispatch({
					type: GET_PRODUCTS_ERROR
				})
			})
	}
}

export const emptyFilter = () => {
	return { type: 'EMPTY_FILTER' }
}

export const getProducts = (payload) => {
	let queries = '', order = '', limit = '', offset = '', isActive = '';

	if (payload) {
		queries = payload.query ? '?query=' + payload.query : queries;
		order = payload.order ? '&order=' + payload.order : order;
		limit = payload.limit ? '&limit=' + payload.limit : limit;
		offset = payload.offset ? '&offset=' + payload.offset : offset;
		isActive = payload.isActive ? '?isActive=' + payload.isActive : isActive;
	}
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCTS });
		return axios.get(`${REACT_APP_API_URL}/products${queries}${order}${limit}${offset}${isActive}`)
			.then(product => {
				dispatch({
					type: GET_PRODUCTS,
					payload: product.data
				})
			})
			.catch(err => {
				dispatch({
					type: GET_PRODUCTS_ERROR
				})
			})
	}
}

export const deleteImage = (payload) => { //payload = product.id
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/products/image/${payload.id}`)
			.then(() => {
				dispatch(getProduct(payload.productId))
			})
			.catch() //check errors
	}
}

//SERIALS ACTIONS

export const getSerials = (payload) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API_URL}/serials/${payload}`)
			.then((serials) => {
				dispatch({ type: GET_SERIALS, payload: serials.data })
			})
			.catch() //check errors
	}
}

export const deleteSerial = (payload) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/serials/${payload.serial}`)
			.then(() => {
				dispatch(getSerials(payload.productId));
				dispatch(getProducts({ isActive: true }));
			})
			.catch() //check errors
	}
}

export const addSerial = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/serials/${payload.productId}`, { serials: payload.serials })
			.then((a) => {
				dispatch(getProducts({ isActive: true }));
				dispatch(getSerials(payload.productId));
			})
			.catch(err => {
				dispatch({ type: ERROR_SERIAL, payload: err.response.data })
			}) //check errors
	}
}

export const editSerial = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/serials/${payload.id}`, { serial: payload.serial })
			.then((a) => {
				dispatch(getSerials(payload.productId));
			})
			.catch(err => {
				dispatch({ type: ERROR_SERIAL, payload: err.response.data })
			}) //check errors
	}
}

export const clearErrorSerial = () => {
	return { type: CLEAR_ERROR_SERIAL }
}