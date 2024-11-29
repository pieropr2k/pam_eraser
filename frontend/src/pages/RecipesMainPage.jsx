import { useState } from 'react'
import SideMenu from "../components/SideMenu.jsx"
import RecipeContainer from "../components/RecipeContainer.jsx"
import { useForm } from "../hooks/useForm"
import "../css/App.css"

const RecipesMainPage = () => { 
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
};

export default RecipesMainPage;

