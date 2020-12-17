import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Catalog from '../catalog'
const SearchPage = () => {
	useParams();
	const { productList: products, isLoading, error } = useSelector(state => state.productsReducer.productsFilter);
	const language = useSelector(state => state.globalReducer.language);
	return (
		<div>
			<Catalog products={products} isLoading={isLoading} error={error} language={language} />
		</div>
	)
}

export default SearchPage
