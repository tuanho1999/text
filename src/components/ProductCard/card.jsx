import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './card.css'



const Card = ({todo}) => {

    return (
        <div className='card-body'>
            <div id='img-card'>
            <img src={todo.image} alt=''/>
            </div>
            <div id='info-card'>
            <h3>Name: {todo.name}</h3>
            <p>Price: ${todo.price}</p>
            <button id='add-cart' > Add To Cart</button>
            </div>
        </div>
    );
}

export default Card;

