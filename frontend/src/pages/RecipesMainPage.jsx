import { useState } from 'react'
import SideMenu from "../components/SideMenu.jsx"
import RecipeContainer from "../components/RecipeContainer.jsx"
import { useForm } from "../hooks/useForm"
import "../css/App.css"

const RecipesMainPage = () => {
  //const [CategorySelected, setCategorySelected] = useState("All")
  //CategorySelected={CategorySelected} 
  //setCategorySelected={setCategorySelected} 
  return (
    <div className="app-container">
      <SideMenu 
      />
      <div className="main-container">
        <RecipeContainer  
        />
      </div>
    </div>
  );
  /*
<div className="main-container">
        <Search 
            formState={formState} 
            onInputChange={onInputChange} 
        />
        
        <RecipeContainer 
            recipeSearch = {formState.recipe}
            CategorySelected={CategorySelected} 
            setCategorySelected={setCategorySelected} 
        />
      </div>
  */
};

export default RecipesMainPage;

