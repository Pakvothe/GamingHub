const products = [
	{
		name: 'Final Fantasy VII Remake',
		stock: 100,
		description_es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
		description_en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.',
		price: 52.38,
		score: 5,
		sales: 370,
		is_active: true,
		images: [
			{
				url: 'https://elamigosedition.com/uploads/posts/2019-05/1557844033_final-fantasy-vii-cover-download.jpg'
			}
		],
		serials: [
			{
				serial: '349U2TUT4H6HGGJ2CHUK'
			}, {
				serial: 'U97GTCE6SRSET1DDERFM'
			}, {
				serial: 'DAKF77DLELHU7P4A1DDX'
			}, {
				serial: 'F9TZ9P6KGFLPO742WP21'
			}, {
				serial: 'SAF0SK6CO4R4NPJELNRK'
			}, {
				serial: 'NT690HYGTF9JUT4I98A3'
			},
		]
	},
	{
		name: 'FIFA 21',
		stock: 200,
		description_es: 'Los desarrolladores del juego han tenido años para alcanzar la perfección y, como resultado, hay poco en lo que se ha interferido para arruinar el clásico tan querido. Como siempre, es la licencia lo que atrae a los compradores, y esta edición no es diferente con la asombrosa cantidad de 17,000 jugadores de 700 clubes que juegan en 30 ligas para elegir, intercambiar y transferir. Esto significa que puedes jugar los partidos de una temporada completa sin repetir a un jugador, incluso en el mismo equipo, si así lo deseas.',
		description_en: 'The game developers have had years to reach perfection and as a result there is little that has been interfered with to ruin the well-loved classic. As always, it is the licensing that attracts buyers, and this edition is no different with a staggering 17,000 players from 700 clubs playing in 30 leagues to choose from, swap and transfer and change the fortunes of! This means you could play out an entire season’s worth of games without repeating a player, even in the same team, if you wanted to! ',
		price: 40.72,
		score: 4.3,
		sales: 432,
		is_active: true,
		images: [
			{
				url: 'https://gamesland.com.pe/wp-content/uploads/2020/10/FIFA21ChampionsEdition-PS4_3401053f-d041-4a74-8b3d-e9117418c357_grande.jpg'
			}
		],
		serials: [
			{
				serial: '629U7XLT5H6SCGJ2CENZ'
			}, {
				serial: 'F9TZ9P6IGFSME742WP21'
			}, {
				serial: 'L67GTCE6TRDFT1DXWVCM'
			}
		]
	},
	{
		name: 'Cyberpunk 2077',
		stock: 50,
		description_es: 'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones',
		description_en: 'Cyberpunk 2077 is an open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. Your character is V, a mercenary who pursues a unique implant that allows him to achieve immortality. You can customize your character is cybernetic enhancements, abilities, and playstyle to shape a world and story that depends on your choices.',
		price: 56.81,
		score: 4.2,
		sales: 300,
		is_active: true,
		images: [
			{
				url: 'https://www.alfabetajuega.com/wp-content/uploads/2020/09/cyberpunk-2077-1.jpg'
			},
			{
				url: 'https://as.com/meristation/imagenes/2020/10/04/header_image/875065311601806430.jpg'
			}
		],
		serials: [
			{
				serial: 'D91GMT5X1JDW7YG1GHIS'
			}, {
				serial: 'I23LZH5C2IQYWRTRZ2BO'
			}, {
				serial: '8XJTJZTWESCIQNV9ZR2C4'
			}, {
				serial: 'PAQ34MHDIA1DZUUH4DB8'
			}, {
				serial: '4CSYW3ZMWWPRRLKWMRAB'
			}, {
				serial: 'DDLFRJKN5KB4DE3H2WYO'
			}, {
				serial: '9RVIIF3W586FAYVWPTFD'
			}
		]
	},
	{
		name: 'Age of Empires II: Definitive Edition',
		stock: 41,
		description_es: 'Age of Empires II: Definitive Edition para PC es el relanzamiento del clásico de estrategia en tiempo real en su vigésimo aniversario. El juego conserva todo el encanto y la popularidad del original, pero lo combina con veinte años de mejoras en el mundo de los juegos: gráficos de alta definición, jugabilidad y visuales mejorados y cuatro nuevas civilizaciones, así como una nueva campaña para un jugador llamada The Last Khans.',
		description_en: 'Age of Empires II: Definitive Edition for PC is the re-release of the real-time strategy classic on its 20th anniversary. The game retains all the charm and popularity of the original, but combines it with twenty years of improvements in the gaming world: high definition graphics, improved gameplay and visuals and four new civilizations, as well as a new single-player campaign called The last kans.',
		price: 9.74,
		score: 4.5,
		sales: 432,
		is_active: true,
		images: [
			{
				url: 'https://images.g2a.com/newlayout/323x433/1x1x0/ebeb8989e737/5e3ab6057e696c11f20eb312'
			}
		],
		serials: [
			{
				serial: 'XONF7PMUOLHU7P4D1QQX'
			}
		]
	},
	{
		name: 'Human: Fall Flat',
		stock: 849,
		description_es: 'Human: Fall Flat para PC es un juego de puzles de plataforma perfecto para los que tienen un sentido del humor estrafalario y un don para ver las cosas desde otra perspectiva. Cuenta con animaciones cómicas, a pesar de que los puzles pueden llegar a ser muy complicados, y pasarás horas riendo de las payasadas de tu personaje o maldiciendo mientras intentas resolver el puzle en turno.',
		description_en: 'Human: Fall Flat for PC is a platform puzzle game that is perfect for those with a quirky sense of humour and a knack for seeing things a little differently. The animations are comedic even as the puzzles can be fiendish and you will spend hours alternately chuckling at your character’s antics or cursing as you try to work out how to solve the current puzzle.',
		price: 3.19,
		score: 4.2,
		sales: 15,
		is_active: true,
		images: [
			{
				url: 'https://images.g2a.com/newlayout/323x433/1x1x0/95e6403a1f21/5a13d9edae653a1a2f2f5ba2'
			}
		],
		serials: [
			{
				serial: 'N0Z90KJTTW7TZO4I27A1'
			}, {
				serial: 'CJA0SK6CO4R4NPJEKNRK'
			}, {
				serial: 'M7CQ2VARGXQFYGZURKG0'
			}
		]
	},
	{
		name: 'Dead by Daylight',
		stock: 100,
		description_es: 'En general, hay dos maneras de jugar: cuatro jugadores en línea unen sus fuerzas contra un único asesino, el cual es controlado por un jugador que también está línea. Así que puedes ser el asesino o puedes ser uno de los cuatro que trabajan en su contra.',
		description_en: 'In general, there are two ways to play: four online players join forces against a single killer, who is controlled by one player who is also online. So you can be the murderer or you can be one of the four working against him.',
		price: 6.42,
		score: 4.0,
		sales: 40,
		is_active: true,
		images: [
			{
				url: 'https://cdn-products.eneba.com/resized-products/PPOqVG3kxWxx-D0e3NCIrXK2uNedzePrBuhNSZkzNU4_350x200_1x-0.jpeg'
			}
		]
	},
	{
		name: 'Grand Theft Auto V',
		stock: 412,
		description_es: 'Grand Theft Auto V para PC es un juego de acción y aventuras, el quinto de la serie GTA. Como ya es tradición en los juegos de esta serie, se obtienen puntos mediante la comisión de delitos. El juego alterna entre la narrativa visual y la jugabilidad en tercera y en primera persona. El jugador toma el papel de tres criminales tratando de huir de una determinada agencia del gobierno y cometiendo asaltos. No se elige un solo personaje para jugar, la narrativa del juego salta de un personaje a otro.',
		description_en: 'Grand Theft Auto V for PC is an action adventure game, the fifth in the GTA series. As with the other games in the series, you score points by committing crimes. The game alternates between third-person narrative and play and first-person play, and you play as three criminals trying to avoid a determined government agency and committing heists. You do not pick just one character to play as, the game’s narrative jumps from one character to the next.',
		price: 12.32,
		score: 4,
		sales: 3323,
		is_active: true
	},
	{
		name: 'Minecraft',
		stock: 34,
		description_es: 'Minecraft para PC es el videojuego más vendido de todos los tiempos. Solo eso debería ser suficiente para convencerte. Pero veamos un poco más de información acerca de por qué deberías empezar a disfrutar de este juego ahora mismo. Se trata de un juego de tipo ‘sandbox’ en el que los jugadores deben minar, construir y fabricar su propio mundo ideal.',
		description_en: "Minecraft for PC is the best-selling video game of all time. That alone should be enough to convince you. But lets see a little more information about why you should start enjoying this game right now. It is a 'sandbox' type game in which players must mine, build and craft their own ideal world.",
		price: 24.13,
		score: 4.8,
		sales: 1000,
		is_active: true
	},
	{
		name: 'Dark Souls 3 Edicion de Lujo',
		stock: 500,
		description_es: 'El juego es un cuento de fantasía con una fuerte influencia surrealista japonesa que le otorga una vibra sobrenatural y espeluznante. En general, la premisa del juego es matar a los monstruos y aprovechar sus almas, las cuales puedes acumular para aumentar de nivel.',
		description_en: 'The game is a fantasy tale with a strong Japanese surreal influence that gives it a supernatural and spooky vibe. In general, the premise of the game is to kill monsters and take advantage of their souls, which you can accumulate to increase your level.',
		price: 18.45,
		score: 4.1,
		sales: 320,
		is_active: true
	},
	{
		name: 'Forza Horizon 4',
		stock: 482,
		description_es: 'Forza Horizon 4 para PC es un juego de carreras de mundo abierto en el que los jugadores compiten en línea contra otros jugadores, pero de una manera en la que no tienes que interactuar con ellos si lo que te apetece es pasar un rato a solas. También cuenta con una modalidad sin conexión, que puedes aprovechar si tu internet está caído, o si tienes ganas de entretenerte a solas por un rato.',
		description_en: 'Forza Horizon 4 is an open world racing game where players compete against other players who are online, but in a way that means that you do not have to engage with them if you feel like some alone time. The game can also be played offline if necessary, if your internet is down, or you feel like going your own way for a bit.',
		price: 159.62,
		score: 4.9,
		sales: 100,
		is_active: true
	},
	{
		name: 'Euro Truck Simulator 2',
		stock: 8,
		description_es: 'Euro Truck Simulator 2 para PC es el segundo juego de la serie Truck Simulator, un videojuego de simulación y vehículos donde el jugador recorre una visión ligeramente ficticia de Europa, haciendo entregas y recogiendo mercancías a lo largo del camino a la vez que aprende todo lo que hay que saber acerca de su vehículo.',
		description_en: 'Euro Truck Simulator 2 is the second game in the Truck Simulator series and is a vehicle simulation game in which the player drives across a lightly fictionalised version of Europe, making deliveries and pick-ups and learning all about their vehicle.',
		price: 70.12,
		score: 4.1,
		sales: 3453,
		is_active: true
	},
	{
		name: 'Los Sims 4',
		stock: 1000,
		description_es: 'Los Sims 4 para PC es un juego de control y simulación de vida, el juego más vendido de 2014 y 2015, y que durante un tiempo se ubicó en lo más alto de las listas de éxitos en todos los formatos disponibles. Hoy en día podemos encontrar una gran variedad de juegos de los Sims, desde los juegos principales de la serie (como éste), hasta los paquetes de expansión y complementos que suelen ser lanzados con frecuencia: todos dando prueba de la persistente popularidad de la serie.        ',
		description_en: 'The Sims 4 for PC is a life simulation and control game, the best-selling game of 2014 and 2015, which for a time was at the top of the charts in all available formats. Today we can find a wide variety of Sims games, from the main games in the series (like this one), to expansion packs and add-ons that tend to be released frequently: all attesting to the series continuing popularity .',
		price: 8.65,
		score: 3.5,
		sales: 833,
		is_active: true
	},
	{
		name: 'Cuphead',
		stock: 0,
		description_es: "Cuphead es un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.",
		description_en: 'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.',
		price: 12.27,
		score: 4.2,
		sales: 520,
		is_active: false
	},
	{
		name: 'Overwatch',
		stock: 1000,
		description_es: 'Cuando los jugadores se conectan a la partida, son puestos en dos equipos de seis junto con otros jugadores. Cada jugador puede elegir de entre un máximo de 30 personajes (en el juego, estos son llamados héroes). Los personajes son excelentes: renderizados individualmente, completados con rasgos de personalidad y peculiaridades físicas que son encantadoras y únicas. Estas peculiaridades pueden incluir una sonrisa atractiva, un mechón de pelo cayendo sobre su rostro, y muchas otras características sutiles pero significativas.',
		description_en: 'When players connect to the game, they are put into two teams of six along with other players. Each player can choose from a maximum of 30 characters (in the game, these are called heroes). The characters are excellent - individually rendered, complete with personality traits and physical quirks that are charming and unique. These quirks can include an attractive smile, a lock of hair falling over his face, and many other subtle but significant features.',
		price: 18.56,
		score: 3.9,
		sales: 1000,
		is_active: true
	},
	{
		name: 'Horizon Zero Dawn',
		stock: 10,
		description_es: 'LA TIERRA YA NO NOS PERTENECE. Vive la misión legendaria de Aloy para desvelar los secretos de un mundo dominado por máquinas letales. La joven cazadora, una paria, lucha por revelar su pasado, descubrir su destino y detener una amenaza catastrófica para el futuro.',
		description_en: 'Experience Aloy’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny… and stop a catastrophic threat to the future.',
		price: 30.56,
		score: 3.8,
		sales: 100,
		is_active: true
	},
	{
		name: "Assassin's Creed: Unity",
		stock: 46,
		description_es: 'Assassin’s Creed® Unity es un juego de acción/aventura con el que te sumerges en un París lleno de vida durante su época más oscura: la Revolución Francesa. Tendrás control total sobre Arno, ya que podrás personalizar su equipo tanto visual como técnicamente. Además de contar contar con una gran campaña individual, Assassin’s Creed Unity te da la oportunidad de jugar junto con 3 amigos en misiones concretas de una campaña cooperativa online. Durante el juego, formarás parte de momentos clave de la historia francesa que dieron lugar al enorme París que hoy todos conocemos.',
		description_en: "Assassin’s Creed® Unity is an action/adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customising Arno's equipement to make the experience unique to you, both visually and mechanically. In addition to an epic single-player experience, Assassin’s Creed Unity delivers the excitement of playing with up to three friends through online cooperative gameplay in specific missions. Throughout the game, take part in one of the most pivotal moments of French history in a compelling storyline and a breath-taking playground that brought you the city of lights of today.",
		price: 5.56,
		score: 5,
		sales: 1046,
		is_active: true
	},
	{
		name: 'FarCry 5',
		stock: 34,
		description_es: 'Far Cry 5 para PC es un alocado y divertido shooter de acción y aventuras en primera persona en el que debes enfrentarte a oponentes de los más raros y extravagantes. Animales y enemigos intentarán (y a veces lograrán) eliminarte por igual, aunque también cabe la posibilidad de que otros animales y extraños presentes en el terreno de juego te hagan el favor de eliminar a tus enemigos de forma aleatoria. ¡Incluso lo más alejado de la realidad puede suceder en este disparatado juego!',
		description_en: 'Far Cry 5 for PC is a crazy and fun first-person action-adventure shooter in which you have to face off against the most unusual and extravagant opponents. Animals and enemies will try (and sometimes succeed) to eliminate you equally, although there is also the possibility that other animals and strangers present on the field of play will do you the favor of eliminating your enemies at random. Even the furthest thing from reality can happen in this crazy game!',
		price: 14.84,
		score: 4.1,
		sales: 10,
		is_active: true
	},
	{
		name: 'Mortal Kombat XI',
		stock: 0,
		description_es: 'MK está de regreso y mejor que nunca en la próxima evolución de la icónica franquicia. Las nuevas variaciones de personajes personalizados te dan un control sin precedentes de tus luchadores para que sean tuyos.El nuevo motor gráfico muestra cada momento deslumbrante y deslumbrante, acercándote tanto a la pelea que puedes sentirlo.Con una lista de Klassic Fighters nuevos y recurrentes, el mejor modo de historia cinematográfica de Mortal Kombat continúa la saga épica durante más de 25 años en desarrollo.',
		description_en: "MK is back and better than ever in the next evolution of the iconic franchise. The all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
		price: 12.5,
		score: 4.9,
		sales: 251,
		is_active: false
	},
	{
		name: 'DiRT Rally 2.0',
		stock: 200,
		description_es: 'Déjate llevar por tus instintos en la experiencia todoterreno más inmersiva hasta la fecha, la cual incluye un nuevo y auténtico modelo de manejo, elección de neumáticos y desgaste de la superficie. Conduce tu coche de rally por zonas todoterreno reales de Nueva Zelanda, Argentina, España, Polonia, Australia y Estados Unidos, acompañado únicamente por tu copiloto, y guiado por tus instintos.',
		description_en: 'Indulge your instincts in the most immersive off- road experience to date, including an authentic new model of handling, tire choice and surface wear.Drive your rally car through real off - road areas of New Zealand, Argentina, Spain, Poland, Australia and the United States, accompanied only by your co - driver, and guided by your instincts.',
		price: 6.18,
		score: 4.5,
		sales: 100,
		is_active: true
	},
	{
		name: 'The Elder Scrolls V: Skyrim Special Edition',
		stock: 76,
		description_es: 'Skyrim: Edición Especial para PC es una versión remasterizada del aclamado RPG de acción desarrollado por Bethesda y representa la quinta edición del juego de fantasía. Los juegos de Skyrim (de la serie Elder Scroll) han recibido múltiples premios, y son conocidos por su jugabilidad de mundo abierto, mundos cuidadosamente detallados y libertad para que el jugador dirija la acción y, hasta cierto punto, la historia.',
		description_en: 'Skyrim Special Edition for PC is a remastered version of the highly popular action role-playing game from Bethesda and it represents the fifth edition of the fantasy game. The Skyrim games (the Elder Scroll series) are multi award-winning games known for their open world play, immensely detailed worlds and free-form gameplay that allow the player to drive the action, and to a certain extent, the story.',
		price: 14.72,
		score: 4.7,
		sales: 345,
		is_active: true
	}
];

module.exports = products;