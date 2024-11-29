import axios from 'axios';

export const getRecipesByCategory = async (req, res) => {
    console.log(req.params);
    const { category } = req.params;

    try {
        const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = response.data;

        if (!data.meals) {
            return res.status(400).json({ error: "No meals" });
        }

        const recipes = data.meals.map((meal) => {
            return {
                id: meal.idMeal,
                name: meal.strMeal,
                img: meal.strMealThumb,
            };
        });

        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const getRecipeInfoById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);

    try {
        //const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = response.data;

        if (!data.meals || data.meals.length === 0) {
            return res.status(400).json({ error: "Recipe not found" });
        }

        console.log(data.meals[0])
        const { strMeal, strArea, strMealThumb, strInstructions, strYoutube,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20
        } = data.meals[0];

        const ingredientsData = {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
        };

        // Transformar en un array de claves sin valores vacíos o nulos
        const ingredients = Object.keys(ingredientsData)
            .filter((key) => ingredientsData[key]) // Filtrar claves con valores no vacíos
            .map((key) => ingredientsData[key]); // Mapeamos las claves

        //console.log(ingredients);
        res.json({ name: strMeal, area: strArea, img: strMealThumb, ingredients, instructions: strInstructions, ytLink: strYoutube });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
