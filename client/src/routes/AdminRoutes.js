import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/products_actions';
import { getCategories } from './../redux/actions/categories_actions';
import { getOrders } from '../redux/actions/orders_actions';
import { getUsers } from '../redux/actions/users_actions';

import AdminSideBar from '../components/admin_page/admin_side_bar';
import AdminProductList from '../components/admin_page/admin_product_list';
import AdminCategoryForm from '../components/admin_page/admin_category_form';
import AdminCategoryList from '../components/admin_page/admin_category_list';
import AdminProductForm from './../components/admin_page/admin_product_form/index';
import AdminOrderList from './../components/admin_page/admin_order_list';
import AdminUserList from './../components/admin_page/admin_user_list';
import AdminOrderDetail from './../components/admin_page/admin_order_detail/index';

function AdminRoutes() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productsReducer.products.productList);
	const categories = useSelector((state) => state.categoriesReducer.categories.list);
	const orders = useSelector((state) => state.ordersReducer.orders.list);
	const users = useSelector((state) => state.usersReducer.users.list);
	const language = useSelector((state) => state.globalReducer.language);

	useEffect(() => {
		dispatch(getProducts({ isActive: true }));
		dispatch(getCategories());
		dispatch(getOrders());
		dispatch(getUsers());
	}, []);

	return (
		<>
			<AdminSideBar />
			<main className="admin-main-container">
				<Route exact path='/admin'>
					<AdminProductList products={products} />
				</Route>

				<Route exact path='/admin/product'>
					<AdminProductForm categories={categories} />
				</Route>

				<Route exact path='/admin/product/:id'>
					<AdminProductForm categories={categories} />
				</Route>

				<Route exact path='/admin/categories'>
					<AdminCategoryList categories={categories} language={language} />
				</Route>

				<Route exact path='/admin/category' component={AdminCategoryForm} />

				<Route exact path='/admin/category/:id' component={AdminCategoryForm} />

				<Route exact path='/admin/users'>
					<AdminUserList users={users} />
				</Route>

				<Route exact path='/admin/orders'>
					<AdminOrderList orders={orders} />
				</Route>

				<Route exact path='/admin/order/:id'>
					<AdminOrderDetail />
				</Route>
			</main>
		</>
	);
}

export default AdminRoutes;