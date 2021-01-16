import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage } from '../../redux/actions/global_actions';
import { getSearchProducts } from '../../redux/actions/products_actions';
import Catalog from '../catalog';

const SearchPage = () => {

	const dispatch = useDispatch()

	const { productList: products, isLoading, error } = useSelector(state => state.productsReducer.productsFilter);
	const totalProducts = useSelector(state => state.productsReducer.products.productList);
	const language = useSelector(state => state.globalReducer.language);

	const limitPerPage = 8;

	const querystring = window.location.search
	const queryparams = new URLSearchParams(querystring)

	const handlePageChange = (ev) => {
		const offset = ev && ev?.selected !== 0 ? limitPerPage * ev.selected : 0;
		ev && dispatch(changeCurrentPage(ev.selected));
		dispatch(getSearchProducts(queryparams.get('query'), { limit: limitPerPage, offset }))
	}

	useEffect(handlePageChange, [totalProducts]);

	return (
		<div>
			{products && <Catalog products={products.filter(pr => pr.is_active)}
				isLoading={isLoading}
				error={error}
				language={language}
				handlePageChange={handlePageChange}
			/>}
		</div>
	)
}

export default SearchPage
