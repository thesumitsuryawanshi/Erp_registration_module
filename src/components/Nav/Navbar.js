import { Component } from "react";
import { NavMenuItems } from "./NavMenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>
          {" "}
          this is my Navbar Header 1 <i className="fab fa-react"></i>
        </h1>
        <ul>
          <li>
            <i class="fa fa-home" aria-hidden="true"></i>
            Home
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
