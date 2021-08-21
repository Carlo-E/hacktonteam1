import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <h2>Nectar</h2>
      <div>
      <Link to={"/"}>Home</Link>
      {/* <Link>More Info</Link> */}
      </div>

    </nav>
  );
};

export default NavBar;
