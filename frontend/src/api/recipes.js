import axios from "./axios";

export const getRecipesByCategoryRequest = async (category) => axios.get(`/recipes/${category}`);  

export const getOneRecipeRequest = async (id) => axios.get(`/oneRecipe/${id}`);
