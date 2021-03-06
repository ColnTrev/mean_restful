const express = require('express'),
	  mongoose = require('mongoose'),
	  bodyParser = require('body-parser'),
	  Color = require('../models/colors');

const router = express.Router();

// routes
 router.get('/colors', (req, res) => {
 	Color.getColors((err, colors) => {
 		if(err){ throw err; }
 		res.json(colors);
 	});
 });

 router.get('/colors/:id', function(req, res){
 	Color.getColorById(req.params.id, function(err, color){
 		if(err){ throw err; }
 		res.json(color);
 	});
 });

router.post('/colors', function(req, res){
	var color = req.body;
	Color.addColor(color, function(err, color){
		if(err){ throw err; }
		res.json(color);
	}); 
});

router.put('/colors/:_id', (req, res) => {
	var id = req.params._id;
	var color = req.body;
	Color.updateColor(id, color,{}, (err, color) => {
		if(err){ throw err; }
		res.json(color);
	}); 
});

router.delete('/colors/:_id', (req, res) => {
	var id = req.params._id;
	Color.deleteColor(id, (err, color) => {
		if(err){ throw err; }
		res.json(color);
	}); 
});


module.exports = router;