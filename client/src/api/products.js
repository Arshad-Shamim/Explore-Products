import axios from 'axios'


function fetch_products(){
    return axios.get("https://explore-products-api.vercel.app/products").
    then((res)=>{
        res=res.data;
        return res;        
    }).
    catch((err)=>{
        console.log(err);
        return {status:0,msg:"something went wrong"};
    });
}

export {fetch_products}