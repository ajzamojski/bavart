
// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var fs        = require('fs');
// Routes
// =============================================================

module.exports = function(app) {

	app.get("/auction/image", function(req, res){

		db.image.findAll({}).then(function(result){
			// console.log(result[0].image);
			var hbsObject = {
				image: result
			}
			// console.log(result[0].dataValues.image);
			res.json(result);
			// res.render("auction", hbsObject);

		});
	});

	app.get("/api/getprice:id", function(req, res){

		console.log(req.params.id);
  	db.image.findOne({
  		where: {
  			id: req.params.id
  		}
  	}).then(function(results) {

  		console.log(results);
  		res.json(results);

  	});

	});

	app.post("/api/bid", function(req, res){

		console.log(req.body);
		db.image.update({bidPrice: req.body.bidAmount}, 
		{
			where: {
				id: req.body.pictureNum
			}
		}).then(function(results) {

			res.redirect("/auction");
		})

	});

	// app.get("/api/getimage", function(req, res){
 //        //fullsizeoutput_1b0c.jpeg
 //        db.image.findOne({
 //            where: {
 //                image_name: "FileName"
 //            }
 //        }).then(function(imageRecord){
 //            var simple = imageRecord.get({plain:true});
 //            console.log(simple);
 //            var img = fs.readFileSync('./output-file.jpg');
 //            res.writeHead(200, {'Content-Type': 'image/jpg' });
 //            res.end(img, 'binary');

 //       });

	// });
}
