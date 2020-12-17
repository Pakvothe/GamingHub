import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT,
	LOADING_PRODUCT,
	GET_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_ERROR,
	LOADING_PRODUCTS,
	GET_FILTER_PRODUCTS,
	GET_FILTER_PRODUCTS_ERROR,
	EMPTY_FILTER,
	LOADING_FILTER_PRODUCTS,
	TOGGLE_ACTIVE_PRODUCT
} from '../constants.js';

const initialState = {
	products: {
		isLoading: false,
		productList: [],
		error: false
	},
	productDetail: {
		isLoading: false,
		product: {},
		error: false
	},
	productsFilter: {
		isLoading: false,
		productList: [],
		error: false
	},
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				products: {
					...state.products,
					productList: [
						...state.products.productList,
						action.payload
					]
				}
			}
		case EDIT_PRODUCT:
			return {
				...state,
				products: {
					...state.products,
					productList: state.products.productList.map((prod) => {
						if (action.payload.id === prod.id) {
							prod = {
								...prod,
								...action.payload,
							}
						}
						return prod;
					})
				}
			}
		case TOGGLE_ACTIVE_PRODUCT:
			return {
				...state,
				products: {
					...state.products,
					productList: state.products.productList.map((prod) => {
						if (action.payload.id === prod.id) {
							prod = {
								...prod,
								...action.payload,
							}
						}
						return prod;
					})
				}
			}
		case DELETE_PRODUCT:
			return {
				...state,
				products: {
					...state.products,
					productList: state.products.productList.filter((prod) => prod.id !== action.payload)
				}
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
		case GET_PRODUCT_ERROR:
			return {
				...state,
				productDetail: {
					isLoading: false,
					product: {},
					error: true
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
		case LOADING_PRODUCTS:
			return {
				...state,
				products: {
					isLoading: true,
					productList: [],
					error: false,
				}
			}
		case GET_PRODUCTS_ERROR:
			return {
				...state,
				products: {
					isLoading: false,
					productList: [],
					error: true
				}
			}
		case GET_PRODUCTS:
			return {
				...state,
				products: {
					isLoading: false,
					productList: action.payload,
					error: false
				},
			}
		case LOADING_FILTER_PRODUCTS:
			return {
				...state,
				productsFilter: {
					isLoading: true,
					productList: [],
					error: false,
				}
			}
		case GET_FILTER_PRODUCTS_ERROR:
			return {
				...state,
				productsFilter: {
					isLoading: false,
					productList: [],
					error: true
				}
			}
		case GET_FILTER_PRODUCTS:
			return {
				...state,
				productsFilter: {
					isLoading: false,
					productList: action.payload,
					error: false
				},
			}
		case EMPTY_FILTER:
			return {
				...state,
				productsFilter: {
					...state.productsFilter,
					productList: []
				}
			}
		default: return state;
	}
}

export default productsReducer;
