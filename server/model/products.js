const dbConnect = require('./database.js');

async function fetch_products(){
    const db = dbConnect();
    let query = "select * from products";
    let result = await db.query(query);
    result=result.rows;
    return result;
}

async function fetch_sorted_data(asc){
    const db = dbConnect();
    asc = (asc==1)?"asc":"desc";
    let query = `select * from products order by price ${asc}`;
    let result = await db.query(query);
    result=result.rows;
    console.log(result);
    return result;
}

module.exports={fetch_products,fetch_sorted_data};