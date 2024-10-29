// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './IphoneDetail.css';

function IphoneDetail() {
  const { productUrl } = useParams(); 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/iphones/${productUrl}`) 
      .then(response => response.json())
      .then(data => {
        console.log('Fetched product data:', data);
        setProduct(data.products);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [productUrl]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="product-detail-container">
      <img src={product.product_img} alt={product.product_name} className="product-detail-image" />
      <div className="product-detail-content">
        <h1>{product.product_name}</h1>
        <p>Starting Price: {product.starting_price}</p>
        <p>Price Range: {product.price_range}</p>
        <p>{product.product_description}</p>
        <a href={product.buy_link} className="buy-link">Buy Now</a>
      </div>
    </div>
  );
}

export default IphoneDetail;
