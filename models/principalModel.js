var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var principalSchema = new Schema({
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'principal_password': String
});

module.exports = mongoose.model('principal', principalSchema);
