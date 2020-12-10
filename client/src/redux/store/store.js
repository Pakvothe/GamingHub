import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../reducers/reducer';
import thunk from 'redux-thunk';

const store = createStore(
	Reducer,
	compose
		(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
			applyMiddleware(thunk))
);

export default store;