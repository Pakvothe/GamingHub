import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
	Reducers,
	compose
		(
			applyMiddleware(thunk),
			// window.devToolsExtension ? window.devToolsExtension() : f => f
		)
);

export default store;