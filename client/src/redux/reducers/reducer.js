import { CHANGE_LANGUAGE } from './../constants';
const initialState = { language: localStorage.getItem('language') || 'es' }

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: action.payload
			}

		default: return state;
	}
}

export default Reducer;