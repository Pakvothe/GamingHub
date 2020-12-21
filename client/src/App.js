import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { GlobalStyle } from './components/styles/styled_global';
import { lightTheme, darkTheme } from './components/styles/themes';
import { Route, Switch } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {
	const theme = useSelector(state => state.globalReducer.theme)

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