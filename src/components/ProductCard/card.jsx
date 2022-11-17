import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './card.css';
import Axios from 'axios';



const Card = ({name,image,price}) => {
    
    return (
        <div className='card-body'>
            <div id='img-card'>
            <img src={image} alt=''/>
            </div>
            <div id='info-card'>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button id='add-cart' > Add To Cart</button>
            </div>
        </div>
    );
}

export default Card;

