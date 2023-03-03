import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Portofolio from "./pages/Portofolio/Portofolio";
//import classes from "./App.module.css";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [displayLandingPage, setDisplayLandingPage] = useState(true);
  const [displayProject, setDisplayProject] = useState(false);

  return (
    <>
      <header>
        <Navbar
          setDisplayProject={setDisplayProject}
          setDisplayLandingPage={setDisplayLandingPage}
        />
      </header>
      <main>
        {displayLandingPage && <LandingPage />}
        {displayProject && (
          <Portofolio projects={projects} setProjects={setProjects} />
        )}
      </main>

      {/*<footer className={classes.footer}>
        <p>
          made by <a  href="#">cosminHncu</a>
        </p>
      </footer>*/}
    </>
  );
};
export default App;
