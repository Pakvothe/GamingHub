import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes'
import AdminRoutes from './routes/AdminRoutes'

function App() {
	return (
		<>
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