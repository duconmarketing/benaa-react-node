const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/say', controllers.saySomething);
router.get('/categories', controllers.categories);
router.get('/subcategories/:category', controllers.subCategories);
router.get('/product-list/:subcategory', controllers.productList);
router.get('/product-details/:productId', controllers.subCategories);

module.exports = router;