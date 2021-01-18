import axios from 'axios';
import {
	ADD_USER,
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
import { setCart } from './cart_actions';
import { firestore } from '../../firebase/';
import firebase from 'firebase/app';
import 'firebase/firestore';

const { REACT_APP_API } = process.env;

export const getUser = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_USER })
		return axios.get(`${REACT_APP_API}/auth/me`, BEARER())
			.then(async user => {
				if (user.data.jwt) localStorage.setItem('jwt', JSON.stringify(user.data.jwt));
				delete user.data.jwt
				dispatch({
					type: GET_USER,
					payload: user.data
				})
				const cart = firestore.collection("cart");
				try {
					const query = await cart.where(firebase.firestore.FieldPath.documentId(),
						'==',
						user.data.id.toString()).get();
					const firebaseCart = query.docs[0]?.data();
					const localStorageCart = JSON.parse(localStorage.getItem('cart'))
					if (Object.keys(localStorageCart).length === 0) {
						if (firebaseCart) {
							localStorage.setItem('cart', JSON.stringify(firebaseCart));
						}
					} else {
						cart.doc(user.data.id.toString()).set(localStorageCart)
					}
					dispatch(setCart());
				} catch (err) { console.log(err) }
			})
			.catch(err => {
				console.log(err)
				dispatch({
					type: USER_ERROR
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
		return axios.post(`${REACT_APP_API}/auth/login`, payload)
			.then(user => {
				const jwt = JSON.stringify(user.data)
				localStorage.setItem('jwt', jwt);
				dispatch({
					type: LOGIN_USER,
					payload: user.data
				})
				dispatch(getUser());
				return user.status;
			})
			.catch(err => {
				dispatch({
					type: USER_ERROR
				})
				return err.response.status;
			})
	}
}

export const addUser = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API}/auth/register`, payload)
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
				return user;
			})
			.catch(err => {
				throw new Error(err.response.data.message)
			})
	}
}

export const editUser = (payload) => {
	return function (dispatch) {
		dispatch({ type: LOADING_USER });
		return axios.put(`${REACT_APP_API}/users/${payload.id}`, payload, BEARER())
			.then((user) => {
				dispatch(getUser())
				return user.status
			})
			.catch(err => {
				return err.response.status
			})
	}
}


export const getUsers = () => {
	return function (dispatch) {
		dispatch({ type: LOADING_USERS });
		return axios.get(`${REACT_APP_API}/users`, BEARER())
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

export const deleteUser = (payload, isAdmin = false) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API}/users/${payload}`, BEARER())
			.then((user) => {
				dispatch(
					{
						type: DELETE_USER,
						payload: user.data
					}
				)
				if (isAdmin) dispatch(getUsers())
				else localStorage.removeItem('jwt');
				return user.status
			})
			.catch((err) => err.response.status)
	}
}

export const toggleAdmin = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API}/users/${payload.id}`, { is_admin: payload.is_admin }, BEARER())
			.then(() => {
				dispatch(
					getUsers()
				)
			})
			.catch() //check errors
	}
}