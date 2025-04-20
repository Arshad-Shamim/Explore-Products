
const pkg = require('pg')
const {Pool} = pkg;


function dbConnect(){
    const pool = new Pool({
        host:"aws-0-ap-south-1.pooler.supabase.com",
        port:"6543",
        user:"postgres.iylmskcegzmpyqxyxzjj",
        password:"arShad@786",
        database:"postgres",
        ssl:{rejectUnauthorized:false,},
    });

    return pool;
}

module.exports = dbConnect;

//database we use
//lockit_emailverify
//lockit_users
//lockit_usersdata
