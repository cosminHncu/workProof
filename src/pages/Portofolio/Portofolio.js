import React, { useState, useEffect } from "react";
import classes from "./Portofolio.module.css";
import NewProject from "../../components/Projects/NewProject";
import Projects from "../../components/Projects/Projects";
import data from "../../assets/data.svg";
import Container from "../../UI/Container/Container";

const Portofolio = ({ projects, setProjects }) => {
  const [addProject, setAddProject] = useState(false);

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2>Your Projects</h2>
          <button
            className={classes.add_project_button}
            onClick={() => setAddProject((prev) => !prev)}
          >
            + Add Project
          </button>
        </div>
        <div>
          {addProject && (
            <NewProject
              projects={projects}
              addProject={addProject}
              setProjects={setProjects}
              setAddProject={setAddProject}
            />
          )}
        </div>
      </div>
      <div className={classes.showcase}>
        <div className={classes.blob}>
          <img className={classes.data} src={data} />
        </div>
        <Projects
          setAddProject={setAddProject}
          addProject={addProject}
          projects={projects}
          setProjects={setProjects}
        />
      </div>
    </Container>
  );
};

export default Portofolio;
