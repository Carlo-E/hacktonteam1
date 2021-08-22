import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) => {
          return (
            <li key={i}>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="food" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
