//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~             
//                             `-/osssso+/:.                                    
//                           `-+hNNmdddhhyysoso+:-`                               
//                       `osydddhhdddhdhyssyooooooo/-`                            
//    `              .   oyosyyhhhyhddhyyyhyyy++ooooo+/-`                         
//    :.`          `..`+yhdsossyyyhhhddydhhhhNy/++yoooooo+-`                      
//    .--`        `-.`.yMMMNmhhhhyssyyhyhhdddmdyhhdo+oosssso:`                    
//    `.-.       .--. .ymMMNosdomo+shyddhmNNNddmddooossyyyssso/.                  
//     `...`````...`  `++yo:-:/-+:/ssssddNMmdmm+::/+ohhhhyyyssoo/`                
//       `..```..```   `.`` ./+/::/ssydMNmdmms/oshs/+ysymdhhyyssso.               
//      .....``.....         `./+:oyhNmddNNy::hmdho/sdm//ymmdhyysss:              
//      ``` ```````             .-//odmNMd/-+hNyyy/+yMNds:/+:oyhhyss/             
//           ``````            `.:ohyMMMy:-oosdddyosmMNms/os. `.:oyyy-            
//         `----:--://+so/-:+ohmNNMymMmy/:+hoymNNNydMNyys/+y+     `:os`           
//       `-/+d+-oshmNNMMMMNMMMMMMMMmhdysossdmmmNmmymNhssy/++o       `.            
//     .sysdmm+/..:oydmNNNMMNNNNMMMMNNmmmNmmhyhNms++yho+so/+o`                    
//    .s+smNo:-`     `..--::-..:dmdddMMNmhhyyymmo::+syo+s+oso/                    
//      /yss-                   ..:hNMNmddhyshMmhhmd+y/os+ssso                    
//      `                       `+dMMMNmddhysohMMMddhhssoys/so                    
//                              `-oNNmNNNmdyso+dNMNhssssyyyooo                    
//                          `.-/oyhmhdhdhhyyy/../MMhysosyyysyo                    
//                    ``.-/oydmNmddhhyyhyo++/:  `yMmhysoyysys/                    
//                `./osdmNMNmddmmdhyyhyso+o/:   .mMdmyshsyyy.                    
//                .+hmNMMMNddmNMmhhhmyhysoss+.    +MNddddhyso                     
//                  .+hMNdhmMMMNhhdNdhhyssoy+`     sNNNmmNds-                     
//                 .+dMMdmNMMMMdhdMNydhysso:`      `+mNNNNmo                      
//                 +MMMMMMMNNmNmdMMmydhyys/          .sNNdo.                      
//                 `yNMMMMNhshNNNNNdddyso/-            -yd.                       
//                  `-/dMMNNNNh+++++o/.`                 .                        
//                     `mMmmds+/+ossoo.                                           
//                     .mNdhooohNdhdhys:.`                                        
//                  `.+mddNs:::Nmdhhhhysys.                                       
//                  +mMMNyho/:+dNMdddddyyy.                                       
//         ```      `hNmmhysoo+omhNNdmmyso`                                       
//        ohmds:`  `oNMNhhdho++/. /NNmhoo/                                        
//       /MMMMMMy.`mMNMNmddyo+/+. oNMMdsso                                        
//       :NMMMMMMmhmMhmhyhy+.``  `mMMmyyy`                                        
//        +NMMMMMMMNNddysss`      :hmyyo.                                         
//         -sNMMMMdhdhhhy/-         ```                                           
//           `:dMMmyyyy+`                                                         
//             `/syhs/.                                                      
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~             
require('dotenv').config();
const cron = require('node-cron');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const { Product, Category, Image, Serial, User, Order, Orders_products, Review } = require('./src/db.js');
const { Op } = require('sequelize');
const utilsProd = require("./utils/products");
const utilsOrder = require("./utils/orders");
const utilsUser = require("./utils/users");
const utilsReview = require("./utils/reviews");
const ordersProducts = require("./utils/ordersProducts");
const orders = require('./utils/orders');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
	});
	Product.bulkCreate(utilsProd, { hooks: true, include: [Image, Serial] })
		.then(prod => {
			prod.map((instance, i) => {
				utilsProd[i].catArray.map(catToAdd => {
					Category.findOrCreate({
						where: catToAdd
					}).then(catCreatedOrFound => {
						instance.addCategories(catCreatedOrFound[0])
					}).catch(err => console.log(err));
				});
			})
			console.log('Productos cargados exitosamente');
		})
		.catch((err) => {
			console.error(err);
		});
	User.bulkCreate(utilsUser, { hooks: true })
		.then(() => {
			console.log("Usuarios cargados exitosamente")
			return Order.bulkCreate(utilsOrder)
		})
		.then(() => {
			console.log('Ordenes cargadas exitosamente')
			return Orders_products.bulkCreate(ordersProducts, { hooks: true })
		})
		.then(() => {
			console.log('Order_Products cargados exitosamente')
			return Review.bulkCreate(utilsReview, { hooks: true })
		})
		.then(() => {
			console.log('Reviews cargadas exitosamente')
		})
		.catch(err => {
			console.log(err);
		})
});

cron.schedule('00 00 * * *', () => {
	var currentTimeMinus24Hours = new Date() - 96 * 60 * 60 * 1000;
	Order.update({ state: 'canceled', payment_link: null }, {
		where: {
			createdAt: { [Op.lt]: currentTimeMinus24Hours },
			[Op.or]: [{ state: 'created' }, { state: 'processing' }]
		}
	}).catch(err => console.log('CRONJOBS', err));
});
