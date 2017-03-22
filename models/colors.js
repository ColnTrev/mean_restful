var mongoose = require('mongoose');
var colorSchema = new mongoose.Schema({
	name:{ type: String, required: true },
	color:{ type: String, default: "No preference"}
});

var Color = module.exports = mongoose.model('Color', colorSchema);

module.exports.getColors = function(callback, limit){
	Color.find(callback).limit(limit);
}

module.exports.getColorById = function(id, callback){
	Color.findById(id, callback);
}

module.exports.addColor = function(color, callback){
	Color.create(color, callback);
}



