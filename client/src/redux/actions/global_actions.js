import {
	CHANGE_LANGUAGE,
	TOGGLE_CART,
	TOGGLE_THEME,
	ADD_CREDIT_CARD,
	RESET_CURRENT_PAGE,
	CHANGE_CURRENT_PAGE,
	OPEN_LOGIN,
	OPEN_VIDEO,
	CLOSE_VIDEO,
} from './../constants';

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

export const resetCurrentPage = () => {
	return {
		type: RESET_CURRENT_PAGE,
	}
}
export const changeCurrentPage = (payload) => {
	return {
		type: CHANGE_CURRENT_PAGE,
		payload
	}
}

export const openLogin = (payload) => {
	return {
		type: OPEN_LOGIN,
		payload
	}
}

export const openVideo = (payload) => {
	return {
		type: OPEN_VIDEO,
		payload
	}
}

export const closeVideo = () => {
	return {
		type: CLOSE_VIDEO
	}
}