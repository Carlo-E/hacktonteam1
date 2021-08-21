import { useState, useEffect } from "react";
import axios from "axios";
const Conditions = () => {
  const [remedies, setRemedies] = useState([]);

  const fetchCondition = async (id) => {
    try {
      const res = await axios.get(`
                https://api.nutridigm.com/api/v1/nutridigm/topitemstoconsume?subscriptionId=0ae0fcf4-25b5-9ec4-540e-03bba0afacdc&problemId=${id}
            `);
      setRemedies(res.data);
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
      <select onChange={handleChange}>
        <option value="">Select Condition</option>
        <option value={1}>High Cholesterol</option>
        <option value={2}>High Blood Pressure</option>
      </select>
      {remedies}
    </div>
  );
};

export default Conditions;
