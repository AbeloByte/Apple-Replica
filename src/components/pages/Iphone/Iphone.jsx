// eslint-disable-next-line no-unused-vars
import React ,{useState,useEffect}from 'react'

import './IphoneStyle.css'
import { Link } from 'react-router-dom'
function Iphone() {

// eslint-disable-next-line no-unused-vars
  const [iphoneinfo,setIphone] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/iphones')
    .then(response => response.json())
    .then((data)=>{
      setIphone(data.products)
    })
  },[])

console.log(iphoneinfo);


  return (
    <>
    <div className="product-container">
      {iphoneinfo.map(product => (
        <div key={product.product_id} className="product-card">
          <img src={product.product_img} alt={product.product_name} className="product-image" />
          {/* content part */}
          <div className="product-content">
            <h2>{product.product_name}</h2>
            <p>{product.product_brief_description}</p>
            <p>{product.starting_price}</p>
            <p>{product.price_range}</p>
            <Link to={`/iphone/${product.product_url}`}>Learn more</Link>
        
           
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Iphone