import { CHANGE_LANGUAGE, TOGGLE_CART, TOGGLE_THEME } from './../constants';

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