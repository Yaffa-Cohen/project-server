var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'product_name' : String,
	'product_color' : String,
	'product_price' : Number,
	'description' : String,
	'tel' : String,
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'category'
	},
	'image_id' : String
});

module.exports = mongoose.model('product', productSchema);
