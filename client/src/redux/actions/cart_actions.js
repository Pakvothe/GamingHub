import axios from 'axios';
import {
	SET_CART,
	ADD_UNIT_ITEM_CART,
	REMOVE_UNIT_ITEM_CART,
	ADD_ITEM_CART,
	DELETE_ITEM_CART,
	CLEAR_CART,
	ERROR_CART,
	LOADING_CART,
	SET_STOCK,
	EDIT_STOCK,
	DELETE_ITEM_STOCK
} from './../constants';

const { REACT_APP_API_URL } = process.env;

export const setCart = () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	if (!cart || !Object.keys(cart).length) {
		localStorage.setItem('cart', '{}')
		return {
			type: SET_CART,
			payload: []
		};
	};
	const keys = Object.keys(cart)

	return function (dispatch) {
		dispatch({ type: LOADING_CART })
		return axios.post(`${REACT_APP_API_URL}/products/cart`, {
			arrayProducts: keys
		})
			.then((products) => {
				const cartItems = products.data.map(product => {
					product.quantity = cart[product.id];
					return product;
				});
				const stock = cartItems.reduce((acc, prod) => {
					acc[prod.id] = prod.stock - prod.quantity;
					return acc;
				}, {});
				dispatch({ type: SET_CART, payload: cartItems });
				dispatch({ type: SET_STOCK, payload: stock });
			})
			.catch(err => {
				dispatch({
					type: ERROR_CART
				})
			})
	}
};

export const addItemCart = (payload) => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	if (cart[payload.id]) cart[payload.id] = cart[payload.id] + payload.quantity;
	else cart[payload.id] = payload.quantity;
	localStorage.setItem('cart', JSON.stringify(cart));
	return {
		type: ADD_ITEM_CART,
		payload
	}
}

export const deleteItemCart = (payload) => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	delete cart[payload];
	localStorage.setItem('cart', JSON.stringify(cart));
	return {
		type: DELETE_ITEM_CART,
		payload
	}
}

export const editStock = (payload) => {
	return {
		type: EDIT_STOCK,
		payload
	}
}

export const deleteItemStock = (payload) => {
	return {
		type: DELETE_ITEM_STOCK,
		payload
	}
}

export const clearCart = () => {
	localStorage.setItem('cart', '{}')
	return {
		type: CLEAR_CART
	}
}