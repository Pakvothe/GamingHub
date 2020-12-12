import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/categories_actions';
import ProductForm from '../admin_product_form/';
import SearchBar from '../admin_search_bar/';

const AdminProductContainer = (p) => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categoriesReducer);
	const [state, setState] = useState({
		show_form: false,
		show_products: false
	});

	useEffect(() => {
		dispatch(getCategories())
	}, [])

	const handleForm = () => {
		setState({
			show_form: true,
			show_products: false
		})
	};

	const handleProduct = () => {
		setState({
			show_form: false,
			show_products: true
		})
	};

	const showForm = state.show_form;
	const showProducts = state.show_products;
	return (
		<div>
			<SearchBar />
			<div>
				<button onClick={handleProduct}>Mostrar Todos</button>
				<button onClick={handleForm}>Agregar Producto</button>
			</div>
			{ showForm && categories && (<ProductForm categories={categories} />)}
			{ showProducts &&
				<>
					<table>
						<thead>
							<tr>
								<td>ID</td>
								<td>Título</td>
								<td>Stock</td>
								<td>Visible</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{p.products.map(prod => (
								<tr key={prod.id}>
									<td>{prod.id}</td>
									<td>{prod.name}</td>
									<td>{prod.stock}</td>
									<td><input type="checkbox" checked={prod.is_active} /></td>
									<td>
										<ul>
											<li><button>Editar</button></li>
											<li><button>Eliminar</button></li>
										</ul>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			}
		</div>
	);
};

AdminProductContainer.defaultProps = {
	products: [
		{
			name: 'Final Fantasy VII Remake',
			id: 1,
			stock: 100,
			description_es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
			description_en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.',
			price: 52.38,
			is_active: false
		},
		{
			name: 'FIFA 21',
			id: 2,
			stock: 200,
			description_es: 'Los desarrolladores del juego han tenido años para alcanzar la perfección y, como resultado, hay poco en lo que se ha interferido para arruinar el clásico tan querido. Como siempre, es la licencia lo que atrae a los compradores, y esta edición no es diferente con la asombrosa cantidad de 17,000 jugadores de 700 clubes que juegan en 30 ligas para elegir, intercambiar y transferir. Esto significa que puedes jugar los partidos de una temporada completa sin repetir a un jugador, incluso en el mismo equipo, si así lo deseas.',
			description_en: 'The game developers have had years to reach perfection and as a result there is little that has been interfered with to ruin the well-loved classic. As always, it is the licensing that attracts buyers, and this edition is no different with a staggering 17,000 players from 700 clubs playing in 30 leagues to choose from, swap and transfer and change the fortunes of! This means you could play out an entire season’s worth of games without repeating a player, even in the same team, if you wanted to! ',
			price: 40.72,
			is_active: true
		}
	]
}

export default AdminProductContainer;
