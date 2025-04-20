const dbConnect = require('./database.js');

async function fetch_products(){
    const db = dbConnect();
    let query = "select * from products";
    let result = await db.query(query);
    result=result.rows;
    return result;
}

module.exports={fetch_products};