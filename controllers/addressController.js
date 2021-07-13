var AddressModel = require('../models/addressModel.js');

/**
 * addressController.js
 *
 * @description :: Server-side logic for managing addresss.
 */
module.exports = {

    /**
     * addressController.list()
     */
    list: function (req, res) {
        AddressModel.find(function (err, addresss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address.',
                    error: err
                });
            }

            return res.json(addresss);
        });
    },

    /**
     * addressController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AddressModel.findOne({_id: id}, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address.',
                    error: err
                });
            }

            if (!address) {
                return res.status(404).json({
                    message: 'No such address'
                });
            }

            return res.json(address);
        });
    },

    /**
     * addressController.create()
     */
    create: function (req, res) {
        var address = new AddressModel({
			city : req.body.city,
			street : req.body.street,
			num_of_building : req.body.num_of_building
        });

        address.save(function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating address',
                    error: err
                });
            }

            return res.status(201).json(address);
        });
    },

    /**
     * addressController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AddressModel.findOne({_id: id}, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting address',
                    error: err
                });
            }

            if (!address) {
                return res.status(404).json({
                    message: 'No such address'
                });
            }

            address.city = req.body.city ? req.body.city : address.city;
			address.street = req.body.street ? req.body.street : address.street;
			address.num_of_building = req.body.num_of_building ? req.body.num_of_building : address.num_of_building;
			
            address.save(function (err, address) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating address.',
                        error: err
                    });
                }

                return res.json(address);
            });
        });
    },

    /**
     * addressController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AddressModel.findByIdAndRemove(id, function (err, address) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the address.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
