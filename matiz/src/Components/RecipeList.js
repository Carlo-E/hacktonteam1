const RecipeList = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.map((recipe, i) => {
          //   console.log(recipe);
          return (
            <li key={i}>
              <img src={recipe.image} alt="food" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
