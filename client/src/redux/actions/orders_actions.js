import axios from 'axios';
import {
	GET_ORDERS,
	LOADING_ORDERS,
	ORDERS_ERROR,
	ADD_ORDER,
	ORDER_ERROR,
	GET_ORDER,
	LOADING_ORDER,
	BEARER
} from '../constants';

const { REACT_APP_API_URL } = process.env;

export const getOrders = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_ORDERS });
		return axios.get(`${REACT_APP_API_URL}/orders`, BEARER)
			.then(product => {
				dispatch({
					type: GET_ORDERS,
					payload: product.data
				})
			})
			.catch(err => {
				dispatch({
					type: ORDERS_ERROR
				})
			})
	}
}
export const getOrder = (payload) => {
	return function (dispatch) {
		dispatch({ type: LOADING_ORDER });
		return axios.get(`${REACT_APP_API_URL}/orders/${payload}`, BEARER)
			.then(product => {
				dispatch({
					type: GET_ORDER,
					payload: product.data
				})
			})
			.catch(err => {
				dispatch({
					type: ORDER_ERROR
				})
			})
	}
}

export const addOrder = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/orders`, payload, BEARER)
			.then(response => {
				dispatch({
					type: ADD_ORDER,
					payload: response.data
				})
			})
	}
}