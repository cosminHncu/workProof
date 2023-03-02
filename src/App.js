import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Portofolio from "./pages/Portofolio/Portofolio";

const App = (props) => {
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

      <footer></footer>
    </>
  );
};
export default App;
