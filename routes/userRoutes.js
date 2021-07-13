var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/*
 * GET
 */
// router.get('/', userController.list);

/*
 * GET
 */
router.get('/:user_name/:user_password', userController.login);


router.post('/', userController.create);


/*
 * POST
 */
// router.post('/', userController.create);

/*
 * PUT
 */
// router.put('/:id', userController.update);

/*
 * DELETE
 */
// router.delete('/:id', userController.remove);

module.exports = router;
