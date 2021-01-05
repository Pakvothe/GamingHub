import axios from 'axios';
import {
	GET_CATEGORIES,
	ADD_CATEGORY,
	EDIT_CATEGORY,
	GET_ERROR_CATEGORY,
	DELETE_CATEGORY,
	GET_CATEGORY,
	BEARER
} from './../constants';

const { REACT_APP_API_URL } = process.env;

export const getCategories = () => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API_URL}/categories`)
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

export const getCategory = (payload) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API_URL}/categories/${payload}`)
			.then((categories) => {
				dispatch(
					{
						type: GET_CATEGORY,
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
		return axios.post(`${REACT_APP_API_URL}/category`, payload, BEARER())
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

export const editCategory = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/category/${payload.id}`, payload, BEARER())
			.then((categories) => {
				dispatch(
					{
						type: EDIT_CATEGORY,
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


export const deleteCategory = (payload) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/category/${payload}`, BEARER())
			.then((categories) => {
				dispatch(
					{
						type: DELETE_CATEGORY,
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