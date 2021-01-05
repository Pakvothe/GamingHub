import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { GlobalStyle } from './components/styles/styled_global';
import { lightTheme, darkTheme } from './components/styles/themes';
import { Route, Switch } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes'
import AdminRoutes from './routes/AdminRoutes'
import { setCart } from './redux/actions/cart_actions';
import { getUser } from './redux/actions/users_actions';

function App() {
	const theme = useSelector(state => state.globalReducer.theme)
	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem('jwt')) dispatch(getUser())
		dispatch(setCart())
	}, [])
	return (
		<>
			<GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
			<Switch>
				<Route path='/admin' component={AdminRoutes} />
				<Route path='/' component={HomeRoutes} />
				{/* <Route>
					<NotFound/>
				</Route> */}
			</Switch>
		</>
	);
}

export default App;