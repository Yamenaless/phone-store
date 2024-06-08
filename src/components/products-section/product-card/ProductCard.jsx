import React from 'react';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover object-top rounded-t-lg" />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-lg font-semibold mb-2">${price}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.261 3.89a1 1 0 00.95.69h4.1c.97 0 1.371 1.24.588 1.81l-3.32 2.42a1 1 0 00-.364 1.118l1.26 3.89c.3.921-.755 1.688-1.54 1.118l-3.32-2.42a1 1 0 00-1.175 0l-3.32 2.42c-.784.57-1.84-.197-1.54-1.118l1.26-3.89a1 1 0 00-.364-1.118l-3.32-2.42c-.783-.57-.382-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.261-3.89z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
