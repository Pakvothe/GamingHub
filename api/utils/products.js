const products = [
	{	// 1
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
				url: 'https://images.goodgam.es/WKE-gd3lr40/enlarge:1/plain/covers/17-final-fantasy-vii-remake-cover.jpg'
			},
			{
				url: 'https://images-na.ssl-images-amazon.com/images/I/71vXOkjuRZL.jpg'
			},
			{
				url: 'https://i.pinimg.com/originals/4c/64/9e/4c649e776ed2cf3137d2416fefadd0cd.jpg'
			}
		],
		serials: [
			{ serial: '349U2TUT4H6HGGJ2CHUK' },
			{ serial: 'U97GTCE6SRSET1DDERFM' },
			{ serial: 'DAKF77DLELHU7P4A1DDX' },
			{ serial: 'F9TZ9P6KGFLPO742WP21' },
			{ serial: 'SAF0SK6CO4R4NPJELNRK' },
			{ serial: 'NT690HYGTF9JUT4I98A3' }
		],
		catArray: [
			{
				name_en: 'rpg',
				name_es: 'rpg',
			}
		]
	},
	{ // 2
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
				url: 'https://i.imgur.com/RKCvcWJ.jpg'
			},
			{
				url: 'https://i.imgur.com/b1jmjTu.jpg'
			},
			{
				url: 'https://i.imgur.com/j4cnphA.jpg'
			}
		],
		serials: [
			{ serial: '629U7XLT5H6DDGJ2CENZ' },
			{ serial: 'F9TJ9P6I4FSME742WP21' },
			{ serial: 'L67GTCE6TRDFT1DXWVCM' },
			{ serial: 'D31GMT5X1FDW7YG1GHIS' },
			{ serial: 'A23LZH5C2IQYWRT9Z2BO' }
		],
		catArray: [
			{
				name_en: 'sports',
				name_es: 'deportes',
			},
			{
				name_en: 'simulation',
				name_es: 'simulacion',
			}
		]
	},
	{ // 3
		name: 'Cyberpunk 2077',
		stock: 35,
		description_es: 'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones',
		description_en: 'Cyberpunk 2077 is an open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. Your character is V, a mercenary who pursues a unique implant that allows him to achieve immortality. You can customize your character is cybernetic enhancements, abilities, and playstyle to shape a world and story that depends on your choices.',
		price: 56.81,
		score: 4.2,
		sales: 300,
		is_active: true,
		images: [
			{
				url: 'https://s1.gaming-cdn.com/images/products/840/orig/cyberpunk-2077-cover.jpg'
			}, {
				url: 'https://www.latercera.com/resizer/7JKi_UKjTHZMPlp2tHq4lHEzkEQ=/380x570/smart/www.latercera.com/resizer/zdNSDatPS4ZmzyRK6rRshb2qC3Y=/cloudfront-us-east-1.images.arcpublishing.com/copesa/NQYR57OX5ZANRIL6SNIZVNLXSA.jpg'
			}, {
				url: 'https://img.redbull.com/images/c_crop,x_765,y_0,h_2160,w_1728/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2019/06/25/859e6f99-2b77-472b-b399-d7831cdd071f/cyberpunk-pacifica-skyline'
			}
		],
		serials: [
			{ serial: '1HRVG0CW8NR3B0116LY7' },
			{ serial: 'VOSRMHIB4H3WJFRLRFAV' },
			{ serial: '9DTHX7SKWN65D01BKCZ1' },
			{ serial: 'SBH2KMT8JK67CK4G7AO1' },
			{ serial: 'ES50OYW6G6ICPUI4T7T2' },
			{ serial: 'SM5WZ7R6TX9A0NXGZ1HP' },
			{ serial: '0MADCQW5DO7AK3LHGVLN' },
			{ serial: '5SRUCQIW7WI7RGWIXNB1' },
			{ serial: '2A44N6RNJLTQUEPXYTD3' },
			{ serial: 'YIWI1H3JBMWIM6W374KN' },
			{ serial: 'URZF1HG4ZLWRLCNDXLD8' },
			{ serial: 'YM23B4YWS63WLBDGZTGN' },
			{ serial: '39CAVDNA2VUTOUMTI7P5' },
			{ serial: '7XH6ZILAWAVE53SESUQN' },
			{ serial: 'MP03LPAMEMEGKYI37IR9' },
			{ serial: '5LLHLRZKEUNFENJUQXOG' },
			{ serial: 'W35Y6VYBVM4Y71EAY3GG' },
			{ serial: 'Z2XDOOXYXBGWQ7X2AR7T' },
			{ serial: '7TC3AMTXGR72XCJAMOAG' },
			{ serial: 'OTMIWY4RFP0N1F230YB4' },
			{ serial: '97SFGIXHUZ9ZW870V2NC' },
			{ serial: 'QEPA74Y3XVNY4DNI46O3' },
			{ serial: 'WBRYO5MW5E3IOAX7W06B' },
			{ serial: 'XMDWAX874XYYWE79LASE' },
			{ serial: 'M161HHFPZVLDBQH0A0A9' },
			{ serial: 'YTD80EH7XXZR5HGU1C11' },
			{ serial: 'GRE6VKFVM6O28LQP5N0F' },
			{ serial: 'IFRC8TZP2NGIMU01YRIS' },
			{ serial: '6IH3GVFFFEKZFZFGL218' },
			{ serial: 'CEZHSQOM8VU2PNPVKEOX' },
			{ serial: '23KRMUFS6CGHAXNAPBZU' },
			{ serial: 'BK8FF91GPA4EE8A8SWON' },
			{ serial: 'G81CTFCIGWINOSID1FXP' },
			{ serial: 'H9UBKEKTX15CY1P2ACGQ' },
			{ serial: 'DPRPSO3H0J8OR9JRMQQQ' }
		],
		catArray: [
			{
				name_en: 'rpg',
				name_es: 'rpg',
			},
			{
				name_en: 'action',
				name_es: 'accion',
			}
		]
	},
	{ // 4
		name: 'Age of Empires II: Definitive Edition',
		stock: 1,
		description_es: 'Age of Empires II: Definitive Edition para PC es el relanzamiento del clásico de estrategia en tiempo real en su vigésimo aniversario. El juego conserva todo el encanto y la popularidad del original, pero lo combina con veinte años de mejoras en el mundo de los juegos: gráficos de alta definición, jugabilidad y visuales mejorados y cuatro nuevas civilizaciones, así como una nueva campaña para un jugador llamada The Last Khans.',
		description_en: 'Age of Empires II: Definitive Edition for PC is the re-release of the real-time strategy classic on its 20th anniversary. The game retains all the charm and popularity of the original, but combines it with twenty years of improvements in the gaming world: high definition graphics, improved gameplay and visuals and four new civilizations, as well as a new single-player campaign called The last kans.',
		price: 9.74,
		score: 4.5,
		sales: 432,
		is_active: true,
		images: [
			{
				url: 'https://store-images.s-microsoft.com/image/apps.55056.13678235101671609.c350aa6a-23e2-407c-94fd-5050e9bedb6f.f8b5d931-11f6-46e3-859f-54981d5b9d1b'
			},
			{
				url: 'https://www.latercera.com/resizer/DUkbeC0ixo5P-rn4sNcuAbuaKio=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/64X5UG6VPRHLRCGBQFLJ5UDJRU.jpg'
			},
			{
				url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1228810/ss_1a552052274732058f91d649716fffc5879d824e.1920x1080.jpg?t=1581558225'
			}
		],
		serials: [
			{ serial: 'XONF7PMUOLHU7P4D1QQX' }
		],
		catArray: [
			{
				name_en: 'strategy',
				name_es: 'estrategia',
			}
		]
	},
	{// 5
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
			},
			{
				url: 'https://howlongtobeat.com/games/38887_Human_Fall_Flat.jpg'
			},
			{
				url: 'https://img.redbull.com/images/c_crop,x_495,y_0,h_1080,w_864/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2018/01/02/fb42dbec-a037-446c-b9b4-78caefacb146/human-fall-flat-captura-de-pantalla'
			}
		],
		serials: [
			{ serial: 'N0Z90KJTTW7TZO4I27A1' },
			{ serial: 'CJA0SK6CO4R4NPJEKNRK' },
			{ serial: 'M7CQ2VARGXQFYGZURKG0' }
		],
		catArray: [
			{
				name_en: 'puzzle',
				name_es: 'puzzle',
			}
		]
	},
	{ // 6
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
			},
			{
				url: 'https://i.imgur.com/nBUqzwol.jpg'
			},
			{
				url: 'https://store-images.s-microsoft.com/image/apps.9625.64914418140717824.697fb780-c834-421d-a32c-27a6f14ec5b3.c438e847-3c53-44a6-97a8-1053541f7ff9'
			}
		],
		serials: [
			{ serial: 'N0Z90KJYTW7TZO4I27A1' },
			{ serial: 'CJA0SK6904R4NPJEKNRK' },
			{ serial: 'M7GH2VARGXQFYGZURKG0' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			}
		]
	},
	{ // 7
		name: 'Grand Theft Auto V',
		stock: 412,
		description_es: 'Grand Theft Auto V para PC es un juego de acción y aventuras, el quinto de la serie GTA. Como ya es tradición en los juegos de esta serie, se obtienen puntos mediante la comisión de delitos. El juego alterna entre la narrativa visual y la jugabilidad en tercera y en primera persona. El jugador toma el papel de tres criminales tratando de huir de una determinada agencia del gobierno y cometiendo asaltos. No se elige un solo personaje para jugar, la narrativa del juego salta de un personaje a otro.',
		description_en: 'Grand Theft Auto V for PC is an action adventure game, the fifth in the GTA series. As with the other games in the series, you score points by committing crimes. The game alternates between third-person narrative and play and first-person play, and you play as three criminals trying to avoid a determined government agency and committing heists. You do not pick just one character to play as, the game’s narrative jumps from one character to the next.',
		price: 12.32,
		score: 4,
		sales: 3323,
		is_active: true,
		images: [
			{
				url: 'https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg'
			},
			{
				url: 'https://www.xtrafondos.com/wallpapers/vertical/los-santos-gta-v-3229.jpg'
			},
			{
				url: 'https://i.pinimg.com/originals/a7/2f/1b/a72f1b6038c03ffa6bf37d38b6360f7c.jpg'
			}
		],
		serials: [
			{ serial: 'N0Z90KJYTW7TZO4I89A1' },
			{ serial: 'GJA0GK6904R4NPJEKNRK' },
			{ serial: 'M7GH2VARGXQFYGZUR123' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			},
			{
				name_en: 'shooter',
				name_es: 'disparos',
			}
		]

	},
	{ // 8
		name: 'Minecraft',
		stock: 34,
		description_es: 'Minecraft para PC es el videojuego más vendido de todos los tiempos. Solo eso debería ser suficiente para convencerte. Pero veamos un poco más de información acerca de por qué deberías empezar a disfrutar de este juego ahora mismo. Se trata de un juego de tipo ‘sandbox’ en el que los jugadores deben minar, construir y fabricar su propio mundo ideal.',
		description_en: "Minecraft for PC is the best-selling video game of all time. That alone should be enough to convince you. But lets see a little more information about why you should start enjoying this game right now. It is a 'sandbox' type game in which players must mine, build and craft their own ideal world.",
		price: 24.13,
		score: 4.8,
		sales: 1000,
		is_active: true,
		images: [
			{
				url: 'https://www.minecraft.net/content/dam/minecraft/pdp/Minecraft-xbox-one.jpg'
			},
			{
				url: 'https://dixgamer.com/wp-content/uploads/2016/11/minecraft-2-247x309.jpg'
			},
			{
				url: 'https://dixgamer.com/wp-content/uploads/2016/11/minecraft-playstation-3-edition-3-247x309.jpg'
			}
		],
		serials: [
			{ serial: 'N0Z90KJYTW7AZO4I89A1' },
			{ serial: 'GJA0GKB904R4NPJEKNRK' },
			{ serial: 'M7GH2VARGXQFYGZUW123' }
		],
		catArray: [
			{
				name_en: 'strategy',
				name_es: 'estrategia'
			},
			{
				name_en: 'adventure',
				name_es: 'aventura'
			},
			{
				name_en: 'action',
				name_es: 'accion'
			}
		]
	},
	{ // 9
		name: 'Dark Souls 3 Edicion de Lujo',
		stock: 500,
		description_es: 'El juego es un cuento de fantasía con una fuerte influencia surrealista japonesa que le otorga una vibra sobrenatural y espeluznante. En general, la premisa del juego es matar a los monstruos y aprovechar sus almas, las cuales puedes acumular para aumentar de nivel.',
		description_en: 'The game is a fantasy tale with a strong Japanese surreal influence that gives it a supernatural and spooky vibe. In general, the premise of the game is to kill monsters and take advantage of their souls, which you can accumulate to increase your level.',
		price: 18.45,
		score: 4.1,
		sales: 320,
		is_active: true,
		images: [
			{
				url: 'https://i.imgur.com/Y6miBi9.jpg'
			}, {
				url: 'https://i.imgur.com/OXWyYhz.jpg'
			}, {
				url: 'https://i.imgur.com/Zu7ZWtW.jpg'
			}
		],
		serials: [
			{ serial: '791GMT5X1JDW7YG1GHIS' },
			{ serial: 'I23LZH5C2IAYWRFRZ2BO' },
			{ serial: 'F6JTJZTWESCIQNX9Z2C4' },
			{ serial: '64D34MHDIA1DZUUH4DB8' },
			{ serial: 'D44YW3ZMWWPRRLKWMRAB' },
			{ serial: 'DDLFRJKN00A4DE3H2WYO' },
			{ serial: 'GRVIIF2W586FAYVWPTFD' }
		],
		catArray: [
			{
				name_en: 'rpg',
				name_es: 'rpg',
			},
			{
				name_en: 'action',
				name_es: 'accion',
			}
		]
	},
	{ // 10
		name: 'Forza Horizon 4',
		stock: 482,
		description_es: 'Forza Horizon 4 para PC es un juego de carreras de mundo abierto en el que los jugadores compiten en línea contra otros jugadores, pero de una manera en la que no tienes que interactuar con ellos si lo que te apetece es pasar un rato a solas. También cuenta con una modalidad sin conexión, que puedes aprovechar si tu internet está caído, o si tienes ganas de entretenerte a solas por un rato.',
		description_en: 'Forza Horizon 4 is an open world racing game where players compete against other players who are online, but in a way that means that you do not have to engage with them if you feel like some alone time. The game can also be played offline if necessary, if your internet is down, or you feel like going your own way for a bit.',
		price: 159.62,
		score: 4.9,
		sales: 100,
		is_active: true,
		images: [
			{
				url: 'https://store-images.s-microsoft.com/image/apps.20615.14094456225993959.2d017079-463a-4bd6-ac7a-2fb4f65673e9.0faeefd3-4ad9-4634-98df-75b9aeb92d48'
			},
			{
				url: 'https://akihabarablues.com/wp-content/uploads/2018/09/forza-horizon-4-destacado.jpg'
			},
			{
				url: 'https://store-images.s-microsoft.com/image/apps.53613.14397339579473373.33c025e6-b311-42fd-a5d3-702031988979.354a28ca-1fd5-42ce-9d0a-7882e6884d43'
			}
		],
		serials: [
			{ serial: 'N0F90KJYTW7AZO4I89A1' },
			{ serial: 'GJA0GKB904R4FPJEKNRK' },
			{ serial: 'M7GH2VFRGXQFYGZUW123' }
		],
		catArray: [
			{
				name_en: 'racing',
				name_es: 'carreras'
			},
			{
				name_en: 'arcade',
				name_es: 'arcade'
			},
		]
	},
	{ // 11
		name: 'Euro Truck Simulator 2',
		stock: 8,
		description_es: 'Euro Truck Simulator 2 para PC es el segundo juego de la serie Truck Simulator, un videojuego de simulación y vehículos donde el jugador recorre una visión ligeramente ficticia de Europa, haciendo entregas y recogiendo mercancías a lo largo del camino a la vez que aprende todo lo que hay que saber acerca de su vehículo.',
		description_en: 'Euro Truck Simulator 2 is the second game in the Truck Simulator series and is a vehicle simulation game in which the player drives across a lightly fictionalised version of Europe, making deliveries and pick-ups and learning all about their vehicle.',
		price: 70.12,
		score: 4.1,
		sales: 3453,
		is_active: true,
		images: [
			{
				url: 'https://s1.gaming-cdn.com/images/products/4425/orig/euro-truck-simulator-2-complete-edition-cover.jpg'
			},
			{
				url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/06/euro-truck-simulator-2_2.jpg'
			},
			{
				url: 'https://static.wixstatic.com/media/7ca11f_b150ab155b924eedbeb9f9976ec9d7fc~mv2.jpg/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01/7ca11f_b150ab155b924eedbeb9f9976ec9d7fc~mv2.webp'
			}
		],
		serials: [
			{ serial: 'N0F90KJYTF7AZO4I89A1' },
			{ serial: 'GJA0GBB904R4FPJEKNRK' },
			{ serial: 'M7GH2VFRGXFFYGZUW123' }
		],
		catArray: [
			{
				name_en: 'simulation',
				name_es: 'simulacion'
			},
		]
	},
	{ // 12
		name: 'Los Sims 4',
		stock: 1000,
		description_es: 'Los Sims 4 para PC es un juego de control y simulación de vida, el juego más vendido de 2014 y 2015, y que durante un tiempo se ubicó en lo más alto de las listas de éxitos en todos los formatos disponibles. Hoy en día podemos encontrar una gran variedad de juegos de los Sims, desde los juegos principales de la serie (como éste), hasta los paquetes de expansión y complementos que suelen ser lanzados con frecuencia: todos dando prueba de la persistente popularidad de la serie.        ',
		description_en: 'The Sims 4 for PC is a life simulation and control game, the best-selling game of 2014 and 2015, which for a time was at the top of the charts in all available formats. Today we can find a wide variety of Sims games, from the main games in the series (like this one), to expansion packs and add-ons that tend to be released frequently: all attesting to the series continuing popularity .',
		price: 8.65,
		score: 3.5,
		sales: 833,
		is_active: true,
		images: [
			{
				url: 'https://i.imgur.com/BBkU1kM.jpg'
			}, {
				url: 'https://i.imgur.com/GqIz8sO.jpg'
			}, {
				url: 'https://i.imgur.com/Q7TJESe.jpg'
			}
		],
		serials: [
			{ serial: '091GMT5X1JDX7YG1GHIS' },
			{ serial: 'I21LZH5G2IAYWRFKZ2BO' },
			{ serial: '6JTJZTW3SCIQNX9ZR2CA' },
			{ serial: '84D34MHDIA1DZUUH4DB8' },
			{ serial: 'D44YW3SMWWPRPLKWMRAB' },
			{ serial: 'DDLFRJKN0OA4DG3H2WYO' },
			{ serial: 'VRVIIF2W586K4YVWP7FD' }
		],
		catArray: [
			{
				name_en: 'simulation',
				name_es: 'simulacion',
			}
		]
	},
	{// 13
		name: 'Cuphead',
		stock: 0,
		description_es: "Cuphead es un juego de acción clásico estilo 'dispara y corre' que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz.",
		description_en: 'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.',
		price: 12.27,
		score: 4.2,
		sales: 520,
		is_active: false,
		images: [
			{
				url: 'https://store-images.s-microsoft.com/image/apps.37905.13670972585585116.7f29dc82-c969-4e89-aaf9-7c0e3f52d890.2e5a9c92-cf00-4c10-ae28-264c564478c3'
			},
			{
				url: 'https://i0.wp.com/akihabarablues.com/wp-content/uploads/2016/09/cuphead-destacado.jpg?fit=220%2C300&ssl=1'
			},
			{
				url: 'https://i.pinimg.com/originals/66/30/25/663025c2e07e5e1fbeac9a123d514992.jpg'
			}
		],
		serials: [
			{ serial: 'N0F90KHYTW7AZO4I89A1' },
			{ serial: 'GJA0GKB904R4FPJHKNRK' },
			{ serial: 'M7GH2HFRGXFFYGZUW123' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion'
			},
			{
				name_en: 'platformer',
				name_es: 'plataforma'
			},
			{
				name_en: 'shooter',
				name_es: 'disparos'
			},
		]
	},
	{// 14
		name: 'Overwatch',
		stock: 1000,
		description_es: 'Cuando los jugadores se conectan a la partida, son puestos en dos equipos de seis junto con otros jugadores. Cada jugador puede elegir de entre un máximo de 30 personajes (en el juego, estos son llamados héroes). Los personajes son excelentes: renderizados individualmente, completados con rasgos de personalidad y peculiaridades físicas que son encantadoras y únicas. Estas peculiaridades pueden incluir una sonrisa atractiva, un mechón de pelo cayendo sobre su rostro, y muchas otras características sutiles pero significativas.',
		description_en: 'When players connect to the game, they are put into two teams of six along with other players. Each player can choose from a maximum of 30 characters (in the game, these are called heroes). The characters are excellent - individually rendered, complete with personality traits and physical quirks that are charming and unique. These quirks can include an attractive smile, a lock of hair falling over his face, and many other subtle but significant features.',
		price: 18.56,
		score: 3.9,
		sales: 1000,
		is_active: true,
		images: [
			{
				url: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg'
			},
			{
				url: 'https://img.redbull.com/images/c_crop,x_506,y_0,h_1080,w_864/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2016/04/05/1331786729930_2/it-s-easily-the-most-colourful-fps-around'
			},
			{
				url: 'https://img.redbull.com/images/c_fill,g_auto,w_860,h_1075/q_auto,f_auto/redbullcom/2016/04/28/1331791673548_3/overwatch-estara-disponible-en-pc-xbox-one-y-ps4'
			}
		],
		serials: [
			{ serial: 'N0F90KAYTW7AZO4I89A1' },
			{ serial: 'GJA0GKB904R4FPJHANRK' },
			{ serial: 'M7GA2HFRGXFFYGZUW123' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion'
			},
			{
				name_en: 'fps',
				name_es: 'fps'
			},
			{
				name_en: 'shooter',
				name_es: 'disparos'
			},
		]
	},
	{// 15
		name: 'Horizon Zero Dawn',
		stock: 6,
		description_es: 'LA TIERRA YA NO NOS PERTENECE. Vive la misión legendaria de Aloy para desvelar los secretos de un mundo dominado por máquinas letales. La joven cazadora, una paria, lucha por revelar su pasado, descubrir su destino y detener una amenaza catastrófica para el futuro.',
		description_en: 'Experience Aloy’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines. An outcast from her tribe, the young hunter fights to uncover her past, discover her destiny… and stop a catastrophic threat to the future.',
		price: 30.56,
		score: 3.8,
		sales: 100,
		is_active: true,
		images: [
			{
				url: 'https://i.pinimg.com/736x/46/9e/3b/469e3b46d476c3125cb81c978e81492f.jpg'
			},
			{
				url: 'https://resolution.wallpapercome.com/387/3387-320x480.jpg'
			},
			{
				url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2017/02/horizon-zero-dawn-imagenes-promocionales_2.jpg?itok=Ny272Wck'
			},
		],
		serials: [
			{ serial: 'OV4O31ASY18CDWI9UGX4' },
			{ serial: 'O00C4MALXJLYUDPQFGD5' },
			{ serial: 'I80CQRUGAGLEP9VO7UN0' },
			{ serial: 'OUC2XF1F8A8LO76ETQCK' },
			{ serial: 'SN1OJP3ZGFRU4XNS61TZ' },
			{ serial: '4P6BGWGN41C5CQQQXIO8' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			}
		]
	},
	{// 16 
		name: "Assassin's Creed: Unity",
		stock: 6,
		description_es: 'Assassin’s Creed® Unity es un juego de acción/aventura con el que te sumerges en un París lleno de vida durante su época más oscura: la Revolución Francesa. Tendrás control total sobre Arno, ya que podrás personalizar su equipo tanto visual como técnicamente. Además de contar contar con una gran campaña individual, Assassin’s Creed Unity te da la oportunidad de jugar junto con 3 amigos en misiones concretas de una campaña cooperativa online. Durante el juego, formarás parte de momentos clave de la historia francesa que dieron lugar al enorme París que hoy todos conocemos.',
		description_en: "Assassin’s Creed® Unity is an action/adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customising Arno's equipement to make the experience unique to you, both visually and mechanically. In addition to an epic single-player experience, Assassin’s Creed Unity delivers the excitement of playing with up to three friends through online cooperative gameplay in specific missions. Throughout the game, take part in one of the most pivotal moments of French history in a compelling storyline and a breath-taking playground that brought you the city of lights of today.",
		price: 5.56,
		score: 5,
		sales: 1046,
		is_active: true,
		images: [
			{
				url: 'https://http2.mlstatic.com/D_NQ_NP_719414-MLA32116020924_092019-O.jpg'
			},
			{
				url: 'https://i.pinimg.com/originals/d4/13/28/d4132829ec446b9b849d21c4f1a62f13.jpg'
			},
			{
				url: 'https://www.bhmpics.com/download/assassins_creed_unity-480x854.jpg'
			}
		],
		serials: [
			{ serial: 'HSIWUKRQQQY870KYI6QQ' },
			{ serial: 'HF0I6AYL1OBHDI7DG9LW' },
			{ serial: 'LC3OG66OU338BTXSX20M' },
			{ serial: '52OGIAKRTGMT6YUYZ7OU' },
			{ serial: 'WNJ39J1JN0JKNVSBZSCB' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			}
		]
	},
	{ // 17
		name: 'FarCry 5',
		stock: 2,
		description_es: 'Far Cry 5 para PC es un alocado y divertido shooter de acción y aventuras en primera persona en el que debes enfrentarte a oponentes de los más raros y extravagantes. Animales y enemigos intentarán (y a veces lograrán) eliminarte por igual, aunque también cabe la posibilidad de que otros animales y extraños presentes en el terreno de juego te hagan el favor de eliminar a tus enemigos de forma aleatoria. ¡Incluso lo más alejado de la realidad puede suceder en este disparatado juego!',
		description_en: 'Far Cry 5 for PC is a crazy and fun first-person action-adventure shooter in which you have to face off against the most unusual and extravagant opponents. Animals and enemies will try (and sometimes succeed) to eliminate you equally, although there is also the possibility that other animals and strangers present on the field of play will do you the favor of eliminating your enemies at random. Even the furthest thing from reality can happen in this crazy game!',
		price: 14.84,
		score: 4.1,
		sales: 10,
		is_active: true,
		images: [
			{
				url: 'https://store-images.s-microsoft.com/image/apps.11227.69582963086497758.e1cff2e3-ddf1-42bf-930d-f380ad63f100.38d7bb7c-3e33-471b-b22d-0f0a635832ad'
			},
			{
				url: 'https://i.pinimg.com/736x/60/a1/9c/60a19cba95c35d6ac6913607cbb6e5b8.jpg'
			},
			{
				url: 'https://i.pinimg.com/736x/4a/9c/a1/4a9ca1cf2a6f42d01db28487ac6e8c63.jpg'
			}
		],
		serials: [
			{ serial: '7WPV5NHHF3A2P39LRJ74' },
			{ serial: 'O00C4MYLXJLYUDPQFGD5' }
		],
		catArray: [
			{
				name_en: 'action',
				name_es: 'accion',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			},
			{
				name_en: 'fps',
				name_es: 'fps',
			}
		]
	},
	{ // 18
		name: 'Mortal Kombat XI',
		stock: 1,
		description_es: 'MK está de regreso y mejor que nunca en la próxima evolución de la icónica franquicia. Las nuevas variaciones de personajes personalizados te dan un control sin precedentes de tus luchadores para que sean tuyos.El nuevo motor gráfico muestra cada momento deslumbrante y deslumbrante, acercándote tanto a la pelea que puedes sentirlo.Con una lista de Klassic Fighters nuevos y recurrentes, el mejor modo de historia cinematográfica de Mortal Kombat continúa la saga épica durante más de 25 años en desarrollo.',
		description_en: "MK is back and better than ever in the next evolution of the iconic franchise. The all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
		price: 12.5,
		score: 4.9,
		sales: 251,
		is_active: false,
		images: [
			{
				url: 'https://i.pinimg.com/originals/72/7e/d6/727ed6a54171f02633681c050867c6b1.jpg'
			},
			{
				url: 'https://cdn-prod.mortalkombat.com/ultimate/home/featured/ultimate-bg-m.jpg'
			},
			{
				url: 'https://pm1.narvii.com/7293/33efd5b52a7a21312d4f52aa97f32cb6dea0a1b3r1-1080-1350v2_hq.jpg'
			}
		],
		serials: [
			{ serial: 'I80CQRUG1GLEP9VO7UN0' }
		],
		catArray: [
			{
				name_en: 'arcade',
				name_es: 'arcade',
			},
			{
				name_en: 'action',
				name_es: 'accion',
			}
		]
	},
	{// 19
		name: 'DiRT Rally 2.0',
		stock: 30,
		description_es: 'Déjate llevar por tus instintos en la experiencia todoterreno más inmersiva hasta la fecha, la cual incluye un nuevo y auténtico modelo de manejo, elección de neumáticos y desgaste de la superficie. Conduce tu coche de rally por zonas todoterreno reales de Nueva Zelanda, Argentina, España, Polonia, Australia y Estados Unidos, acompañado únicamente por tu copiloto, y guiado por tus instintos.',
		description_en: 'Indulge your instincts in the most immersive off- road experience to date, including an authentic new model of handling, tire choice and surface wear.Drive your rally car through real off - road areas of New Zealand, Argentina, Spain, Poland, Australia and the United States, accompanied only by your co - driver, and guided by your instincts.',
		price: 6.18,
		score: 4.5,
		sales: 100,
		is_active: true,
		images: [
			{
				url: 'https://i.3djuegos.com/juegos/16206/dirt_rally_2/fotos/ficha/dirt_rally_2-4798744.jpg'
			},
			{
				url: 'https://i1.wp.com/simracer.es/app/uploads/2020/08/DR2_Ford_Fiesta_R5MKII_2_DWS.jpg'
			},
			{
				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5w4DTi1XjXGrrwzyolNPfOgzEP-1DbI0Hg&usqp=CAU'
			}
		],
		serials: [
			{ serial: 'NES0R79RU3BQQBG4P9DY' },
			{ serial: '5UU4HRX1EYHWKVPXC3PD' },
			{ serial: 'UT43E0NCW6UNHNSOVMER' },
			{ serial: 'O6W8UYTD093OT30Y8G36' },
			{ serial: '1PX2A630F0WX1X1NF8EN' },
			{ serial: 'OEE5NZ3AYK7MMZTAFX4K' },
			{ serial: 'LTWF4OZMWCPMEWKTWYG3' },
			{ serial: 'OS1IFHLO92RDU9MBCQ0K' },
			{ serial: 'TCLIMK817FLO3ZP7C6S1' },
			{ serial: 'KNOMU0QTYF5IYXJUA8KA' },
			{ serial: '8VO93Q6F3V3XJUL1MOCN' },
			{ serial: '9DJWUQE7XW1OVVXW9YCP' },
			{ serial: 'KU7S05IDMBY4PE2980P1' },
			{ serial: '6X41AT9TXQZ7Y8ZBJUIQ' },
			{ serial: 'HXO3VJPWPRS0373SU8VZ' },
			{ serial: 'U8R55I19KDKX2QKZU099' },
			{ serial: 'R0BFEJ5WADB9WALZA3TN' },
			{ serial: 'FB5EVFV0201HS6W4Q9PA' },
			{ serial: 'DGP42G7B0TC39ED5PZ5F' },
			{ serial: 'R866CT3IEH9H0XAQD9GU' },
			{ serial: 'JAM2D07YGHYTYLDVDCUN' },
			{ serial: 'HYXF6QFG44TJ7RVHCAB4' },
			{ serial: '501HJ0GSAC9A2WYN8VJ6' },
			{ serial: 'K6GDA0QG9UND8N7UCZW1' },
			{ serial: '0IWZGFD5YGBR4SCD37MY' },
			{ serial: 'HF7J7D1JDY5ZIZ59ZMBT' },
			{ serial: 'N9WR3ULLI0NG146B2W0T' },
			{ serial: 'CHJ5WSL9KX7G9U7Y8D24' },
			{ serial: 'AK7BELR5G9UYKRG1HRRD' },
			{ serial: 'FL8PN7UON7JXJ9LQZ07Z' }
		],
		catArray: [
			{
				name_en: 'racing',
				name_es: 'carreras',
			},
			{
				name_en: 'arcade',
				name_es: 'arcade',
			}
		]
	},
	{// 20
		name: 'The Elder Scrolls V: Skyrim Special Edition',
		stock: 20,
		description_es: 'Skyrim: Edición Especial para PC es una versión remasterizada del aclamado RPG de acción desarrollado por Bethesda y representa la quinta edición del juego de fantasía. Los juegos de Skyrim (de la serie Elder Scroll) han recibido múltiples premios, y son conocidos por su jugabilidad de mundo abierto, mundos cuidadosamente detallados y libertad para que el jugador dirija la acción y, hasta cierto punto, la historia.',
		description_en: 'Skyrim Special Edition for PC is a remastered version of the highly popular action role-playing game from Bethesda and it represents the fifth edition of the fantasy game. The Skyrim games (the Elder Scroll series) are multi award-winning games known for their open world play, immensely detailed worlds and free-form gameplay that allow the player to drive the action, and to a certain extent, the story.',
		price: 14.72,
		score: 4.7,
		sales: 345,
		is_active: true,
		images: [
			{
				url: 'https://i.ebayimg.com/images/g/jqAAAOSwNp1ev7pm/s-l400.jpg'
			},
			{
				url: 'https://http2.mlstatic.com/D_NQ_NP_959035-MLA31163331554_062019-O.jpg'
			},
			{
				url: 'https://i2.wp.com/i.pinimg.com/originals/da/33/17/da33177372b3cc2d3d4b63ef4eb6ac24.jpg'
			}
		],
		serials: [
			{ serial: 'TJBWL17D9EKYGHLDWT02' },
			{ serial: '310UUN5CPDUXYEXLSEWG' },
			{ serial: 'PAP8T8H1ZNB8WEUELCCX' },
			{ serial: 'T82FDA81RAN9X6R3VR0X' },
			{ serial: 'ODB5GV2QM868JH3HUNTX' },
			{ serial: 'KQ1UOOV1UPADAOZ7P6GB' },
			{ serial: '2VCU16GZATS1Y16FJ74S' },
			{ serial: '6Y681336YINE5MNHAB7N' },
			{ serial: 'MY4KVU31AKLY1FYC64FP' },
			{ serial: '153L5X8JTS3OUO21AJUH' },
			{ serial: 'NHP9Z9TBGPW40WM55TG1' },
			{ serial: 'I8MFPLL95TB9BBBU6EU8' },
			{ serial: 'Y1NMJ3SSFUZGVJM8EVMH' },
			{ serial: '6HG7IMI6IZWP885CW167' },
			{ serial: 'KV81ZCW1UAIZV5U065O6' },
			{ serial: '21O235460YKSO5PB180C' },
			{ serial: '433ZXNKT27751SY49HBI' },
			{ serial: '03V6CAA0YNFR3S84W51Z' },
			{ serial: 'OLZ3UK4FK3XBJCIOQ712' },
			{ serial: '8FF4GXPW52POHKWBY4LG' }
		],
		catArray: [
			{
				name_en: 'rpg',
				name_es: 'rpg',
			},
			{
				name_en: 'adventure',
				name_es: 'aventura',
			}
		]
	},
	{	// 1
		name: 'Test sin stock 2',
		stock: 0,
		description_es: 'El mundo ha caído bajo el control de Shinra Electric Power Company, una oscura corporación que controla la fuerza vital del planeta como energía mako. En la extensa ciudad de Midgar, una organización anti-Shinra que se hace llamar Avalanche ha intensificado su resistencia. Cloud Strife, un ex miembro de la unidad SOLDADO de élite de Shinra ahora convertido en mercenario, presta su ayuda al grupo, sin darse cuenta de las consecuencias épicas que le esperan',
		description_en: 'The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra is elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.',
		price: 52.38,
		score: 5,
		sales: 370,
		is_active: true,
		images: [
			{
				url: 'https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2019/11/917qd6zjz9l._sl1500.jpg'
			},
		],
		serials: [],
		catArray: [
			{
				name_en: 'rpg',
				name_es: 'rpg',
			}
		]
	},
];

module.exports = products;