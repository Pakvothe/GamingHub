import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from '../../../styles/styled_global';
import { Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import strings from './strings';
import { deleteDiscount } from './../../../../redux/actions/products_actions';
import { storage } from '../../../../firebase';

const AdminProductOfferList = ({ products }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const { addToast } = useToasts();

	const handleDelete = (prod) => {
		if (window.confirm(`${s.swDeleteTitle} ${prod.name}?`)) {
			dispatch(deleteDiscount(prod.id))
				.then((status) => {
					switch (status) {
						case 200:
							storage.refFromURL(prod.banner_image).delete();
							return addToast(s.toastOfferDeleted, { appearance: 'success' });
						case 404:
							return addToast(s.toastNotFound, { appearance: 'error' });
						case 500:
						default:
							return addToast(s.toastServerError, { appearance: 'error' });
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
			<DataTable className="responsiveTable">
				<Thead>
					<Tr /*onClick={handleSort}*/>
						<Th id="id" className="cell-small icon down active">ID</Th>
						<Th id="name" className="icon down">{s.tableTitle}</Th>
						<Th id="stock" className="cell-small icon down">{s.original}</Th>
						<Th className="cell-small">{s.discountPrice}</Th>
						<Th className="cell-small">{s.discount}</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{products && products.map(prod => (
						<Tr key={prod.id}>
							<Td>{prod.id}</Td>
							<Td>{prod.name}</Td>
							<Td>${prod.real_price}</Td>
							<Td>${prod.price}</Td>
							<Td>{100 - Math.round(((prod.price / prod.real_price) * 100))}%</Td>
							<Td>
								<ul>
									<li><Link to={`/admin/product/${prod.id}/offer/new`}><button>{s.tableEditButton}</button></Link></li>
									<li><button onClick={() => handleDelete(prod)}>{s.tableDeleteButton}</button></li>
								</ul>
							</Td>
						</Tr>
					))}
				</Tbody>
			</DataTable>
		</>
	);
};

export default AdminProductOfferList;