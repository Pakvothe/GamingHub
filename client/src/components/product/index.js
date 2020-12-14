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
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && !!Object.keys(product).length && <ProductDetail product={product} />}
			{error && <h1 style={{ margin: "20px", textAlign: "center" }}>El producto no existe</h1>}
		</>
	);
};

export default Product;
