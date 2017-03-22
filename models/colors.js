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

module.exports.updateColor = function(id, color, options, callback){
	var query = {_id: id};
	var update = {
		name: color.name, 
		color: color.color
	};

	Color.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteColor = function(id, callback){
	var query = {_id: id};
	Color.remove(query, callback);
}
