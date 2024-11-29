import { createContext, useContext, useState } from "react";
import { getOneRecipeRequest, getRecipesByCategoryRequest } from "../api/recipes"; 
const RecipesContext = createContext();

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    if (!context) throw new Error("useRecipes must be used within a RecipesProvider");
    return context;
};

// eslint-disable-next-line react/prop-types
export function RecipesProvider({ children }) {
    const [category, setCategory] = useState('Miscellaneous');
    const [recipes, setRecipes] = useState([]);

    const updateCategory = (newCategory) => {
        setCategory(newCategory);
    }

    
    const getRecipes = async () => {
        console.log(category, "api")
        const res = await getRecipesByCategoryRequest(category);
        setRecipes(res.data);
    };

    
    const getOneRecipe = async (id) => {
        try {
            const res = await getOneRecipeRequest(id); // Updated request function
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <RecipesContext.Provider
            value={{
                category,
                updateCategory,
                getRecipes,
                getOneRecipe,
                recipes
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
}
