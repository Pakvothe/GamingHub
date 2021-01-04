import {
	SET_CART,
	ADD_UNIT_ITEM_CART,
	REMOVE_UNIT_ITEM_CART,
	ADD_ITEM_CART,
	DELETE_ITEM_CART,
	CLEAR_CART,
	ERROR_CART,
	LOADING_CART,
	SET_STOCK,
	EDIT_STOCK,
	DELETE_ITEM_STOCK
} from './../constants';

const initialState = {
	cart: {
		isLoading: false,
		list: [],
		stock: {},
		error: false
	},
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cart: {
					...state.cart,
					error: false,
					isLoading: false,
					list: action.payload,
				}
			}
		case LOADING_CART:
			return {
				...state,
				cart: {
					...state.cart,
					list: [],
					error: false,
					isLoading: true
				}
			}
		case ERROR_CART:
			return {
				...state,
				cart: {
					...state.cart,
					isLoading: false,
					list: [],
					error: true
				}
			}
		case SET_STOCK:
			return {
				...state,
				cart: {
					...state.cart,
					stock: action.payload
				}
			}
		case EDIT_STOCK:
			if (state.cart.stock[action.payload.id]) {
				return {
					...state,
					cart: {
						...state.cart,
						stock: {
							...state.cart.stock,
							[action.payload.id]: state.cart.stock[action.payload.id] - action.payload.quantity
						}
					}
				}
			} else {
				return {
					...state,
					cart: {
						...state.cart,
						stock: {
							...state.cart.stock,
							[action.payload.id]: action.payload.stock - action.payload.quantity
						}
					}
				}
			}
		case DELETE_ITEM_STOCK:
			const newstock = {
				...state.cart.stock,
			};
			delete newstock[action.payload];
			return {
				...state,
				cart: {
					...state.cart,
					stock: newstock
				}
			}
		case ADD_UNIT_ITEM_CART:
			return {
				...state,
				cart: {
					...state.cart,
					list: state.cart.list.map(el => {
						if (el.id === action.payload.id) {
							el.quantity++;
						}
						return el;
					})
				}
			}
		case REMOVE_UNIT_ITEM_CART:
			return {
				...state,
				cart: {
					...state.cart,
					list: state.cart.list.map(el => {
						if (el.id === action.payload.id) {
							el.quantity = Math.max(1, el.quantity - 1);
						}
						return el;
					})
				}
			}
		case ADD_ITEM_CART:
			let found = state.cart.list.find(game => game.id === action.payload.id);
			if (found)
				return {
					...state,
					cart: {
						...state.cart,
						list: state.cart.list.map(prod => {
							if (prod.id === action.payload.id) {
								prod.quantity += action.payload.quantity;
							}
							return prod;
						})
					}
				}
			else return {
				...state,
				cart: {
					...state.cart,
					list: [
						...state.cart.list,
						action.payload
					]
				}
			}

		case DELETE_ITEM_CART:
			return {
				...state,
				cart: {
					...state.cart,
					list: state.cart.list.filter(product => product.id !== action.payload)
				}
			}
		case CLEAR_CART:
			return {
				...state,
				cart: {
					...state.cart,
					list: [],
					stock: {}
				}
			}
		default: return state;
	}
}

export default cartReducer;
