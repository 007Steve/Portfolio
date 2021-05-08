import React, { useState } from "react";
import "../styles/Nav.css";
function Nav() {
  const [show, setShow] = useState(false);
  const changeBkd = () => {
    if (window.scrollY >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeBkd);
  return (
    <div className={show ? `nav color` : `nav `}>
      <ul className="nav__container">
        <li className="nav__link">Home</li>
        <li className="nav__link"> About</li>
        <li className="nav__link">Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
