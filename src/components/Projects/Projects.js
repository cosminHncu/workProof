import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import Card from "../../UI/Card/Card";

const Projects = ({ projects, addProject, setProjects, setAddProject }) => {
  const noProjects = (
    <Card className={classes.no_projects}>
      <p>No projects</p>
    </Card>
  );
  const projectsList = (
    <Card className={classes.showcase}>
      {projects.map((project) => {
        const id = Math.random() * 10;
        project.id = id;
        return (
          <ProjectCard
            addProject={addProject}
            setAddProject={setAddProject}
            key={id}
            project={project}
            projects={projects}
            setProjects={setProjects}
          />
        );
      })}
    </Card>
  );

  return <>{projects.length > 0 ? projectsList : noProjects}</>;
};

export default Projects;
