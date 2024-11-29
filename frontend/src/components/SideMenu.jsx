//import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "../css/components-css/SideMenu.css";
import { useRecipes } from '../context/recipesContext';
import { useAuth } from "../context/authContext";

//const SideMenu = ({ CategorySelected, setCategorySelected }) => {
const SideMenu = () => {

  const { category, updateCategory } = useRecipes()
  const {logout} = useAuth(); 

  console.log(category)
  

  const categories = ['All', 'Dessert', 'Pasta', 'Seafood', 'Starter', 'Vegetarian', 'Breakfast']

  const showMenu = ()=> {
    document.querySelector('.categories-container').classList.toggle('active')
  }

  return (
    <aside className='aside-container'>
      <h1 className="main-title">UNI.COOK</h1>
      <button className="hamburger-menu" onClick={showMenu}>☰</button>
      <ul className='categories-container'>

        {categories.map((categoryElement, index) => (
          <li
            key={index}
            className={categoryElement === category ? 'selected' : ''}
            onClick={() => {
              updateCategory(categoryElement === 'All' ? 'Miscellaneous' : categoryElement)
            }}
          >
            {categoryElement}
          </li>
        ))}
      </ul> 
      
      <Link to="/" onClick={() => logout()}>
        <button>Salir</button>
      </Link>
    </aside>
  )
}

export default SideMenu;
