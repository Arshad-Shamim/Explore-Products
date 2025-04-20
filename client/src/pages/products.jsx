import React,{useEffect,useState} from 'react'

export default function Products() {
  const [products,setProducts] = useState({});

  function getData(){
    
  }
  function card(){
    let image="https://picsum.photos/200?random=1"
    let name = "speaker";
    let price = "$20";
    let availability="In stock";


    return(
      <div className='col-md-4 p-2'>
        <div class="card" style={{width:"18rem"}}>
          <img src={image} class="card-img-top" alt="..."/>
          <div class="card-body">
            
            <ul className='list-unstyled'>
              <li><h5>{name}</h5></li>
              <li><span>price :{price}</span></li>
              <li><span>Availiability :{availability}</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='container my-5'>
        {card()}
      </div>
    </>
  )
}
