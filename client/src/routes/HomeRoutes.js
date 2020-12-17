import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../components/product';
import Navbar from '../components/navbar';
import Step1 from '../components/order_detail/step_1';
import HomePage from '../components/home_page';
import SearchPage from '../components/search_page';

function HomeRoutes() {
	return (
		<>
			<Navbar />
			<main className="main-container">
				<Route exact path='/' component={HomePage} />
				<Route exact path='/search' component={SearchPage} />
				<Route path='/products/:id' component={Product} />
				<Route exact path='/orders/:id' component={Step1} />
			</main>
		</>
	);
}

export default HomeRoutes;