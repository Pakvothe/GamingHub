import axios from 'axios';
import {
	ADD_USER,
	EDIT_USER,
	GET_USER,
	GET_USERS,
	DELETE_USER,
	USERS_ERROR,
	USER_ERROR,
	LOADING_USERS,
	LOGIN_USER,
	LOGOUT_USER,
	LOADING_USER,
	BEARER,
} from '../constants';

const { REACT_APP_API_URL } = process.env;

export const getUser = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_USER })
		return axios.get(`${REACT_APP_API_URL}/auth/me`, BEARER())
			.then(user => {
				if (user.data.jwt) localStorage.setItem('jwt', JSON.stringify(user.data.jwt));
				delete user.data.jwt
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

export const logout = () => {
	localStorage.removeItem('jwt');
	return {
		type: LOGOUT_USER
	}
}

export const loginUser = (payload) => {
	return function (dispatch) {
		dispatch({
			type: LOADING_USER
		})
		return axios.post(`${REACT_APP_API_URL}/auth/login`, payload)
			.then(user => {
				const jwt = JSON.stringify(user.data)
				localStorage.setItem('jwt', jwt);
				dispatch({
					type: LOGIN_USER,
					payload: user.data
				})
				dispatch(getUser());
				return {
					type: 'success',
					code: user.status
				};
			})
			.catch(err => {
				dispatch({
					type: USER_ERROR
				})
				return {
					type: 'error',
					code: err
				};
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
		return axios.put(`${REACT_APP_API_URL}/users/${payload.id}`, payload, BEARER())
			.then(() => {
				dispatch(getUser())
			})
			.catch() //check errors
	}
}


export const getUsers = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_USERS });
		return axios.get(`${REACT_APP_API_URL}/users`, BEARER())
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

export const deleteUser = (payload) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API_URL}/users/${payload}`, BEARER())
			.then((user) => {
				localStorage.removeItem('jwt');
				dispatch(
					{
						type: DELETE_USER,
						payload: user.data
					}
				)
				dispatch(getUsers())
				return {
					type: 'success',
					code: user.status
				};
			})
			.catch(err => ({ type: 'error', code: err }))
	}
}

export const toggleAdmin = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API_URL}/users/${payload.id}`, { is_admin: payload.is_admin }, BEARER())
			.then(() => {
				dispatch(
					getUsers()
				)
			})
			.catch() //check errors
	}
}