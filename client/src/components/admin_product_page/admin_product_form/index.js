import React from 'react';
import {connect} from 'react-redux';

const AdminProductForm = (p) => {
	return (
		<form>
			<label>
				nombre:
				<input type='text' name='product_name' />
			</label>
			<label>
				stock:
				<input type='text' name='product_stock' />
			</label>
			<label>
				description:
				<textarea type='text' name='product_description'>
				</textarea>
			</label>

		</form>
	);
};

AdminProductForm.defaultProps = {
	name: "Final Fantasy VII Remake",
	stock: 100,
	description: {
		es:
			"El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan",
	}
}
export default AdminProductForm;
