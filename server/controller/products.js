const {fetch_products} = require('../model/products.js');

async function products(req,res){
    const json = {};
    try{
        const data = await fetch_products();
        json.status=1;
        json.data=data;
        json.msg="success";
        res.json(json).status(200);
    }
    catch(err){
        json.status=0;
        json.msg=err;
        res.json(json).status(500);
    }

}

module.exports = {products};