import { CHANGE_LANGUAGE, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, LOADING_PRODUCT, GET_PRODUCT_ERROR } from '../constants.js';

const initialState = {
	language: localStorage.getItem('language') || 'es',
	products: [],
	productDetail: {
		isLoading: false,
		product: {},
		error: false
	}
};

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
		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter((prod) => prod.id !== action.payload)
			}
		case LOADING_PRODUCT:
			return {
				...state,
				productDetail: {
					isLoading: true,
					product: {},
					error: false,
				}
			}
		case GET_PRODUCT:
			return {
				...state,
				productDetail: {
					isLoading: false,
					product: action.payload,
					error: false
				}
			}
		case GET_PRODUCT_ERROR:
			return {
				...state,
				productDetail: {
					isLoading: false,
					product: {},
					error: true
				}
			}
		default: return state;
	}
}

export default Reducer;
