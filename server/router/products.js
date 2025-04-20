const {Router} = require('express');
const {products,sortedProducts} = require('../controller/products.js');

const router = Router();

router.get("/products",products);
router.get("/sortedProducts",sortedProducts);

module.exports=router;