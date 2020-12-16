import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../components/product';
import Catalog from '../components/catalog';
import Navbar from '../components/navbar';
import Step1 from '../components/order_detail/step_1';

function HomeRoutes() {
	return (
		<>
			<Navbar />
			<main className="main-container">
				<Route path='/products/:id' component={Product} />
				<Route exact path='/' component={Catalog} />
				<Route exact path='/orders/1' component={Step1} />
			</main>
		</>
	);
}

export default HomeRoutes;