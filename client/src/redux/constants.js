export function BEARER() {
	if (JSON.parse(localStorage.getItem('jwt'))) {
		return {
			headers: {
				"Authorization": `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
			}
		}
	} else return null;
}

export function QUERY_FUNCTION(payload) {
	let string = ''

	if (payload && !!Object.keys(payload).length) {
		for (const key in payload) {
			string += `&${key}=${payload[key]}`
		}
		string = `?${string.slice(1)}`
	}
	return string;
}

//Global actions =>
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const TOGGLE_CART = 'TOGGLE_CART';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_THEME = 'SET_THEME';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD';
export const RESET_CURRENT_PAGE = 'RESET_CURRENT_PAGE';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export const OPEN_LOGIN = 'OPEN_LOGIN';
export const OPEN_VIDEO = 'OPEN_VIDEO';
export const CLOSE_VIDEO = 'CLOSE_VIDEO';

//Product actions =>
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS';

export const GET_FILTER_PRODUCTS = 'GET_FILTER_PRODUCTS';
export const GET_FILTER_PRODUCTS_ERROR = 'GET_FILTER_PRODUCTS_ERROR';
export const LOADING_FILTER_PRODUCTS = 'LOADING_FILTER_PRODUCTS';
export const EMPTY_FILTER = 'EMPTY_FILTER';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const LOADING_PRODUCT = 'LOADING_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
export const TOGGLE_ACTIVE_PRODUCT = 'TOGGLE_ACTIVE_PRODUCT';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const LOADING_DISCOUNTS = 'LOADING_DISCOUNTS';
export const GET_DISCOUNTS = 'GET_DISCOUNTS';
export const GET_DISCOUNTS_ERROR = 'GET_DISCOUNTS_ERROR';

// export const ADD_DISCOUNT = 'ADD_DISCOUNT';
// export const EDIT_DISCOUNT = 'EDIT_DISCOUNT';
// export const DELETE_DISCOUNT = 'DELETE_DISCOUNT';

export const DELETE_IMAGE = 'DELETE_IMAGE';

export const GET_SERIALS = 'GET_SERIALS';
export const ADD_SERIAL = 'ADD_SERIAL';
export const EDIT_SERIAL = 'EDIT_SERIAL';
export const DELETE_SERIAL = 'DELETE_SERIAL';
export const ERROR_SERIAL = 'ERROR_SERIAL';
export const CLEAR_ERROR_SERIAL = 'ERROR_SERIAL';

export const GET_REVIEWS = 'GET_REVIEWS';

//Category actions =>
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const GET_ERROR_CATEGORY = 'GET_ERROR_CATEGORY';

//Order actions =>
export const GET_ORDERS = 'GET_ORDERS';
export const ADD_ORDER = 'ADD_ORDER';
export const ORDERS_ERROR = 'ORDERS_ERROR';
export const LOADING_ORDERS = 'LOADING_ORDERS';
export const GET_ORDER = 'GET_ORDER';
export const LOADING_ORDER = 'LOADING_ORDER';
export const ORDER_ERROR = 'ORDER_ERROR';

//User actions =>
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';
export const USER_ERROR = 'USER_ERROR';
export const LOADING_USER = 'LOADING_USER';
export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';
export const USERS_ERROR = 'USERS_ERROR';
export const LOADING_USERS = 'LOADING_USERS';

//Cart actions => 
export const SET_CART = 'SET_CART';
export const ADD_UNIT_ITEM_CART = 'ADD_UNIT_ITEM_CART';
export const REMOVE_UNIT_ITEM_CART = 'REMOVE_UNIT_ITEM_CART';
export const ADD_ITEM_CART = 'ADD_ITEM_CART';
export const DELETE_ITEM_CART = 'DELETE_ITEM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ERROR_CART = 'ERROR_CART';
export const LOADING_CART = 'LOADING_CART';
export const SET_STOCK = 'SET_STOCK';
export const EDIT_STOCK = 'EDIT_STOCK';
export const DELETE_ITEM_STOCK = 'DELETE_ITEM_STOCK';
export const SET_DISCOUNT = 'SET_DISCOUNT';