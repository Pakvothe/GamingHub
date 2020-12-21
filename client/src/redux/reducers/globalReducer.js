import {
	CHANGE_LANGUAGE,
	TOGGLE_CART,
	TOGGLE_THEME,
	LOADING,
	ERROR
} from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	showCart: false,
	theme: localStorage.getItem('theme') || 'light'
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

		default: return state;
	}
}

export default productsReducer;
