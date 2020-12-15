import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, toggleActiveProduct } from '../../../redux/actions/products_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link } from 'react-router-dom';

const AdminProductList = ({ products }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteProduct(id));
		alert('Product deleted.');
	}

	const handleInput = (ev) => {
		console.log(ev.target.name);
		ev.persist();
		dispatch(toggleActiveProduct(ev.target.name))
	}

	return (
		<>
			{/* <SearchBar /> */}
			<Link to="/admin/product"><Btn className="btn-ppal" >Agregar Producto</Btn></Link>
			<DataTable>
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
							{/* <td>
								<CheckboxLabel className="no-shadow check" checked={input.is_active[prod.id]}>
									<input
										type='checkbox'
										value={input.is_active[prod.id]}
										onChange={handleInput}
										name='is_active'
									/>
								</CheckboxLabel>
							</td> */}
							<td><input type="checkbox" checked={prod.is_active} onChange={handleInput} name={prod.id} /></td>
							<td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}`}><button>Editar</button></Link></li>
									<li><button onClick={() => handleDelete(prod.id)}>Eliminar</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>

		</>
	);
};

export default AdminProductList;