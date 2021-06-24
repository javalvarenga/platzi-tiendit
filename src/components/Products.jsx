import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products=()=>{

  const {state, addToCart} = useContext(AppContext);
  const { products } = state;
  
  const handleAddToCart = (product) =>()=>{
    const random = Math.floor(Math.random() * 1000);
    const newProduct = {...product, cartId : `${product.id}-${random}`};
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}

export default Products;
