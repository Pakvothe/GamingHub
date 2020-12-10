import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBar from './components/search_bar';
import ProductCard from './components/product_card';

function App() {
	return (
		<>
			<Route path="/testing/search-bar" component={SearchBar} />
			<Route path="/testing/product-card" component={ProductCard} />
		</>
	);
}

export default App;
