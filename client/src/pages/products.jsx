import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { fetch_products,sortData} from '../api/products';

export default function Products() {
  let [products,setProducts] = useState([]);
  let [cart,setCart] = useState([]);
  let [cartNumber,setcertNumber] = useState(0);
  let [cflag,setCflag]=useState(0);
  const navigate = useNavigate();


  useEffect(()=>{
    fetch_products().
    then((res)=>{
      if(res.status){
          setProducts(res.data);
      }
      else
        console.log(res.msg);
    }).
    catch((err)=>{
      console.log(err);
    })
  },[]);


function handleAddToCart(product) {
  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    console.log("already exist");
  } else {
    // Else, add to cart with quantity 1
    cart.push(product);
    setcertNumber(cartNumber+1)
  }
  setCart(cart);

  console.log("Cart updated:", cart);
}

function handle_cart(){
  setcertNumber(0);
  setCflag(1);
}

function handleSort(e){
  const sortBy= e.target.value;
  sortData(sortBy).
  then((res)=>{
    if(res.status){
      setProducts(res.data)
    }
    else{
      console.log(res.msg);
    }
  }).
  catch((err)=>{
    console.log(err);
  });
}



  function card(image,name,price,availability,index){

    return(
      <div className='col-md-4 px-4 py-2 col-10 mx-auto' key={index}>
        <div class="card">
          <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body bg-light">
            
            <ul className='list-unstyled'>
              <li><h5>{name}</h5></li>
              <li><span>price :{price}</span></li>
              <li><span>Availiability :{availability}</span></li>
              <li>
                <div className='pt-4'>
                  <button type="button" class="btn btn-primary btn-sm" onClick={()=>handleAddToCart({image,name,price,availability,"id":index})}>Add Cart</button>
                  <button type="button" class="btn btn-primary btn-sm ms-2" onClick={()=>navigate(`/product/${name}`,{state:{image,name,price,availability}})}>Details</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='bg-light' style={{height:"10vh"}}>
        <div className='float-end pe-4 pt-1'>
          <button type="button" class="btn btn-primary" onClick={handle_cart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4 m-1" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
            <span class="badge bg-secondary">{cartNumber}</span>
          </button>
        </div>
        <div className='my-1 float-end me-4 mt-3' id="sort_by">
            <div className='ms-1 d-inline'>
                <select class="form-select form-select-sm d-inline" aria-label=".form-select-sm example" name="sort" style={{width:"10vw"}} onChange={(e)=>handleSort(e)}>
                  <option>Sort by price</option>
                  <option value="1">Low to High</option>
                  <option value="0">Hight to Low</option>
                </select>
              </div>
            </div>
      </div>

      <div className='container my-5'>
        {
          (cflag==0)?
          (
            <div className='row'>
              {
                products.map((obj,index)=>{
                  return card(obj.image,obj.name,obj.price,obj.availability,index);
                })
              }
            </div>      
          ):(
            <div className='row'>
              {
                cart.map((obj,index)=>{
                  return card(obj.image,obj.name,obj.price,obj.availability,obj.id);
                })
              }
            </div>      
          )
          
        }
      </div>
    </>
  )
}
