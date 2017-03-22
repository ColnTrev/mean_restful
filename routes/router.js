var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var callbacks = require('../callbacks/callbacks');
var Color = require('../models/colors');
var router = express.Router();

// routes
 router.get('/colors', function(req, res){
 	Color.getColors(function(err, colors){
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

router.put('/colors/:id', function(req, res){
	/*something*/
});

module.exports = router;