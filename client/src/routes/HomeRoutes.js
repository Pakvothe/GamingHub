import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';
import Product from '../components/product';
import Navbar from '../components/navbar';
import AboutUs from '../components/about_us';
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
import HelpUser from '../components/user_page/help';
import { getProducts } from '../redux/actions/products_actions';
import { getCategories } from '../redux/actions/categories_actions';
import { toggleCart } from '../redux/actions/global_actions';
import Reset from './../components/reset/index';
import ReviewForm from '../components/reviews/review_form';
import { getDiscounts } from './../redux/actions/products_actions';
import Terms from '../components/terms';
import Privacy from '../components/privacy';
import Legal from '../components/legal';
import Confetti from 'react-confetti'
import queryString from 'query-string';

function HomeRoutes() {

	const dispatch = useDispatch();
	const discounts = useSelector(state => state.productsReducer.productsDiscount.list);
	const cart = useSelector(state => state.cartReducer.cart.list);
	const showCart = useSelector(state => state.globalReducer.showCart);
	const language = useSelector(state => state.globalReducer.language);
	const location = useLocation();
	const parsed = queryString.parse(location.search);
	//cart modal ->
	const toggleModal = () => {
		dispatch(toggleCart());
	}
	// <-

	useEffect(() => {
		dispatch(getProducts({ name: 'stock', order: 'DESC', limit: 8 }));
		dispatch(getDiscounts());
		dispatch(getCategories());

	}, [dispatch])

	return (
		<>
			{parsed.status === 'completed' && <Confetti
				width={window.innerWidth - 16}
				height={window.innerHeight}

			/>}
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
					<Step2 language={language} />
				</Route>
				<Route exact path='/order/detail'>
					<Step3 language={language} />
				</Route>
				<Route exact path='/about' component={AboutUs} />
				<Route exact path='/user' component={UserPage} />
				<Route exact path='/reset' component={Reset} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/edit' component={EditUser} />
				<Route exact path='/orders' component={UserOrders} />
				<Route exact path='/help' component={HelpUser} />
				<Route exact path='/orders/:id' component={UserOrderDetail} />
				<Route exact path='/review/:id' component={ReviewForm} />
				<Route exact path='/terms' component={Terms} />
				<Route exact path='/privacy' component={Privacy} />
				<Route exact path='/legal' component={Legal} />
			</main>
			<Footer language={language} />
		</>
	);
}

export default HomeRoutes;