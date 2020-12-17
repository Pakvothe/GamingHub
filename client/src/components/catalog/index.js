import React from 'react'
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';
import strings from './strings';

const Catalog = ({ products, isLoading, error, language }) => {

	if (isLoading) return <h1 className="main-title">{strings[language].loading}</h1>;

	if (error) return <h1 className="main-title">ERROR</h1>

	if (!products.length) return <h1 className="main-title">{strings[language].no_products}</h1>

	return (
		<>
			<CatalogStyled>
				{products.map(product => {
					if (product.is_active) {
						return <ProductCard language={language} game={product} key={product.id} />
					}
				})}
			</CatalogStyled>
		</>
	);
}

export default Catalog;