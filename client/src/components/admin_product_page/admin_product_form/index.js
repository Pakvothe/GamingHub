import React from 'react';

const AdminProductForm = () => {
	return (
		<div>
			<form>
				<label>
					Nombre:
				<input type='text' name='product_name' />
				</label>
				<label>
					Stock:
				<input type='text' name='product_stock' />
				</label>
				<label>
					Descripcion español:
				<textarea type='text' name='product_description_es'>
					</textarea>
				</label>
				<label>
					Descripcion Ingles:
				<textarea type='text' name='product_description_en'>
					</textarea>
				</label>
				<label>
					Price:
				<input type='text' name='product_price' />
				</label>
				<label>
					Activo:
				<input type='checkbox' name='product_is_active' />
				</label>
			</form>
			<button>Enviar</button>
		</div>
	);
};

export default AdminProductForm;
