var InformModel = require('../models/informModel.js');

/**
 * informController.js
 *
 * @description :: Server-side logic for managing informs.
 */
module.exports = {

    /**
     * informController.list()
     */
    list: function (req, res) {
        InformModel.find(function (err, informs) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting inform.',
                    error: err
                });
            }

            return res.json(informs);
        });
    },

    /**
     * informController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        InformModel.findOne({_id: id}, function (err, inform) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting inform.',
                    error: err
                });
            }

            if (!inform) {
                return res.status(404).json({
                    message: 'No such inform'
                });
            }

            return res.json(inform);
        });
    },

    /**
     * informController.create()
     */
    create: function (req, res) {
        var inform = new InformModel({
			image_name : req.body.image_name,
			description : req.body.description
        });

        inform.save(function (err, inform) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating inform',
                    error: err
                });
            }

            return res.status(201).json(inform);
        });
    },

    /**
     * informController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        InformModel.findOne({_id: id}, function (err, inform) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting inform',
                    error: err
                });
            }

            if (!inform) {
                return res.status(404).json({
                    message: 'No such inform'
                });
            }

            inform.image_name = req.body.image_name ? req.body.image_name : inform.image_name;
			inform.description = req.body.description ? req.body.description : inform.description;
			
            inform.save(function (err, inform) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating inform.',
                        error: err
                    });
                }

                return res.json(inform);
            });
        });
    },

    /**
     * informController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        InformModel.findByIdAndRemove(id, function (err, inform) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the inform.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
