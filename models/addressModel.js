var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var addressSchema = new Schema({
	'city' : String,
	'street' : String,
	'num_of_building' : Number
});

module.exports = mongoose.model('address', addressSchema);
