import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Product() {

    const location = useLocation();
    const data = location.state;

  return (
    <div className='container d-flex row my-4' style={{height:"100vh"}}>
        <div className='col-md-6 col-10 my-auto mx-auto'>
            <img src={data.image} alt="loading...." className='img-fuid rounded w-100 my-auto h-75'/>
        </div>
        <div className='col-md-6 col-10 d-flex mx-auto my-md-0 my-4 ps-3'>
            <div className='my-auto mx-auto'>
                <h1 className='fw-bold'>{data.name}</h1>
                <h4>Price :{data.price}</h4>
                <h4>Availability: {data.availability}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quasi, ea temporibus numquam quia, at vitae iusto impedit, repudiandae nemo harum exercitationem ipsa dolor? Maiores harum accusamus necessitatibus illo sed, alias adipisci magnam consequuntur sequi deleniti nulla suscipit deserunt doloremque porro hic voluptatem soluta accusantium aperiam! Fugit omnis ipsam libero!</p>
            </div>
        </div>
    </div>
  )
}
