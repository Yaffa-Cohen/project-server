var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'user_name' : String,
	'user_address' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'address'
	},
	'user_password' : String,
	'user_email' : String,
	'is_friend': Boolean
});

module.exports = mongoose.model('user', userSchema);
