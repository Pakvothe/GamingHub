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
					...state.orders,
					isLoading: false,
					list: action.payload
				}
			}
		case GET_ORDER:
			return {
				...state,
				order: {
					...state.orders,
					isLoading: false,
					info: action.payload
				}
			}
		case ADD_ORDER:
			return {
				...state,
				order: {
					...state.order,
					info: action.payload
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
					...state.orders,
					isLoading: false,
					error: action.payload
				}
			}
		case LOADING_ORDERS:
			return {
				...state,
				orders: {
					...state.orders,
					isLoading: true
				}
			}
		case LOADING_ORDER:
			return {
				...state,
				order: {
					...state.orders,
					isLoading: true
				}
			}
		default: return state;
	}
}

export default ordersReducer;
