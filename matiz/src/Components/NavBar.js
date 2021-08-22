import { Link } from "react-router-dom";
import "./NavBar.css";
import honeyDrop from "../Assets/honeyDrop.png"

const NavBar = () => {
  return (
    <nav>
      <div className="logoName">
      <h4> <img src={honeyDrop} alt="honeyDrop"/>Nektar</h4>
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        {/* <Link>More Info</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
