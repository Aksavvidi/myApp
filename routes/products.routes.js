const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controllers')

router.get('/findAll', productsController.findAll);
router.get('/findOne/:id', productsController.findOne);
router.post('/create', productsController.create);
router.patch('/update',productsController.update);
router.delete('/delete/:id', productsController.delete);

module.exports = router;