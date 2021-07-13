var express = require('express');
var router = express.Router();
var principalController = require('../controllers/principalController.js');

/*
 * GET
 */
router.get('/', principalController.list);

/*
 * GET
 */
router.get('/:id', principalController.show);

/*
 * POST
 */
router.post('/', principalController.create);

/*
 * PUT
 */
router.put('/:id', principalController.update);

/*
 * DELETE
 */
router.delete('/:id', principalController.remove);

module.exports = router;
