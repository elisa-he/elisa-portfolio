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
          className={openNav ? `twist ${color}` : `${color}`}
          onClick={handleToggle}
        >
          <span className="dot one"></span>
          <span className="dot two"></span>
          <span className="dot three"></span>
        </button>

        <nav className={`navLink ${color} ${openNav ? "active" : "disable"}`}>
          <ul className="navList">
            <li onClick={closeMenu}>
              <Link to={`/`}>About</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/work`}>Works</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
