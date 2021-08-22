import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <h4>Nektar</h4>
      <div>
      <Link to={"/"}>Home</Link>
      {/* <Link>More Info</Link> */}
      </div>

    </nav>
  );
};

export default NavBar;
