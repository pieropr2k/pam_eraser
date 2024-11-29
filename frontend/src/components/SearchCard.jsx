import React, { useState, useEffect } from 'react';
import "../css/components-css/RecipeCard.css"

const RecipeSearch = ({name,img}) => {
//   const [recipes, setRecipes] = useState({
//     name: '',
//     img: ''
//   })

//   const getRecipesInfo= async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/recipeInfo/${name}`)
//       const data = await res.json()
//       const {strMeal, strMealThumb} = data
//       setRecipes({
//         name: strMeal,
//         img: strMealThumb
//       })

//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     getRecipesInfo()
//   }, [])

  return (
    <div className='card-container'>
        <div className='header-card'>
            <p>{name}</p>
            <button>view</button>
        </div>

        <img src={img} alt="" />
    </div>
  )
}

export default RecipeSearch
