import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../components/product';
import Catalog from '../components/catalog';
import Navbar from '../components/navbar';

function HomeRoutes() {
	return (
		<>
			<Navbar />
			<main className="main-container">
				<Route path='/products/:id' component={Product} />
				<Route exact path='/' component={Catalog} />
			</main>
		</>
	);
}

export default HomeRoutes;