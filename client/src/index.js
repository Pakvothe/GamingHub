import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux'
import store from './redux/store/store'

import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ToastProvider autoDismiss={true} autoDismissTimeout={4000}>
				<App />
			</ToastProvider>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
