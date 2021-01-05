import axios from 'axios';
import {
	ADD_USER,
	EDIT_USER,
	GET_USER,
	GET_USERS,
	DELETE_USER,
	USERS_ERROR,
	LOADING_USERS
} from '../constants';

const { REACT_APP_API_URL } = process.env;

export const getUser = () => {
	return function (dispatch) {
		const jwt = JSON.parse(localStorage.getItem('jwt'));
		return axios.get(`${REACT_APP_API_URL}/auth/me`, { headers: { "Authorization": `Bearer ${jwt}` } })
			.then(user => {
				dispatch({
					type: GET_USER,
					payload: user.data
				})
			})
			.catch(err => {
				dispatch({
					type: USERS_ERROR
				})
			})
	}
}

export const addUser = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API_URL}/auth/register`, payload)
			.then((user) => {
				const jwt = JSON.stringify(user.data)
				localStorage.setItem('jwt', jwt);
				dispatch(
					{
						type: ADD_USER,
						payload: user.data
					}
				)
				dispatch(getUser());
			})
			.catch(err => {
			}) //check errors
	}
}

export const editUser = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/users/${payload.id}`, payload)
			.then((user) => {
				dispatch(
					{
						type: EDIT_USER,
						payload: user.data
					}
				)
			})
			.catch() //check errors
	}
}


export const getUsers = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_USERS });
		return axios.get(`${REACT_APP_API_URL}/users`)
			.then(users => {
				dispatch({
					type: GET_USERS,
					payload: users.data
				})
			})
			.catch(err => {
				dispatch({
					type: USERS_ERROR
				})
			})
	}
}

export const deleteUser = (payload) => { //payload = product.id
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/users/${payload}`)
			.then((user) => {
				dispatch(
					{
						type: DELETE_USER,
						payload: user.data
					}
				)
			})
			.catch() //check errors
	}
}

export const toggleAdmin = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/users/${payload.id}`, { is_admin: payload.is_admin })
			.then(() => {
				dispatch(
					getUsers()
				)
			})
			.catch() //check errors
	}
}