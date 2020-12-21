import {
	SET_CART,
	ADD_UNIT_ITEM_CART,
	REMOVE_UNIT_ITEM_CART,
	ADD_ITEM_CART,
	DELETE_ITEM_CART,
	CLEAR_CART,
	ERROR_CART,
	LOADING_CART
} from './../constants';

const initialState = {
	cart: {
		isLoading: false,
		list: [],
		error: false
	},
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CART:
			return {
				...state,
				cart: {
					error: false,
					isLoading: false,
					list: action.payload,
				}
			}
		case LOADING_CART:
			return {
				...state,
				cart: {
					list: [],
					error: false,
					isLoading: true
				}
			}
		case ERROR_CART:
			return {
				...state,
				cart: {
					isLoading: false,
					list: [],
					error: true
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
					list: []
				}
			}
		default: return state;
	}
}

export default cartReducer;
