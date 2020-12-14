import { CHANGE_LANGUAGE, LOADING, ERROR } from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload
			}
		default: return state;
	}
}

export default productsReducer;
