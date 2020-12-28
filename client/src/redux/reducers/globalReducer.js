import {
	CHANGE_LANGUAGE,
	TOGGLE_CART,
	TOGGLE_THEME,
	ADD_CREDIT_CARD,
	LOADING,
	ERROR,
	RESET_CURRENT_PAGE,
	CHANGE_CURRENT_PAGE
} from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	showCart: false,
	theme: localStorage.getItem('theme') || 'light',
	credCard: {},
	currentPage: 0
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload
			}

		case TOGGLE_CART:
			return {
				...state,
				showCart: !state.showCart
			}

		case TOGGLE_THEME:
			localStorage.setItem('theme', (state.theme === 'light') ? 'dark' : 'light')
			return {
				...state,
				theme: (state.theme === 'light') ? 'dark' : 'light'
			}

		case ADD_CREDIT_CARD:
			return {
				...state,
				credCard: action.payload
			}
		case RESET_CURRENT_PAGE:
			return {
				...state,
				currentPage: 0
			}
		case CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		default: return state;
	}
}

export default productsReducer;
