import { CHANGE_LANGUAGE, TOGGLE_CART } from './../constants';

export const changeLanguage = (payload) => {
	localStorage.setItem('language', payload);
	return {
		type: CHANGE_LANGUAGE,
		payload
	}
}

export const toggleCart = () => {
	return {
		type: TOGGLE_CART
	}
}
