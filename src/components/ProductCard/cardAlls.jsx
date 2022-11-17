import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './card.css'
import Card from './card'



const CardAlls = () => {
    
    const [product, setProduct] = useState([]);
    useEffect(()=> {fetch("http://localhost:8000/storage").then((res)=> res.json())
    .then((data) => setProduct(data))},
    [])
    return (
        <div className='main-product'>
        <div id='total'>
            <p><b>Total:</b> {product.length} </p>
        </div>
        <div id='list-card'>
            {product.map((item, index) => (
                <Card id={item.id} name={item.name} price={item.price} image={item.image} />
            ))
            }
        </div>
        </div>
    );
}

export default CardAlls;