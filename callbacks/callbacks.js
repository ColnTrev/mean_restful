 module.exports.colors_callback = function(err, colors){
 	if(err){ throw err; }
 	res.json(colors);
 }