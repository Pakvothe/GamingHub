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
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const { Product, Category, Image, Serial, User } = require('./src/db.js');
const utilsProd = require("./utils/products");
const utilsUser = require("./utils/users");
const utilsCat = require("./utils/categories");

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
		})
});
