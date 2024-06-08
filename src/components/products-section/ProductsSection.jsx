import React from 'react';
import ProductCard from './product-card/ProductCard';
import Contanier from '../../container/Contanier';

const ProductsSection = () => {
  const products = [
    {
      image: 'https://www.apple.com/v/iphone-15-pro/c/images/specs/hero_iphone_pro__c9kj8iil656q_large.jpg',
      title: 'Product 1',
      price: '199.99',
      description: 'This is a great product.',
    },
    {
      image: 'https://www.apple.com/v/iphone-15-pro/c/images/specs/hero_iphone_pro__c9kj8iil656q_large.jpg',
      title: 'Product 2',
      price: '299.99',
      description: 'This is an awesome product.',
    },
    {
      image: 'https://www.apple.com/v/iphone-15-pro/c/images/specs/hero_iphone_pro__c9kj8iil656q_large.jpg',
      title: 'Product 3',
      price: '399.99',
      description: 'This product is amazing.',
    },
    {
      image: 'https://www.apple.com/v/iphone-15-pro/c/images/specs/hero_iphone_pro__c9kj8iil656q_large.jpg',
      title: 'Product 4',
      price: '499.99',
      description: 'You will love this product.',
    },
  ];

  return (

    <div className="bg-gray-100 py-12">
      <Contanier>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </Contanier>
    </div>
  );
};

export default ProductsSection;
