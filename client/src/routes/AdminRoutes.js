import React from 'react';
import { Route } from 'react-router-dom';
import AdminSideBar from '../components/admin_page/admin_side_bar';
import AdminProductList from '../components/admin_page/admin_product_list';
import AdminCategoryForm from '../components/admin_page/admin_category_form';
import AdminProductForm from './../components/admin_page/admin_product_form/index';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/products_actions';
import { getCategories } from './../redux/actions/categories_actions';

function AdminRoutes() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productsReducer.products.productList);
	const categories = useSelector((state) => state.categoriesReducer.categoryList);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getCategories());
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
				<Route exact path='/admin/categories' component={AdminCategoryForm} />
			</main>
		</>
	);
}

export default AdminRoutes;