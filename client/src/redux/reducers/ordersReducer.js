import {
	GET_ORDERS,
	LOADING_ORDERS,
	ORDERS_ERROR,
	ADD_ORDER,
	ORDER_ERROR,
	GET_ORDER,
	LOADING_ORDER
} from '../constants.js';

const initialState = {
	orders: {
		isLoading: false,
		list: [],
		error: false
	},
	order: {
		isLoading: false,
		info: {},
		error: false
	}
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				orders: {
					isLoading: false,
					list: action.payload,
					error: false
				}
			}
		case GET_ORDER:
			return {
				...state,
				order: {
					isLoading: false,
					info: action.payload,
					error: false
				}
			}
		case ADD_ORDER:
			return {
				...state,
				order: {
					isLoading: false,
					info: action.payload,
					error: false
				}
			}
		case ORDERS_ERROR:
			return {
				...state,
				orders: {
					...state.orders,
					isLoading: false,
					error: action.payload
				}
			}
		case ORDER_ERROR:
			return {
				...state,
				order: {
					info: {},
					isLoading: false,
					error: true
				}
			}
		case LOADING_ORDERS:
			return {
				...state,
				orders: {
					list: [],
					isLoading: true,
					error: false
				}
			}
		case LOADING_ORDER:
			return {
				...state,
				order: {
					isLoading: true,
					info: {},
					error: false,
				}
			}
		default: return state;
	}
}

export default ordersReducer;
