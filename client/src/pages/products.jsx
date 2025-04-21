import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetch_products, sortData } from '../api/products';

export default function Products() {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let [cartNumber, setCartNumber] = useState(0);
  let [cflag, setCflag] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch_products()
      .then((res) => {
        if (res.status) {
          setProducts(res.data);
        } else {
          console.log(res.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      console.log("already exist");
    } else {
      cart.push(product);
      setCartNumber(cartNumber + 1);
    }
    setCart([...cart]); // Ensure new state reference
    console.log("Cart updated:", cart);
  }

  function handle_cart() {
    setCartNumber(0);
    setCflag(1);
  }

  function handleSort(e) {
    const sortBy = e.target.value;
    sortData(sortBy)
      .then((res) => {
        if (res.status) {
          setProducts(res.data);
        } else {
          console.log(res.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function card(image, name, price, availability, index) {
    const isAvailable = availability.toLowerCase().includes('in'); // basic check
  
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2" key={index}>
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          {/* Image container with relative positioning */}
          <div className="relative">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-48 object-cover" 
            />
            
            {/* Price tag with a lighter background */}
            <div className="absolute top-2 left-2 bg-gray-700 text-white text-sm font-semibold px-2 py-1 rounded">
              ₹{price}
            </div>
          </div>
  
          {/* Card body */}
          <div className="p-3 bg-gray-50">  {/* Adjusted padding */}
            <h5 className="text-xl font-bold text-gray-800 mb-2 truncate">{name}</h5>
            
            <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {availability}
            </span>
  
            <div className="pt-4 flex gap-2">
              <button
                type="button"
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                onClick={() =>
                  handleAddToCart({ image, name, price, availability, id: index })
                }
              >
                Save
              </button>
              <button
                type="button"
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                onClick={() =>
                  navigate(`/product/${name}`, {
                    state: { image, name, price, availability },
                  })
                }
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  

  return (
    <>
      <div style={{ marginRight: "4vh" }}>
        <div className="bg-gray-100 h-[10vh] flex justify-end items-center gap-2">
          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 mr-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              className="text-sm px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="sort"
              onChange={handleSort}
            >
              <option value="">Price</option>
              <option value="1">Low to High</option>
              <option value="0">High to Low</option>
            </select>
          </div>


          {/* Cart Button */}
          <div>
            <button
              type="button"
              className="bg-blue-600 text-white text-sm px-3 py-2 rounded hover:bg-blue-700 flex items-center relative"
              onClick={handle_cart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart4 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartNumber}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto my-10 px-4">
        <div className="flex flex-wrap -mx-4">
          {
            cflag === 0
              ? products.map((obj, index) =>
                  card(obj.image, obj.name, obj.price, obj.availability, index)
                )
              : cart.map((obj, index) =>
                  card(obj.image, obj.name, obj.price, obj.availability, obj.id)
                )
          }
        </div>
      </div>
    </>
  );
}
