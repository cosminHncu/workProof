import classes from "./ProjectOverview.module.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Carousel from "../../UI/Carousel/Carousel";

const ProjectOverview = ({ project, setOverview }) => {
  const { Title, Images, CustomerURL, id } = project;

  return (
    <div className={classes.overlay}>
      <div className={classes.container}>
        <Carousel images={Images} />
        <div className={classes.bottom_page}>
          <div className={classes.info}>
            <h1>📖{Title}</h1>
            <a href={CustomerURL} target="_blank">
              🔗Customer Website
            </a>
          </div>
          <div className={classes.showcase_img}></div>
          <button
            onClick={() => setOverview((prev) => !prev)}
            className={classes.close_button}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
