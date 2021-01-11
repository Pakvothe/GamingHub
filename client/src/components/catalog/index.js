import React from 'react'
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';
import strings from './strings';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { PaginationStyled } from '../styles/styled_pagination';
//Styles =>
import arrowLeft from '../../assets/img/arrow-left.svg';
import arrowRight from '../../assets/img/arrow-right.svg';
import { StyledLoader, StyledSVG } from '../styles/styled_global';

const Catalog = ({ products, isLoading, error, language, handlePageChange }) => {
	const count = useSelector(state => state.productsReducer.count)
	const currentPage = useSelector(state => state.globalReducer.currentPage);
	const s = strings[language];

	if (error) return <h1 className="main-title">ERROR</h1>

	if (!isLoading && !products.length) return <h1 className="main-title">{s.no_products}</h1>
	return (
		<>
			<StyledLoader
				active={isLoading}
				spinner
				text={s.loading}
				className='loading__overlay'
				classNamePrefix='loading__'
			>
				<CatalogStyled id="catalog" >
					{products && products.map(product => {
						if (product.is_active) {
							return <ProductCard language={language} game={product} key={product.id} />
						}
					})}
				</CatalogStyled>
				<PaginationStyled>
					<ReactPaginate
						forcePage={currentPage}
						pageCount={Math.ceil(count / 8)}
						marginPagesDisplayed={2}
						pageRangeDisplayed={5}
						onPageChange={handlePageChange}
						previousLabel={<StyledSVG src={arrowLeft} />}
						nextLabel={<StyledSVG src={arrowRight} />}
						breakLabel={'...'}
						breakClassName={'break-me'}
						containerClassName={'pagination'}
						subContainerClassName={'pages pagination'}
						activeClassName={'active'}
						disabledClassName={'disabled'}
						previousClassName={'controls'}
						nextClassName={'controls'}
					/>
				</PaginationStyled>
			</StyledLoader>
		</>
	);
}

export default Catalog;