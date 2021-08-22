import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const api_key = process.env.REACT_APP_RECIPE_API_KEY;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res =
          await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}
                `);
        setRecipe(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title}/>
      <h2>Cooking Time in Minutes:</h2> 
      <h6>{recipe.readyInMinutes}</h6>
      <h2>Ingredients List:</h2> 
      <h6>{recipe.extendedIngredients && recipe.extendedIngredients.map(ingredient =>{
          return <li key={ingredient.id}>{ingredient.original}</li>
      })}</h6>
      <h2>Directions:</h2>
      <h6>{recipe.instructions}</h6>
    </div>
  );
};

export default RecipeDetails;
