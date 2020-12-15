import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import ordersReducer from './ordersReducer'
import globalReducer from './globalReducer'

export default combineReducers({
	globalReducer,
	categoriesReducer,
	productsReducer,
	ordersReducer
})