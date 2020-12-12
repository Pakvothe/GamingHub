import React from 'react'
import ProductCard from '../product_card'
import { CatalogStyled } from './../styles/styled_catalog';

const Catalog = (p) => {
	return (
		<CatalogStyled >
			{p.products.map(card => <ProductCard data={card} key={card.id} />)}
		</CatalogStyled>
	);
}

Catalog.defaultProps = {
	products: [
		{
			id: 1,
			name: 'Final Fantasy VII Remake cualquier cosa',
			stock: 100,
			description_es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
			description_en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.',
			price: 52.38,
			is_active: true,
			image: "https://i.pinimg.com/736x/63/9d/40/639d408ab8d9aa45fe9b5506521d0149--final-fantasy-vii-remake-reunions.jpg"
		},
		{
			id: 2,
			name: 'FIFA 21',
			stock: 200,
			description_es: 'Los desarrolladores del juego han tenido años para alcanzar la perfección y, como resultado, hay poco en lo que se ha interferido para arruinar el clásico tan querido. Como siempre, es la licencia lo que atrae a los compradores, y esta edición no es diferente con la asombrosa cantidad de 17,000 jugadores de 700 clubes que juegan en 30 ligas para elegir, intercambiar y transferir. Esto significa que puedes jugar los partidos de una temporada completa sin repetir a un jugador, incluso en el mismo equipo, si así lo deseas.',
			description_en: 'The game developers have had years to reach perfection and as a result there is little that has been interfered with to ruin the well-loved classic. As always, it is the licensing that attracts buyers, and this edition is no different with a staggering 17,000 players from 700 clubs playing in 30 leagues to choose from, swap and transfer and change the fortunes of! This means you could play out an entire season’s worth of games without repeating a player, even in the same team, if you wanted to! ',
			price: 40.72,
			is_active: true,
			image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/buy/fifapre20-standard-pc.jpg"

		},
		{
			id: 3,
			name: 'CyberPunk 2077',
			stock: 200,
			description_es: 'Los desarrolladores del juego han tenido años para alcanzar la perfección y, como resultado, hay poco en lo que se ha interferido para arruinar el clásico tan querido. Como siempre, es la licencia lo que atrae a los compradores, y esta edición no es diferente con la asombrosa cantidad de 17,000 jugadores de 700 clubes que juegan en 30 ligas para elegir, intercambiar y transferir. Esto significa que puedes jugar los partidos de una temporada completa sin repetir a un jugador, incluso en el mismo equipo, si así lo deseas.',
			description_en: 'The game developers have had years to reach perfection and as a result there is little that has been interfered with to ruin the well-loved classic. As always, it is the licensing that attracts buyers, and this edition is no different with a staggering 17,000 players from 700 clubs playing in 30 leagues to choose from, swap and transfer and change the fortunes of! This means you could play out an entire season’s worth of games without repeating a player, even in the same team, if you wanted to! ',
			price: 100.72,
			is_active: true,
			image: "https://vignette.wikia.nocookie.net/mkwikia/images/0/0e/Mortal_Kombat_X_1_Print_Cover_A.jpg"
		},
		{
			id: 4,
			name: 'Final Fantasy VII Remake',
			stock: 100,
			description_es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
			description_en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.',
			price: 52.38,
			is_active: true,
			image: "https://i.pinimg.com/736x/63/9d/40/639d408ab8d9aa45fe9b5506521d0149--final-fantasy-vii-remake-reunions.jpg"
		},
		{
			id: 5,
			name: 'Mortal Kombat X',
			stock: 200,
			description_es: 'Los desarrolladores del juego han tenido años para alcanzar la perfección y, como resultado, hay poco en lo que se ha interferido para arruinar el clásico tan querido. Como siempre, es la licencia lo que atrae a los compradores, y esta edición no es diferente con la asombrosa cantidad de 17,000 jugadores de 700 clubes que juegan en 30 ligas para elegir, intercambiar y transferir. Esto significa que puedes jugar los partidos de una temporada completa sin repetir a un jugador, incluso en el mismo equipo, si así lo deseas.',
			description_en: 'The game developers have had years to reach perfection and as a result there is little that has been interfered with to ruin the well-loved classic. As always, it is the licensing that attracts buyers, and this edition is no different with a staggering 17,000 players from 700 clubs playing in 30 leagues to choose from, swap and transfer and change the fortunes of! This means you could play out an entire season’s worth of games without repeating a player, even in the same team, if you wanted to! ',
			price: 100.72,
			is_active: true,
			image: "https://vignette.wikia.nocookie.net/mkwikia/images/0/0e/Mortal_Kombat_X_1_Print_Cover_A.jpg"
		}
	]
}

export default Catalog;