const {fetch_products,fetch_sorted_data} = require('../model/products.js');

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

async function sortedProducts(req,res){
    const json={};
    try{
        const {asc} = req.query;
        const data = await fetch_sorted_data(asc);
        json.status=1;
        json.msg="Success";
        json.data=data;
        res.json(json).status(200);
    }
    catch(err){
        json.status=0;
        json.msg=err;
        res.json(json).status(500);
    }
}

module.exports = {products,sortedProducts};