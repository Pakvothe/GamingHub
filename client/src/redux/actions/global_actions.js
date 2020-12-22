import { CHANGE_LANGUAGE, TOGGLE_CART, TOGGLE_THEME, ADD_CREDIT_CARD } from './../constants';

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

export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME
	}
}

export const addCreditCard = (payload) => {
	return {
		type: ADD_CREDIT_CARD,
		payload
	}
}