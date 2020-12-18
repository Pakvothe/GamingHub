import { CHANGE_LANGUAGE, TOGGLE_CART, LOADING, ERROR } from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	showCart: false
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
		default: return state;
	}
}

export default productsReducer;
