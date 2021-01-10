import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Product from '../components/product';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CartSideBar from '../components/cart_sidebar';
import Carousel from '../components/carousel';
import Step1 from '../components/order_detail/step_1';
import Step2 from '../components/order_detail/step_2';
import Step3 from '../components/order_detail/step_3';
import HomePage from '../components/home_page';
import SearchPage from '../components/search_page';
import UserPage from '../components/user_page';
import Login from '../components/login';
import SignUp from '../components/sign_up';
import EditUser from '../components/user_page/edit_profile';
import UserOrders from '../components/user_page/orders';
import UserOrderDetail from '../components/user_page/order_details';
import { getProducts } from '../redux/actions/products_actions';
import { getCategories } from '../redux/actions/categories_actions';
import { toggleCart } from '../redux/actions/global_actions';
import Reset from './../components/reset/index';
import ReviewForm from '../components/reviews/review_form';
import { getDiscounts } from './../redux/actions/products_actions';

function HomeRoutes() {

	const dispatch = useDispatch();
	const products = useSelector(state => state.productsReducer.products.productList);
	const discounts = useSelector(state => state.productsReducer.productsDiscount.list);
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
			dispatch(getProducts({ name: 'stock', order: 'DESC', limit: 8 }));
			dispatch(getDiscounts());
		}
		if (!categories.length) {
			dispatch(getCategories());
		}

	}, [])

	return (
		<>
			<Login />
			<Navbar toggleModal={toggleModal} cartNumber={cart} />
			<CartSideBar language={language} closeCallback={toggleModal} show={showCart} cart={cart} />
			<Route exact path='/'>
				<Carousel products={discounts} />
			</Route>
			<main className='main-container'>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/search' component={SearchPage} />
				<Route path='/products/:id' component={Product} />
				<Route exact path='/order'>
					<Step1 language={language} cart={cart} />
				</Route>
				<Route exact path='/order/payment'>
					<Step2 language={language} cart={cart} />
				</Route>
				<Route exact path='/order/detail'>
					<Step3 language={language} cart={cart} />
				</Route>
				<Route exact path='/user' component={UserPage} />
				<Route exact path='/reset' component={Reset} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/edit' component={EditUser} />
				<Route exact path='/orders' component={UserOrders} />
				<Route exact path='/orders/:id' component={UserOrderDetail} />
				<Route exact path='/review/:id' component={ReviewForm} />
			</main>
			<Footer language={language} />
		</>
	);
}

export default HomeRoutes;