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
	GET_DISCOUNTS,
	LOADING_DISCOUNTS,
	GET_DISCOUNTS_ERROR,
	TOGGLE_ACTIVE_PRODUCT,
	GET_SERIALS,
	GET_REVIEWS,
	ERROR_SERIAL,
	CLEAR_ERROR_SERIAL
} from '../constants.js';

const initialState = {
	products: {
		isLoading: false,
		productList: [],
		error: false,
	},
	productDetail: {
		isLoading: false,
		product: {},
		error: false
	},
	productsFilter: {
		isLoading: false,
		productList: null,
		error: false,
		filter: 'todos'
	},
	productsDiscount: {
		isLoading: false,
		list: [],
		error: false,
	},
	serials: {
		isLoading: false,
		list: [],
		error: false
	},
	reviews: {
		isLoading: false,
		list: [],
		error: false
	},
	count: 0
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
					],
				},
				count: state.products.count + 1
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
					productList: action.payload.results,
					error: false,
				},
				productsFilter: {
					...state.productsFilter,
					productList: null,
				},
				count: action.payload.count
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
					productList: null,
					error: true
				}
			}
		case GET_FILTER_PRODUCTS:
			return {
				...state,
				productsFilter: {
					isLoading: false,
					productList: action.payload.products,
					error: false,
					filter: action.payload.filter
				},
				count: action.payload.count
			}
		case GET_DISCOUNTS:
			return {
				...state,
				productsDiscount: {
					isLoading: true,
					list: action.payload,
					error: false
				}
			}
		case LOADING_DISCOUNTS:
			return {
				...state,
				productsDiscount: {
					isLoading: true,
					list: [],
					error: false
				}
			}
		case GET_DISCOUNTS_ERROR:
			return {
				...state,
				productsDiscount: {
					isLoading: false,
					list: [],
					error: true
				}
			}
		case EMPTY_FILTER:
			return {
				...state,
				productsFilter: {
					...state.productsFilter,
					productList: [],
					filter: 'todos'
				}
			}
		case GET_SERIALS:
			return {
				...state,
				serials: {
					isLoading: false,
					error: false,
					list: action.payload
				}
			}
		case ERROR_SERIAL:
			return {
				...state,
				serials: {
					...state.serials,
					isLoading: false,
					error: action.payload
				}
			}
		case CLEAR_ERROR_SERIAL:
			return {
				...state,
				serials: {
					...state.serials,
					error: false
				}
			}
		case GET_REVIEWS:
			return {
				...state,
				reviews: {
					isLoading: false,
					error: false,
					list: action.payload
				}
			}
		default: return state;
	}
}

export default productsReducer;
