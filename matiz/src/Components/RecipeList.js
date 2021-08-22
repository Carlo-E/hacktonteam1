import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipeList">
      <ul>
        {recipes.map((recipe, i) => {
          return (
            <li key={i}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt="food" />
                <p>{recipe.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
