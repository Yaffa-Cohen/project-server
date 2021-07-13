var ProductModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

    /**
     * productController.list()
     */
    list: function (req, res) {
        ProductModel.find(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }

            return res.json(products);
        });
    },

    /**
     * productController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }

            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            return res.json(product);
        });
    },

    /**
     * productController.create()
     */
    create: function (req, res) {
        var product = new ProductModel({
			product_name : req.body.product_name,
			product_color : req.body.product_color,
			product_price : req.body.product_price,
			description : req.body.description,
			tel : req.body.tel,
			user_id : req.body.user_id,
			category_id : req.body.category_id,
			image_id : req.body.image_id
        });

        product.save(function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating product',
                    error: err
                });
            }

            return res.status(201).json(product);
        });
    },

    /**
     * productController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product',
                    error: err
                });
            }

            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            product.product_name = req.body.product_name ? req.body.product_name : product.product_name;
			product.product_color = req.body.product_color ? req.body.product_color : product.product_color;
			product.product_price = req.body.product_price ? req.body.product_price : product.product_price;
			product.description = req.body.description ? req.body.description : product.description;
			product.tel = req.body.tel ? req.body.tel : product.tel;
			product.user_id = req.body.user_id ? req.body.user_id : product.user_id;
			product.category_id = req.body.category_id ? req.body.category_id : product.category_id;
			product.image_id = req.body.image_id ? req.body.image_id : product.image_id;
			
            product.save(function (err, product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating product.',
                        error: err
                    });
                }

                return res.json(product);
            });
        });
    },

    /**
     * productController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductModel.findByIdAndRemove(id, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the product.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
