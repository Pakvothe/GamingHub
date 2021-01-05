import {
	ADD_USER,
	EDIT_USER,
	GET_USER,
	LOADING_USER,
	USER_ERROR,
	GET_USERS,
	DELETE_USER,
	LOADING_USERS,
	USERS_ERROR
} from '../constants.js';

const initialState = {
	user: {
		info: localStorage.getItem('user') || {},
		jwt: localStorage.getItem('jwt') || '',
		isLoading: false,
		error: false
	},
	users: {
		list: [],
		isLoading: false,
		error: false
	}
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER: {
			return {
				...state,
				user: {
					...state.user,
					info: action.payload,
					jwt: action.payload
				}
			}
		}

		case EDIT_USER: {
			return {
				...state,
				users: {
					...state.users,
					list: state.users.list.map(user => user.id === action.payload.id ? action.payload : user)
				}

			}
		}

		case GET_USER: {
			return {
				...state,
				user: {
					...state.user,
					info: action.payload,
					isLoading: false
				}
			}
		}

		case LOADING_USER: {
			return {
				...state,
				user: {
					...state.user,
					isLoading: true
				}
			}
		}

		case USER_ERROR: {
			return {
				...state,
				user: {
					...state.user,
					error: true,
					isLoading: false
				}
			}
		}

		case GET_USERS:
			return {
				...state,
				users: {
					...state.users,
					list: action.payload,
					isLoading: false
				}
			}

		case DELETE_USER: {
			return {
				...state,
				users: {
					...state.users,
					list: state.users.list.filter(user => user.id !== action.payload.id)
				}
			}
		}

		case LOADING_USERS: {
			return {
				...state,
				users: {
					...state.users,
					isLoading: true
				}
			}
		}

		case USERS_ERROR: {
			return {
				...state,
				users: {
					...state.users,
					isLoading: false,
					error: true
				}
			}
		}

		default: return state;
	}
}

export default usersReducer;
