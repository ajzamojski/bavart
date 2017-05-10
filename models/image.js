// var DATABASE_NAME = 'bavart';
// var DB_USERNAME = 'root';
// var DB_PASSWORD = 'test';
// var Sequelize = require('sequelize');
// var FS = require('fs');
// var sequelize = new Sequelize(
//     DATABASE_NAME, 
//     DB_USERNAME, 
//     DB_PASSWORD, {
//         host:'localhost',
//         port:3306,
//         dialect:'mysql',
//         define: {
//             freezeTableName: true
//         }
// });
// //Connect to Database
// sequelize.authenticate().then(function (e) {
//     if(e) {
//         console.log('There is connection ERROR');
//     } else {
//         console.log('Connection has been established successfully');
//     }
// });
// Create Table: image
module.exports = function(sequelize, Datatypes) {
    var Image_Store = sequelize.define('image', {
        image_id: {
            type: Datatypes.INTEGER
        },
        image_type: {
            type: Datatypes.STRING,
            allowNull: false
        },
        image: {
            type: Datatypes.BLOB('long')
        },
        image_size: {
            type: Datatypes.INTEGER
        },
        image_name: {
            type: Datatypes.STRING
        },
        bidPrice: {
        	type: Datatypes.INTEGER
        }
    },
        {
		    // prevents pluralization of the table and prevents 'createdAt' and 'updatedAt' columns.
		    freezeTableName: true,
		    timestamps: false
			  })

 //    );
    return Image_Store;
 }
//     sequelize.sync({
//         //force: true,
//         //logging: console.log
//     }).then(function () {
//         console.log('Everything is synced');
        
//         //Give any image name here.
//         var imageData = FS.readFileSync(__dirname + '/starryNight.jpg');
//         Image_Store.create({
//             image_id: 123,
//             image_type: 'jpg',
//             image: imageData,
//             image_size: 3,
//             image_name: 'FileName',
// 						bidPrice: 299.00
//         }).then(function (image_store) {
//             try {
//                 //console.log(image_store.image)
//                 FS.writeFileSync(__dirname + '/output-file.jpg', image_store.image);
//             } catch (e) {
//                 console.log(e+'');
//             }
//         });

//     });
//     return Image_Store;
// }  
