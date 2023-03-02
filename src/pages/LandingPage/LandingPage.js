import React from "react";
import classes from "./LandingPage.module.css";
import projects from "../../assets/projects.svg";
import Container from "../../UI/Container/Container";

const LandingPage = (props) => {
  return (
    <Container>
      <div className={classes.showcase}>
        <div className={classes.showcase_text}>
          <h1>Let the world see your projects!</h1>
          <p>
            workProof is a powerful tool designed to help digital workers
            showcase their portfolio in an organized and visually appealing way.
            This application allows users to manage their list of showcased
            works in a user-friendly and efficient manner, making it easy to
            showcase their best work to potential clients and collaborators.
          </p>
        </div>
        <img src={projects} alt="landingpage svg" />
      </div>
    </Container>
  );
};

export default LandingPage;
