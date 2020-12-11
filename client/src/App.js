import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBar from './components/search_bar';
import ProductCard from './components/product_card';
import AdminProductContainer from './components/admin_page/admin_product_container'
import { AdminSidebar } from './components/admin_page/admin_side_bar/'

function App() {
	return (
		<>
			<Route path='/testing/search-bar' component={SearchBar} />
			<Route path='/testing/product-card' component={ProductCard} />
			<Route path='/testing/admin' component={AdminProductContainer} />
			<Route path='/testing/admin-bar' component={AdminSidebar} />
		</>
	);
}

export default App;
