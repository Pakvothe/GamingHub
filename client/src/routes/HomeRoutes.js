import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Product from '../components/product';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CartSideBar from '../components/cart_sidebar';
import Carousel from '../components/carousel';
import Step1 from '../components/order_detail/step_1';
import HomePage from '../components/home_page';
import SearchPage from '../components/search_page';
import UserPage from '../components/user_page';
import { getProducts } from '../redux/actions/products_actions';
import { getCategories } from '../redux/actions/categories_actions';
import { toggleCart } from '../redux/actions/global_actions';

function HomeRoutes() {

	const dispatch = useDispatch();
	const products = useSelector(state => state.productsReducer.products.productList);
	const cart = useSelector(state => state.cartReducer.cart.list);
	const categories = useSelector(state => state.categoriesReducer.categories.list);
	const showCart = useSelector(state => state.globalReducer.showCart);
	const language = useSelector(state => state.globalReducer.language);

	//cart modal ->
	const toggleModal = () => {
		dispatch(toggleCart());
	}
	// <-

	useEffect(() => {
		if (!products.length) {
			dispatch(getProducts({ query: 'stock', order: 'DESC' }));
		}
		if (!categories.length) {
			dispatch(getCategories());
		}

	}, [])

	return (
		<>
			<Navbar toggleModal={toggleModal} />
			<CartSideBar language={language} closeCallback={toggleModal} show={showCart} order={cart} />
			<Route exact path='/' component={Carousel} />
			<main className="main-container">
				<Route exact path='/' component={HomePage} />
				<Route exact path='/search' component={SearchPage} />
				<Route path='/products/:id' component={Product} />
				<Route exact path='/orders/:id' component={Step1} />
				<Route exact path='/user' component={UserPage} />
			</main>
			<Footer />
		</>
	);
}

export default HomeRoutes;