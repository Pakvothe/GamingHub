import React from 'react';

const AdminProductForm = () => {
	return (
		<form>
			<label>
				Nombre:
				<input type='text' name='product_name' required />
			</label>
			<label>
				Stock:
				<input type='number' name='product_stock' required />
			</label>
			<label>
				Descripcion español:
				<textarea type='text' name='product_description_es' required>
				</textarea>
			</label>
			<label>
				Descripcion Ingles:
				<textarea type='text' name='product_description_en' required>
				</textarea>
			</label>
			<label>
				Price:
				<input type='number' step='0.01' name='product_price' required />
			</label>
			<label>
				Imagen:
				<input type='url' name='product_img' required />
			</label>
			<label>
				Activo:
				<input type='checkbox' name='product_is_active' />
			</label>
			<button>Enviar</button>
		</form>
	);
};

export default AdminProductForm;