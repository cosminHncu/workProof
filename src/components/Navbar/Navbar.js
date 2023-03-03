import React from "react";
import logo from "../../assets/logo.svg";
import classes from "./Navbar.module.css";
import Container from "../../UI/Container/Container";
const Navbar = ({ setDisplayProject, setDisplayLandingPage }) => {
  return (
    <Container>
      <nav className={classes.navigation}>
        <button
          onClick={() => {
            setDisplayLandingPage(true);
            setDisplayProject(false);
          }}
          className={classes.logo}
        >
          <img src={logo} alt={logo} />
          <p>workProof</p>
        </button>
        <li className={classes.control}>
          <ul>
            <a
              onClick={() => {
                setDisplayLandingPage(false);
                setDisplayProject(true);
              }}
              href="#"
            >
              Portofolio
            </a>
          </ul>
        </li>
      </nav>
    </Container>
  );
};

export default Navbar;
