import { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import Condition from "./Condition";
import AvoidFood from "./AvoidFood";
import create from "../Assets/create.png";
import learn from "../Assets/learn.png";
import carrot from "../Assets/carrot.png";

const Conditions = () => {
  const [remedies, setRemedies] = useState([]);
  const [avoids, setAvoids] = useState([])
  const [displayCondition, setDisplayCondition] = useState(false);

  const api_key = process.env.REACT_APP_NUTRI_API_KEY;

  const fetchCondition = async (id) => {
    try {
      const res = await axios.get(`
                https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=${api_key}&problemId=${id}
            `);

      const remediesString = res.data;
      const remediesArray = remediesString[0].split("");
      const newArr = remediesArray.filter((word) => {
        return word !== "";
      });

      const letterCaps = newArr
      .map((char, i, arr) => {
          if (i === 0 || arr[i - 1] === " ") {
              return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        })
        .join("")
        .split(";");
        
        setRemedies(letterCaps);
        setDisplayCondition(true);
    } catch (error) {
        console.log(error);
    }
};

const fetchToAvoid = async (id) => {
    try {
        const res = await axios.get(`
        https://api.nutridigm.com/api/v1/nutridigm/topitemstoavoid?subscriptionId=0ae0fcf4-25b5-9ec4-540e-03bba0afacdc&problemId=${id} `)
        console.log(res.data)
        const items = res.data
        const itemsarr = items[0].split(";")
         console.log(itemsarr)
        setAvoids(itemsarr)
    } catch (error) {
        console.log(error)
    }
}

  const handleChange = (e) => {
    fetchCondition(e.target.value);
    fetchToAvoid(e.target.value)
  };

  return (
    <div className="howContainer">
      <h3>How it works</h3>
      <div className="howSteps">
        <div>
          <img src={carrot} alt="learn" />
          <h4>Learn</h4>
          <p>
            Learn about the types of foods that best heal and correct your
            present state of health.
          </p>
        </div>
        <div>
          <img src={learn} alt="test" />
          <h4>Discover</h4>
          <p>Discover recipes generated from these exact foods.</p>
        </div>
        <div>
          <img alt="create" src={create} />
          <h4>Create</h4>
          <p>
            Create a nutritious and tasty meal with step-by-step instructions.
          </p>
        </div>
      </div>
      <h1>Select Condition</h1>
      <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Select Condition
        </option>
        <option value={1}>High Cholesterol</option>
        <option value={2}>High Blood Pressure</option>
      </select>
      <h5>
        {displayCondition ? (
          <div>
            <h1>Top Items to Avoid:</h1>
             <ul>
                 <AvoidFood avoids={avoids} />
            </ul> 
              <h1>Top Items to Consume:</h1>
            <ul>
              <Condition remedies={remedies} />
            </ul>
            <h1>Build Recipe</h1>
            <Recipes remedies={remedies} />
          </div>
        ) : (
          <ul>
            <Condition remedies={remedies} />
          </ul>
        )}
      </h5>
    </div>
  );
};

export default Conditions;
