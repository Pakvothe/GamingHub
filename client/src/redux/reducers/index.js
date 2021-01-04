import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import ordersReducer from './ordersReducer'
import globalReducer from './globalReducer'
import usersReducer from './usersReducer'

export default combineReducers({
	globalReducer,
	categoriesReducer,
	productsReducer,
	ordersReducer,
	usersReducer,
	cartReducer
})