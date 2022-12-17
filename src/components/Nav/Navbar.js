import { Component } from "react";
import { NavMenuItems } from "./NavMenuItems";
import "./NavbarStyles.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">
          Ouroborus <i className="fab fa-react "></i>
        </h1>
        <ul className="navMenu">
          {NavMenuItems.map((item, index) => {
            return (
              <ul key={index} className="navMenuitems">
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </ul>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;