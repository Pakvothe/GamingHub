import React from 'react';
import { Route } from 'react-router-dom';
import AdminSideBar from '../components/admin_page/admin_side_bar';
import AdminProductContainer from '../components/admin_page/admin_product_container';
import AdminCategoryForm from '../components/admin_page/admin_category_form';

function AdminRoutes() {
	return (
		<>
			<AdminSideBar />
			<main className="admin-main-container">
				<Route path='/admin/products' component={AdminProductContainer} />
				<Route path='/admin/categories' component={AdminCategoryForm} />
			</main>
		</>
	);
}

export default AdminRoutes;