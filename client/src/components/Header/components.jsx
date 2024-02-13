import React, { useState } from "react";
import logo from "../../assets/Logo/logo.png";
import css from "./Header.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isHomePageOpen, setIsHomePageOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Book",
      route: "/books",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  const handleClickMenu = () => {
    setIsHomePageOpen(!isHomePageOpen);
  };
  return (
    <nav className={css.nav} id="nav">
      <img
        src={logo}
        alt="logo"
        className={css.logo}
        onClick={() => navigate("/")}
      />
      <div className={css.menu} onClick={handleClickMenu}>
        <span className={css.one}></span>
        <span className={css.two}></span>
        <span className={css.three}></span>
        <span className={css.four}></span>
        <span className={css.five}></span>
      </div>
      <ul className={`${css.navLinks}  ${isHomePageOpen ? css.open : ""}`}>
        {navLinks.map((nav) => (
          <li
            key={nav.name}
            className={`${css.navItem} ${
              location.pathname === nav.route ? css.activeLink : ""
            }`}
          >
            <Link to={nav.route}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
