import {Link} from "react";

function Navbar() {
    return(
      <nav className="navbar">
          <h2>Thee Portfolio</h2>
          <div>
              <Link to="/">Home</Link>
              <Link to="/projects">projects</Link>
              <Link to="/contact">contact</Link>
          </div>
      </nav>


    );
}
export default Navbar;