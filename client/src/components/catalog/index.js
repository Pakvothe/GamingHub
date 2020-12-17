import React from 'react'
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';
import strings from './strings';

const Catalog = ({ products, isLoading, error, language }) => {
	return (
		<>
			<CatalogStyled>
				{isLoading && <h1>{strings[language].loading}</h1>}
				{error && <h1 style={{ margin: "20px", textAlign: "center" }}>{strings[language].no_products}</h1>}
				{!!products.length && products.map(product => (
					<ProductCard language={language} game={product} key={product.id} />)
				)}
			</CatalogStyled>
		</>
	);
}

export default Catalog;