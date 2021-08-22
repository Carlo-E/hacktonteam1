import { useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

const Recipes = ({ remedies }) => {
  const api_key = process.env.REACT_APP_RECIPE_API_KEY;
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  };
  // run this in browser first for api to work
  // https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=0ae0fcf4-25b5-9ec4-540e-03bba0afacdc&problemId=1
  const fetchRecipe = async () => {
    try {
      const inputARR = input.split(/[ ,.]+/);
      const newInput = inputARR.join(",+");
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${newInput}`
      );
      setRecipes(res.data);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter ingredient"
          onChange={handleChange}
        />
        <button type="submit">Build</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
