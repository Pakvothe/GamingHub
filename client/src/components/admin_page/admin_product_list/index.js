import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, toggleActiveProduct, getProductsByName } from '../../../redux/actions/products_actions';
import { Btn, DataTable } from '../../styles/styled_global';
import { Link } from 'react-router-dom';
import SearchBar from '../../search_bar';
import { useToasts } from 'react-toast-notifications';

const AdminProductList = ({ products }) => {
	const dispatch = useDispatch();

	const { addToast } = useToasts();
	const handleDelete = (prod) => {
		if (window.confirm(`Are you sure you want to delete ${prod.name}?`)) {
			dispatch(deleteProduct(prod.id));
			addToast(`product deleted successfully`, { appearance: 'info' })
		}
	}

	const handleInput = (ev) => {
		ev.persist();
		dispatch(toggleActiveProduct(ev.target.name))
	}

	const handleOrder = () => {
		dispatch(getProductsByName());
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to="/admin/product"><Btn className="btn-ppal" >Agregar Producto</Btn></Link>
				<SearchBar />
			</div>
			<DataTable>
				<thead>
					<tr>
						<td className="cell-small">ID</td>
						<td onClick={handleOrder}>Título</td>
						<td className="cell-small">Stock</td>
						<td className="cell-small">Visible</td>
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
									<li><button onClick={() => handleDelete(prod)}>Eliminar</button></li>
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