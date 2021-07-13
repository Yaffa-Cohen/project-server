var express = require('express');
var router = express.Router();
var informController = require('../controllers/informController.js');

/*
 * GET
 */
router.get('/', informController.list);

/*
 * GET
 */
router.get('/:id', informController.show);

/*
 * POST
 */
router.post('/', informController.create);

/*
 * PUT
 */
router.put('/:id', informController.update);

/*
 * DELETE
 */
router.delete('/:id', informController.remove);

module.exports = router;
