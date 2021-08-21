import { Link } from "react-router-dom";
import fruitspread from "../Assets/fruitspread.png"

const Home = () => {
  return (
    <div>
      <div className="descript_img">
        <div className="descript-container">
          <h1>Your new guide to alternative medicine</h1>
          <p>
            Nectar is a natural remedies and healthy recipes platform. 
            <p>Which
            aims to empower indivduals to move away from current health standards.</p>
          </p>
        </div>
        <div className="fruitsSpread">
          <img alt="natural" src={fruitspread}/>
        </div>
      </div>
      {/* <button>
        <Link>pizza</Link>
      </button> */}
    </div>
  );
};

export default Home;
