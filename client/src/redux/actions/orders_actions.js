import axios from 'axios';
import {
	GET_ORDERS,
	LOADING_ORDERS,
	ORDERS_ERROR
} from '../constants';

const { REACT_APP_API_URL } = process.env;

export const getOrders = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_ORDERS });
		return axios.get(`${REACT_APP_API_URL}/orders`)
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