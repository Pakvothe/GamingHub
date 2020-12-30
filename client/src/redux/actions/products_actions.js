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
	TOGGLE_ACTIVE_PRODUCT
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
		limit = options.limit ? '?limit=' + options.limit : limit;
		offset = options.offset ? '&offset=' + options.offset : offset;
	}

	return function (dispatch) {
		dispatch({ type: LOADING_FILTER_PRODUCTS });
		return axios.get(`${REACT_APP_API_URL}/products/search?query=${payload}`)
			.then(products => {

				dispatch({
					type: GET_FILTER_PRODUCTS,
					payload: { filter: payload, products: products.data.results, count: products.data.count }
				})
			})
			.catch(err => {
				console.log('error', err);
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
	let queries = '', order = '', limit = '', offset = '';

	if (payload) {
		queries = payload.query ? '?query=' + payload.query : queries;
		order = payload.order ? '&order=' + payload.order : order;
		limit = payload.limit ? '&limit=' + payload.limit : limit;
		offset = payload.offset ? '&offset=' + payload.offset : offset;
	}
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCTS });
		return axios.get(`${REACT_APP_API_URL}/products${queries}${order}${limit}${offset}`)
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
