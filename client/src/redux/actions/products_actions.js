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
	LOADING_DISCOUNTS,
	GET_DISCOUNTS,
	GET_DISCOUNTS_ERROR,
	TOGGLE_ACTIVE_PRODUCT,
	DELETE_IMAGE,
	GET_SERIALS,
	ERROR_SERIAL,
	CLEAR_ERROR_SERIAL,
	GET_REVIEWS,
	BEARER,
	QUERY_FUNCTION
} from './../constants';

const { REACT_APP_API } = process.env;

//esperar respuesta de la db (?)

export const addProduct = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API}/products`, payload, BEARER())
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
		return axios.delete(`${REACT_APP_API}/products/${payload}`, BEARER())
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
		return axios.put(`${REACT_APP_API}/products/${payload.id}`, payload, BEARER())
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
		return axios.put(`${REACT_APP_API}/products/${payload}/active`, payload, BEARER())
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

export const getProduct = (payload, query) => {
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCT });
		return axios.get(`${REACT_APP_API}/products/${payload}${QUERY_FUNCTION(query)}`)
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
		return axios.get(`${REACT_APP_API}/category/${payload}${limit}${offset}`)
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
		return axios.get(`${REACT_APP_API}/products/search?query=${payload}${limit}${offset}`)
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
		return axios.get(`${REACT_APP_API}/products/?query=name`)
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
	return function (dispatch) {
		dispatch({ type: LOADING_PRODUCTS });
		return axios.get(`${REACT_APP_API}/products${QUERY_FUNCTION(payload)}`)
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
		return axios.delete(`${REACT_APP_API}/products/image/${payload.id}`, BEARER())
			.then(() => {
				dispatch(getProduct(payload.productId))
			})
			.catch() //check errors
	}
}

//DISCOUNT ACTIONS

export const getDiscounts = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_DISCOUNTS });
		return axios.get(`${REACT_APP_API}/products/discounts`)
			.then(products => {
				dispatch({
					type: GET_DISCOUNTS,
					payload: products.data
				})
			})
			.catch(err => {
				dispatch({
					type: GET_DISCOUNTS_ERROR
				})
			})
	}
}

export const addDiscount = (payload) => {
	return function (dispatch) {
		// dispatch({ type: LOADING_DISCOUNTS });
		return axios.post(`${REACT_APP_API}/products/discounts/${payload.id}`, payload.body, BEARER())
			.then((data) => {
				dispatch(getDiscounts());
				return data.status;
			})
			.catch((err) => {
				// dispatch({
				// 	type: GET_DISCOUNTS_ERROR
				// })
				return err.response.status;
			})
	}
}

export const editDiscount = (payload) => {
	return function (dispatch) {
		// dispatch({ type: LOADING_DISCOUNTS });
		return axios.put(`${REACT_APP_API}/products/discounts/${payload.id}`, payload.body, BEARER())
			.then((data) => {
				dispatch(getDiscounts());
				return data.status;
			})
			.catch((err) => {
				// dispatch({
				// 	type: GET_DISCOUNTS_ERROR
				// })
				return err.response.status;
			})
	}
}

export const deleteDiscount = (payload) => {
	return function (dispatch) {
		// dispatch({ type: LOADING_DISCOUNTS });
		return axios.delete(`${REACT_APP_API}/products/discounts/${payload}`, BEARER())
			.then((data) => {
				dispatch(getDiscounts());
				return data.status;
			})
			.catch((err) => {
				// dispatch({
				// 	type: GET_DISCOUNTS_ERROR
				// })
				return err.response.status;
			})
	}
}

//SERIALS ACTIONS

export const getSerials = (payload) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API}/serials/${payload}`, BEARER())
			.then((serials) => {
				dispatch({ type: GET_SERIALS, payload: serials.data })
			})
			.catch() //check errors
	}
}

export const deleteSerial = (payload) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API}/serials/${payload.serial}`, BEARER())
			.then(() => {
				dispatch(getSerials(payload.productId));
				dispatch(getProducts({ isActive: true }));
			})
			.catch() //check errors
	}
}

export const addSerial = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API}/serials/${payload.productId}`, { serials: payload.serials }, BEARER())
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
		return axios.put(`${REACT_APP_API}/serials/${payload.id}`, { serial: payload.serial }, BEARER())
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

//REVIEWS

export const getReviews = (payload, query) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API}/reviews/${payload}${QUERY_FUNCTION(query)}`)
			.then((reviews) => {
				dispatch({ type: GET_REVIEWS, payload: reviews.data })
			})
			.catch() //check errors
	}
}