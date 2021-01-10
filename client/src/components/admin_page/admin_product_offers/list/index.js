import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleActiveProduct, getProductsByName, getProducts } from '../../../../redux/actions/products_actions';
import { Btn, DataTable } from '../../../styles/styled_global';
import { Link } from 'react-router-dom';
import SearchBar from '../../../search_bar';
import { useToasts } from 'react-toast-notifications';
import strings from './strings';
import { deleteDiscount } from './../../../../redux/actions/products_actions';
import { storage } from '../../../../firebase';

const AdminProductOfferList = ({ products }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const { addToast } = useToasts();

	const [orderSort, setOrderSort] = useState({
		id: 'ASC',
		name: 'ASC',
		stock: 'ASC'
	})

	const handleDelete = (prod) => {
		if (window.confirm(`${s.swDeleteTitle} ${prod.name}?`)) {
			dispatch(deleteDiscount(prod.id))
				.then((status) => {
					switch (status) {
						case 200:
							storage.refFromURL(prod.banner_image).delete();
							return addToast(s.toastOfferDeleted, { appearance: 'success' });
						case 404:
							return addToast('Product not found', { appearance: 'error' });
						case 500:
						default:
							return addToast('Server error', { appearance: 'error' });
					}
				})
		}
	}

	// const handleSort = (ev) => {
	// 	if (orderSort.hasOwnProperty(ev.target.id)) {
	// 		const object = { ...orderSort }
	// 		object[ev.target.id] = object[ev.target.id] === 'ASC' ? 'DESC' : 'ASC'
	// 		for (const key in object) {
	// 			let element = document.getElementById(key);
	// 			if (ev.target.id === key) {
	// 				object[element.id] === 'ASC' ? element.classList.replace('up', 'down') : element.classList.replace('down', 'up')
	// 				element.classList.toggle('active', true)
	// 			} else {
	// 				element.classList.remove('active');
	// 			}
	// 		}
	// 		setOrderSort(object)
	// 		dispatch(getProducts({ name: ev.target.id, order: object[ev.target.id] }))
	// 	}
	// }

	return (
		<>
			<h1 className='admin-h1'>{s.title}</h1>
			<DataTable>
				<thead>
					<tr /*onClick={handleSort}*/>
						<td id="id" className="cell-small icon down active">ID</td>
						<td id="name" className="icon down">{s.tableTitle}</td>
						<td id="stock" className="cell-small icon down">{s.original}</td>
						<td className="cell-small">{s.discountPrice}</td>
						<td className="cell-small">{s.discount}</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{products && products.map(prod => (
						<tr key={prod.id}>
							<td>{prod.id}</td>
							<td>{prod.name}</td>
							<td>${prod.real_price}</td>
							<td>${prod.price}</td>
							<td>{100 - Math.round(((prod.price / prod.real_price) * 100))}%</td>
							<td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}/offer/new`}><button>{s.tableEditButton}</button></Link></li>
									<li><button onClick={() => handleDelete(prod)}>{s.tableDeleteButton}</button></li>
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</DataTable>
		</>
	);
};

export default AdminProductOfferList;