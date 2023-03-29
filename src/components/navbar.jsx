import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ color }) {
  const [openNav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!openNav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="fixedMenu">
      <div className={`navMenu`}>
        <button
          className={`navToggle ${openNav ? `twist ${color}` : `${color}`}`}
          onClick={handleToggle}
        >
          <span className="dot one"></span>
          <span className="dot two"></span>
          <span className="dot three"></span>
        </button>

        <nav className={`navLink ${color} ${openNav ? "active" : "disable"}`}>
          <ul className="navList">
            <li onClick={closeMenu}>
              <Link to={`/`}>
                <button className="navBtn">About</button>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/work`}>
                <button className="navBtn">Works</button>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/contact`}>
                <button className="navBtn">Contact</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
