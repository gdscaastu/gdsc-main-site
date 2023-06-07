import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import Project from "./Project";
import Spinner from "react-bootstrap/Spinner";
import "../../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://gdsc-main-site.onrender.com/v1/project"
      );
      setProjects(result.data);
    };

    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  console.log(projects);

  return (
    <div className="container flex flex-row flex-wrap mt-32">
      {projects.map((project) => (
        <Project
          id={project.id}
          title={project.name}
          description={project.description}
          url={project.image_url}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ProjectProvider>
      <ProjectList />
    </ProjectProvider>
  );
};

export default App;
