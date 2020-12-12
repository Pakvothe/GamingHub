import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBar from './components/search_bar';
import ProductCard from './components/product_card';
import AdminProductContainer from './components/admin_page/admin_product_container';
import Product from './components/product';
import Catalog from './components/catalog';
import AdminSideBar from './components/admin_page/admin_side_bar'
import AdminCategoryForm from './components/admin_page/admin_category_form'
function App() {
	return (
		<>
			<Route path='/testing/search-bar' component={SearchBar} />
			<Route path='/testing/product-card' component={ProductCard} />
			<Route path='/testing/admin' component={AdminProductContainer} />
			<Route path='/testing/admin-bar' component={AdminSideBar} />
			<Route path='/products/:id' component={Product} />
			<Route path='/testing/catalog' component={Catalog} />
			<Route path='/products/' component={Catalog} />
			<Route path='/testing/category-form' component={AdminCategoryForm} />
		</>
	);
}

export default App;