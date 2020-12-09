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
const {conn} = require('./src/db.js');
const {PORT} = process.env;

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
});
