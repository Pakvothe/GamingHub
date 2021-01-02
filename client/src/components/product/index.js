import React, { useEffect } from "react";
import { ProductDetail } from "./product_detail/index.js";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions/products_actions';

const Product = () => {
	const { isLoading, product, error } = useSelector(state => state.productsReducer.productDetail);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(id));
	}, [id, dispatch]);

	return (
		<>
			{(error || !product.is_active) && !isLoading && <h1 style={{ margin: "20px", textAlign: "center" }}>El producto no existe</h1>}
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && product.is_active && <ProductDetail product={product} />}
		</>
	);
};

export default Product;
