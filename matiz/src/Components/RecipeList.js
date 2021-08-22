const RecipeList = ({recipes}) => {
    return (
        <div>
            <ul>

            {recipes.map(recipe => {
                return <li><img src={recipe.image} alt="food"/></li>
            })}
            </ul>
        </div>
    )
}

export default RecipeList