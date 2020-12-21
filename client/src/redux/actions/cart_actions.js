import axios from 'axios';
import {
	SET_CART,
	ADD_UNIT_ITEM_CART,
	REMOVE_UNIT_ITEM_CART,
	DELETE_ITEM_CART,
	CLEAR_CART
} from './../constants';

const { REACT_APP_API_URL } = process.env;

export const setCart = () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	if (!cart) {
		localStorage.setItem('cart', '{}')
		return {
			type: SET_CART,
			payload: []
		};
	};
	if (!Object.keys(cart).length) return {
		type: SET_CART,
		payload: []
	};

	Object.keys(cart)
};