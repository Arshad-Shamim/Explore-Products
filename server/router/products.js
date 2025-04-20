const {Router} = require('express');
const {products} = require('../controller/products.js');

const router = Router();

router.get("/products",products);

module.exports=router;