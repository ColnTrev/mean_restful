//Dependencies
const express = require('express'), 
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean_restful');

// app start
const app = express();
const port = process.env.PORT || 3000;
const error = 'Please use /api/colors, /api/colors/:id for access to api routes.'

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/router'));
app.get('*', (req, res) => res.send(`${error}`));
app.listen(port, () => console.log(`listening on port ${port}`));
