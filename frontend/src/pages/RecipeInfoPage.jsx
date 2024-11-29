import React, { useEffect, useState } from "react";
import "../css/RecipeInfoPage.css";
import "../css/App.css";
import { useRecipes } from "../context/recipesContext";
import { useParams } from "react-router-dom";
 
const RecipeInfoPage = () => {
    const [recipe, setRecipe] = useState(null);
    const { getOneRecipe } = useRecipes();
    const params = useParams();


    useEffect(() => {
        const getRecipe = async () => {
            try {
                console.log(params.id)
                const recipe = await getOneRecipe(params.id);
                setRecipe(recipe);
            } catch (error) {
                console.log(error)
            }
        };
        getRecipe();
    }, [])

    return (
        <div className="appointment-container">
            {/* Left Section */}

            <div className="left-section">
                    <h2 className="section-title">Información de la Receta</h2>
                    {recipe ? (<>
                    <div className="recipe-info">
                        <div><strong>Nombre:</strong> {recipe.name}</div>
                        <div><strong>Área:</strong> {recipe.area}</div>
                        <div><strong>Imagen:</strong> <img src={recipe.img} alt={recipe.name} style={{ width: "150px", height: "150px" }} /></div>
                    </div>
                    <h3 className="section-subtitle">Ingredientes</h3>
                    <ul className="ingredients-list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3 className="section-subtitle">Instrucciones</h3>
                    <p className="instructions">{recipe.instructions}</p>
                    <h3 className="section-subtitle">Video Tutorial</h3>
                    <iframe
                        height="315"
                        src={recipe.ytLink.replace("watch?v=", "embed/")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </>) : <p>Cargando...</p>}

            </div>


            {/* Right Section */}
            <div className="right-section">
                <h2 className="section-title">Chat con IA</h2>
                <div className="chat-window">
                    <div className="chat-message chat-message-left">
                        Hola Dr. ¿Cómo puedo ayudar con este paciente?
                    </div>
                    <div className="chat-message chat-message-right">
                        Estoy revisando su historial médico.
                    </div>
                </div>
                <div className="chat-input-container">
                    <input
                        type="text"
                        placeholder="Escribe un mensaje..."
                        className="chat-input"
                    />
                    <button className="send-button" onClick={() => alert("Enviando mensaje...")}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeInfoPage;
