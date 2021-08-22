import {useState} from 'react'
import axios from 'axios'
import RecipeList from "./RecipeList"
const Recipes = ({remedies}) => {
const api_key = process.env.REACT_APP_API_KEY

const [input, setInput] = useState("")
const [recipes, setRecipes] = useState([])
const handleChange = (e) => {

    // remedies.forEach(remedy => {
    //     if( remedy.includes(e.target.value)){
    //         return setInput(e.target.value)
    //     } else {
    //         return window.alert("Try again")
    //     }
    // })
    setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    fetchRecipe()
}

const fetchRecipe = async() => {
    try {
        const res = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=aa8356f729324bf29a8ff71075406bdc&ingredients=${input}`)
        setRecipes(res.data)
    } catch (error) {
        
    }
}

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text"
                value={input}
                placeholder="Enter ingredient"
                onChange={handleChange}
                />
            </form>
            <RecipeList recipes={recipes}/>
        </div>


    )
}

export default Recipes