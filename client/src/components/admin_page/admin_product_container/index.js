import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/categories_actions';
import { deleteProduct, getProducts } from '../../../redux/actions/products_actions';
import ProductForm from '../admin_product_form/';
import SearchBar from '../admin_search_bar/';
import { Btn } from './../../styles/styled_global';
import { Link } from 'react-router-dom';

const AdminProductContainer = (p) => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productsReducer.products.productList);

	const handleDelete = (id) => {
		console.log(id);
		dispatch(deleteProduct(id));
		alert('Product deleted.');
	}

	return (
		<>
			{/* <SearchBar /> */}
			<div>

				<Btn className="btn-ppal" ><Link to="/admin/product">Agregar Producto</Link></Btn>
			</div>
			<table>
				<thead>
					<tr>
						<td>ID</td>
						<td>Título</td>
						<td>Stock</td>
						<td>Visible</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{products && products.map(prod => (
						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.name}</td>
							<td>{prod.stock}</td>
							<td><input type="checkbox" checked={prod.is_active} /></td>
							<td>
								<ul>
									<li><button><Link to={`/admin/product/${prod.id}`}>Editar</Link></button></li>
									<li><button onClick={() => handleDelete(prod.id)}>Eliminar</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>

		</>
	);
};

export default AdminProductContainer;