const express = require('express');
const cors = require('cors');
const dbConnect = require('./model/database.js');
const router = require('./router/products.js');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/products",router);
app.use("/",async (req,res)=>{
    res.send("welcome to explore products");
});

app.listen(2000,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Server started on port number 2000");
})