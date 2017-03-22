//Dependencies
var express = require('express'), 
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean_restful');

// app start
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/router'));

app.listen(port, function(){console.log('listening on port ' + port)});
