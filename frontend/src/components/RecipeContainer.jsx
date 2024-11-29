import React, { useState, useEffect } from 'react'
import RecipeCard from "./RecipeCard"
//import SearchCard from "./SearchCard"
import "../css/components-css/RecipeContainer.css"
import "../css/components-css/Search.css"
import { useRecipes } from '../context/recipesContext'

const RecipeContainer = () => {
    // console.log(CategorySelected)
    let [searchString, setSeatchString] = useState("");
    const { category, recipes, getRecipes } = useRecipes();
    //let recipesFiltered = [...recipes];

    useEffect(() => {
        getRecipes();
        //console.log(recipes);
    }, [category])

    const handleSearchString = (e) => {
        console.log(e.target.value);
        setSeatchString(e.target.value)
    }

    const recipesFiltered = searchString === "" ? recipes : recipes.filter((dato)=> dato.name.toLowerCase().includes(searchString.toLocaleLowerCase()))
    
    return (
        <>

            <div className='form-container'>
                <div className='input-container'>
                    <input
                        type='text'
                        className='input-recipe'
                        name="recipe"
                        placeholder='Type a recipe ...'
                        value={searchString}
                        onChange={handleSearchString}
                    />
                </div>
            </div>
            <main className='recipes-container'>
                {
                //recipes.map((recipe, index) => (
                recipes ? recipesFiltered.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        id = {recipe.id}
                        name={recipe.name}
                        img={recipe.img}
                    />
                )) : <p>Loading...</p>
                }
            </main>
        </>
    );
}

export default RecipeContainer;