import { useState} from "react";
import axios from "axios";
import Condition from "./Condition"
const Conditions = () => {
  const [remedies, setRemedies] = useState([]);

  const fetchCondition = async (id) => {
    try {
      const res = await axios.get(`
                https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=0ae0fcf4-25b5-9ec4-540e-03bba0afacdc&problemId=${id}
            `);

      const remediesString = res.data
      const remediesArray = remediesString[0].split('') 
      const newArr = remediesArray.filter(word =>{
          return word !== "" 
      })

      const letterCaps = newArr.map((char, i, arr) => {
          if (i === 0 || arr[i-1] === " "){
              return char.toUpperCase()
          } else {
              return char.toLowerCase()
          }
      }).join("").split(";")
        
      setRemedies(letterCaps);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    fetchCondition(e.target.value);
  };

  return (
    <div>
      <h1>Select your illness</h1>
      <select defaultValue=""  onChange={handleChange}>
        <option value="" disabled>Select Condition</option>
        <option value={1}>High Cholesterol</option>
        <option value={2}>High Blood Pressure</option>
      </select>
      <h5>
          <ul>
            <Condition remedies = {remedies}/>
          </ul>
      </h5>
    </div>
  );
};

export default Conditions;
