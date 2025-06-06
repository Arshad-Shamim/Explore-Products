import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Product() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white/70">
      <div className="w-[90%] sm:w-[95%] md:w-[90%] lg:w-4/5 min-h-[80vh] bg-gray-100 rounded-xl shadow-lg p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-8 overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 text-left pl-4 flex justify-center items-center">
          <img 
            src={data.image} 
            alt="Product" 
            className="rounded-xl object-contain max-h-[70vh] w-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 overflow-y-auto pr-4">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <h4 className="text-lg font-semibold mb-2">
            Price: <span className="text-green-600">{data.price}</span>
          </h4>
          <h4 className="text-md mb-4">
            Availability: <span className="text-blue-500">{data.availability}</span>
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eveniet incidunt eum, illum obcaecati sequi debitis! Repellendus sed distinctio, at nulla veniam aspernatur itaque doloremque ab quia quae, recusandae soluta animi modi perspiciatis culpa quam, corporis maxime. Vel nisi, numquam quos corporis quas qui dolorem ex eligendi earum, voluptatum minima assumenda beatae sunt quaerat explicabo consectetur sit corrupti quia. Modi dignissimos, velit autem rem nisi voluptatum explicabo doloremque laboriosam quae!
          </p>
        </div>

      </div>
    </div>
  );
}
