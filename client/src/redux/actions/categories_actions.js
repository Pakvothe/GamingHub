import axios from 'axios';
import {
	GET_CATEGORIES,
	ADD_CATEGORY,
	GET_ERROR_CATEGORY
} from './../constants';

const { REACT_APP_API_URL } = process.env;

export const getCategories = () => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API_URL}/products/categories`)
			.then((categories) => {
				dispatch(
					{
						type: GET_CATEGORIES,
						payload: categories.data
					}
				)
			})
			.catch(err => {
				dispatch({
					type: GET_ERROR_CATEGORY
				})
			})
	}
}

export const addCategory = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/products/category`, payload)
			.then((categories) => {
				dispatch(
					{
						type: ADD_CATEGORY,
						payload: categories.data
					}
				)
			})
			.catch(err => {
				dispatch({
					type: GET_ERROR_CATEGORY
				})
			})
	}
}