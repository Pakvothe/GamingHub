import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import globalReducer from './globalReducer'

export default combineReducers({
	globalReducer,
	categoriesReducer,
	productsReducer
})