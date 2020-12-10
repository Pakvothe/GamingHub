import { CHANGE_LANGUAGE, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	products: []
}

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload
			}
		case ADD_PRODUCT:
			return {
				...state,
				products: [
					...state.products,
					action.payload
				]
			}
		case EDIT_PRODUCT:
			return {

			}
		default: return state;
	}
}

export default Reducer;
