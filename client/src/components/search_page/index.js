import React from 'react'
import { useSelector } from 'react-redux';
import Catalog from '../catalog';

const SearchPage = () => {
	const { productList: products, isLoading, error } = useSelector(state => state.productsReducer.productsFilter);
	const language = useSelector(state => state.globalReducer.language);

	return (
		<div>
			<Catalog products={products.filter(pr => pr.is_active)}
				isLoading={isLoading} error={error} language={language} />
		</div>
	)
}

export default SearchPage
