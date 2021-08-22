import { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import Condition from "./Condition";
import AvoidFood from "./AvoidFood";
import create from "../Assets/create.png";
import learn from "../Assets/learn.png";
import discover from "../Assets/discover.png";
import arrow from "../Assets/arrow.png";

const Conditions = () => {
  const [remedies, setRemedies] = useState([]);
  const [avoids, setAvoids] = useState([]);
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
        https://api.nutridigm.com/api/v1/nutridigm/topitemstoavoid?subscriptionId=0ae0fcf4-25b5-9ec4-540e-03bba0afacdc&problemId=${id} `);
      console.log(res.data);
      const items = res.data;
      const itemsarr = items[0].split(";");
      console.log(itemsarr);
      setAvoids(itemsarr);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    fetchCondition(e.target.value);
    fetchToAvoid(e.target.value);
  };

  return (
    <div className="howContainer">
      <h4>How it works</h4>
      <div className="howSteps">
        <div>
          <img src={learn} alt="learn" />
          <h5>Learn</h5>
          <p>
            Learn about the types of foods that best heal and correct your
            present state of health.
          </p>
        </div>

        <img className="arrow" src={arrow} alt="arrow" />
        <div>
          <img src={discover} alt="discover" />
          <h5>Discover</h5>
          <p>Discover recipes generated from these exact foods.</p>
        </div>
        <img className="arrow" src={arrow} alt="arrow" />
        <div>
          <img alt="create" src={create} />
          <h5>Create</h5>
          <p>
            Create a nutritious and tasty meal with step-by-step instructions.
          </p>
        </div>
      </div>
      <div className="select">
        <p>
          Select from the health conditions below to discover healthy food
          alternatives and avoidants
        </p>
        <select
          className="form-select"
          style={{ width: "40vh" }}
          aria-label="Default select example"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Condition
          </option>
          <option value={1}>High Cholesterol</option>
          <option value="null" disabled>
            {" "}
            Acid Reflux/GERD{" "}
          </option>
          <option value="null" disabled>
            {" "}
            Celiac Disease{" "}
          </option>
          <option value={2}>High Blood Pressure</option>
          <option value="null" disabled>
            {" "}
            Irritable bowel syndrome
          </option>
        </select>
      </div>
      <h5>
        {displayCondition ? (
          <div className="infoSection">
            <div className="infoList">
              <div className="info">
                <h5>Top Items to Avoid:</h5>
                <ul className="list-group">
                  <AvoidFood avoids={avoids} />
                </ul>
              </div>
              <div className="info">
                <h5>Top Items to Consume:</h5>
                <ul className="list-group">
                  <Condition remedies={remedies} />
                </ul>
              </div>
            </div>
            <div className="build">
              <h5>Build a Recipe</h5>
              <Recipes remedies={remedies} />
            </div>
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
