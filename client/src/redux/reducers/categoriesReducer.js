import { ADD_CATEGORY, GET_CATEGORIES } from '../constants.js';

const initialState = {
	isLoading: false,
	categoryList: [],
	error: false
};

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categoryList: action.payload
			}
		case ADD_CATEGORY:
			return {
				...state,
				categoryList: [
					...state.categoryList,
					action.payload
				]
			}
		default: return state;
	}
}

export default categoriesReducer;
