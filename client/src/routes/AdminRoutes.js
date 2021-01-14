import React, { useEffect } from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getDiscounts } from '../redux/actions/products_actions';
import { getCategories } from './../redux/actions/categories_actions';
import { getOrders } from '../redux/actions/orders_actions';
import { getUsers } from '../redux/actions/users_actions';
import { StyledLoader } from '../components/styles/styled_global';
import strings from '../components/product/strings';

import AdminSideBar from '../components/admin_page/admin_side_bar';
import AdminProductList from '../components/admin_page/admin_product_list';
import AdminCategoryForm from '../components/admin_page/admin_category_form';
import AdminCategoryList from '../components/admin_page/admin_category_list';
import AdminProductForm from './../components/admin_page/admin_product_form/index';
import AdminProductStockList from './../components/admin_page/admin_product_stock/list';
import AdminProductStockForm from './../components/admin_page/admin_product_stock/form';
import AdminOrderList from './../components/admin_page/admin_order_list';
import AdminUserList from './../components/admin_page/admin_user_list';
import AdminOrderDetail from './../components/admin_page/admin_order_detail/index';
import AdminProductOfferList from './../components/admin_page/admin_product_offers/list';
import AdminProductOfferForm from './../components/admin_page/admin_product_offers/form/';
import AdminCharts from '../components/admin_page/admin_charts';


function AdminRoutes() {
	const history = useHistory()
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productsReducer.products.productList);
	const discounts = useSelector(state => state.productsReducer.productsDiscount.list);
	const categories = useSelector((state) => state.categoriesReducer.categories.list);
	const orders = useSelector((state) => state.ordersReducer.orders.list);
	const users = useSelector((state) => state.usersReducer.users.list);
	const user = useSelector((state) => state.usersReducer.user.info);
	const userLoading = useSelector((state) => state.usersReducer.user.isLoading);
	const language = useSelector((state) => state.globalReducer.language);
	const s = strings[language];

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('jwt'))) history.push('/');
	}, []);

	useEffect(() => {
		if (user.is_admin === false) return history.push('/');
		if (user.is_admin === true) {
			dispatch(getProducts({ isActive: true }));
			dispatch(getDiscounts());
			dispatch(getCategories());
			dispatch(getOrders({ all: true }));
			dispatch(getUsers());
		}
	}, [user]);


	if (userLoading) return <StyledLoader
		active={userLoading}
		spinner
		text={s.loading}
		className='loading__overlay'
		classNamePrefix='loading__'
	/>

	return (
		<>
			<AdminSideBar />
			<main className="admin-main-container">
				<Route exact path='/admin' render={() => <AdminCharts />} />
				<Route exact path='/admin/products' render={() => <AdminProductList products={products} />} />
				<Route exact path='/admin/product' render={() => <AdminProductForm categories={categories} />} />
				<Route exact path='/admin/product/:id' render={() => <AdminProductForm categories={categories} />} />
				<Route exact path='/admin/product/:id/stock' render={() => <AdminProductStockList categories={categories} />} />
				<Route exact path='/admin/product/:id/stock/new' component={AdminProductStockForm} />
				<Route exact path='/admin/product/offer/list' render={() => <AdminProductOfferList products={discounts} />} />
				<Route exact path='/admin/product/:id/offer/new' component={AdminProductOfferForm} />
				<Route exact path='/admin/categories' render={() => <AdminCategoryList categories={categories} language={language} />} />
				<Route exact path='/admin/category' component={AdminCategoryForm} />
				<Route exact path='/admin/category/:id' component={AdminCategoryForm} />
				<Route exact path='/admin/users' render={() => <AdminUserList users={users} />} />
				<Route exact path='/admin/orders' render={() => <AdminOrderList orders={orders} />} />
				<Route exact path='/admin/order/:id' component={AdminOrderDetail} />
			</main>
		</>
	);
}

export default AdminRoutes;