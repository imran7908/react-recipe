import React from 'react'
import './RecipeTile.css'

const RecipeTile = ({ recipe }) => {
  return (
    <div className='recipeTile' onClick={() => {
      window.open(recipe["recipe"]["url"]);
    }}>
      <img className='image' alt={recipe["recipe"]["label"]} src={recipe["recipe"]["image"]} />
      <p className='name'>{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile