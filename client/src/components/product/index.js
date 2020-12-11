import React, { useEffect } from "react";
import { MainBox } from "../styles/styled_product.js";
import { ProductDetail } from "./product_detail/index.js";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux/actions/products_actions';

const Product = p => {
	const { isLoading, product, error } = useSelector(state => state.productDetail);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(id));
	}, []);

	return (
		<MainBox>
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && !!Object.keys(product).length && <ProductDetail product={product} />}
			{error && <h1 style={{ margin: "20px", textAlign: "center" }}>Producto no existe</h1>}
		</MainBox >
	);
};

Product.defaultProps = {
	name: "Final Fantasy VII Remake",
	stock: 10,
	description: {
		es:
			"El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan",
		en:
			"The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.",
	},
	price: 52.38,
	score: 5,
	sales: 370,
	is_active: true,
	categories: {
		es: ["RPG", "Fantasia", "Aventura"],
		en: ["RPG", "Fantasy", "Adventure"],
	},
	images: [
		"https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/buy/fifapre20-standard-pc.jpg",
	],
};

export default Product;
