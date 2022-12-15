import { Component } from "react";

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
          <li>
            <i class="fa fa-compass" aria-hidden="true"></i>
            Explore
          </li>
          <li>
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            My Profile
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
