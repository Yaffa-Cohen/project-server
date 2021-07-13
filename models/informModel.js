var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var informSchema = new Schema({
	'image_name' : String,
	'description' : String
});

module.exports = mongoose.model('inform', informSchema);
