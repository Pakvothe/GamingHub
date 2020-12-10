import React from 'react';
import { connect } from 'react-redux';

const AdminProductForm = () => {
	return (
		<form>
			<label>
				Nombre:
				<input type='text' name='product_name' />
			</label>
			<label>
				Stock:
				<input type='text' name='product_stock' />
			</label>
			<label>
				Description:
				<textarea type='text' name='product_description'>
				</textarea>
			</label>
			<label>
				Price:
				<input type='text' name='product_price' />
			</label>
			<label>
				Activo:
				<input type='checkbox' name='product_is_active' />
			</label>

		</form>
	);
};

export default AdminProductForm;
