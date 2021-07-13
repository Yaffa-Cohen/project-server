var PrincipalModel = require('../models/principalModel.js');

/**
 * principalController.js
 *
 * @description :: Server-side logic for managing principals.
 */
module.exports = {

    /**
     * principalController.list()
     */
    list: function (req, res) {
        PrincipalModel.find(function (err, principals) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal.',
                    error: err
                });
            }

            return res.json(principals);
        });
    },

    /**
     * principalController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PrincipalModel.findOne({_id: id}, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal.',
                    error: err
                });
            }

            if (!principal) {
                return res.status(404).json({
                    message: 'No such principal'
                });
            }

            return res.json(principal);
        });
    },

    /**
     * principalController.create()
     */
    create: function (req, res) {
        var principal = new PrincipalModel({
            user_id : req.body.user_id,
            principal_password: req.bodyprincipal_password
        });

        principal.save(function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating principal',
                    error: err
                });
            }

            return res.status(201).json(principal);
        });
    },

    /**
     * principalController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PrincipalModel.findOne({_id: id}, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting principal',
                    error: err
                });
            }

            if (!principal) {
                return res.status(404).json({
                    message: 'No such principal'
                });
            }

            principal.user_id = req.body.user_id ? req.body.user_id : principal.user_id;
			principal.principal_password= req.body.principal_password ? req.body.principal_password: principal.principal_password
            principal.save(function (err, principal) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating principal.',
                        error: err
                    });
                }

                return res.json(principal);
            });
        });
    },

    /**
     * principalController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PrincipalModel.findByIdAndRemove(id, function (err, principal) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the principal.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
