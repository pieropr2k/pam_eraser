import React, { useState, useEffect } from 'react';
import "../css/components-css/RecipeCard.css"
import { Link } from 'react-router-dom';

const RecipeCard = ({id, name, img}) => {
  return (
    <div className='card-container'>
        <div className='header-card'>
            <p>{name}</p>
            <Link to={`./${id}`}>
              <button>view</button>
            </Link>
           
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default RecipeCard
