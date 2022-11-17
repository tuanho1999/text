import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './card.css'
import Card from './card'



function CardAlls({}) {
    let data = localStorage.getItem('Form') ? JSON.parse(localStorage.getItem('Form')) : [];
    return (
        <div className='main-product'>
        <div id='total'>
            <p><b>Total:</b> {data.length}</p>
        </div>
        <div id='list-card'>
            {data.map((item, index) => (
                <Card todo={item} key={index} />
            ))
            }
        </div>
        </div>
    );
}

export default CardAlls;