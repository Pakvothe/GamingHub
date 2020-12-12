import { GET_CATEGORIES } from '../constants.js';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return action.payload
		default: return state;
	}
}

export default categoriesReducer;
