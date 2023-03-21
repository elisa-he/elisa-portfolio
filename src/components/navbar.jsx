import { useState } from "react";
export default function Navbar() {
  const [openNav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!openNav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="fixedMenu">
      <div className="navMenu">
        <button className={openNav ? "twist" : ""} onClick={handleToggle}>
          <span className="dot one"></span>
          <span className="dot two"></span>
          <span className="dot three"></span>
        </button>

        <nav className={`navLink ${openNav ? "active" : "disable"}`}>
          <ul className="navList">
            <li onClick={closeMenu}>
              <a href="/">About</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/">Works</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
