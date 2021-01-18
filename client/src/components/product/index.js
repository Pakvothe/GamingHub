import React, { useEffect } from "react";
import { ProductDetail } from "./product_detail/index.js";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions/products_actions';
import { StyledLoader } from "../styles/styled_global.js";
import strings from './strings.js';

const Product = () => {
	const language = useSelector(state => state.globalReducer.language);
	const s = strings[language];
	const { isLoading, product, error } = useSelector(state => state.productsReducer.productDetail);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(id));
	}, [id, dispatch]);

	return (
		<>
			{(error || !product.is_active) && !isLoading && <h1 style={{ margin: "20px", textAlign: "center" }}>{s.exist}</h1>}
			<StyledLoader
				active={isLoading}
				spinner
				text={s.loading}
				className='loading__overlay'
				classNamePrefix='loading__'
			/>
			{!isLoading && product.is_active && <ProductDetail product={product} />}
		</>
	);
};

export default Product;
