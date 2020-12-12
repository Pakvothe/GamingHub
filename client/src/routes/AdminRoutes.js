import React from 'react';
import { Route } from 'react-router-dom';
import AdminSideBar from '../components/admin_page/admin_side_bar';
import AdminProductContainer from '../components/admin_page/admin_product_container';
import AdminCategoryForm from '../components/admin_page/admin_category_form';

function AdminRoutes() {
	return (
		<>
			<AdminSideBar />
			<div style={{ display: "inline-block" }}>
				<Route path='/admin/products' component={AdminProductContainer} />
				<Route path='/admin/categories' component={AdminCategoryForm} />
			</div>
		</>
	);
}

export default AdminRoutes;