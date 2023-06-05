import React, { useState, useEffect, createContext, useContext } from "react";
import ProjectMiniCard from "./ProjectMiniCard";
import Contributer from "./Contributer";
import { useParams } from "react-router-dom";
import "../../../projectDetail.css";
import "../../../projectCard.css";

import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState(null);
  const [contributors, setContributors] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://gdsc-main-site.onrender.com/v1/project/${id}`
      );
      setProject(result.data);
    };

    const fetchContributors = async () => {
      const response = await fetch(
        `https://gdsc-main-site.onrender.com/v1/project/contributors/${id}`
      );
      const data = await response.json();
      setContributors(data);
    };

    fetchData();
    fetchContributors();
  }, [id]);

  return (
    <ProjectContext.Provider value={{ project, contributors }}>
      {children}
    </ProjectContext.Provider>
  );
};

const Projectdetail = () => {
  const { project, contributors } = useContext(ProjectContext);
  console.log(contributors);
  if (!project) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  let imageUrls = [""];
  if (project.image_url) {
    imageUrls = project.image_url.split(";");
  }

  return (
    <div className="container">
      <div
        className="header-image container mt-3"
        style={{ backgroundImage: `url(${imageUrls[0]})` }}>
        <div className="">
          <h6>{project.name}</h6>
        </div>
      </div>
      <div className="container mt-5">
        <div className="project-detail-description container">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium ab corrupti nemo quod porro cumque numquam voluptatem
            voluptas, adipisci vel perferendis laboriosam, unde earum
            voluptates, minima doloribus! Voluptatum, fugit at! Facilis id enim
            dolorum pariatur exercitationem. Alias eum officia pariatur
            molestias quae sed, optio possimus nihil asperiores eveniet iusto
            odit atque veritatis magnam a, ratione quam debitis nobis sunt
            voluptatum.
          </p>
        </div>
        <div className="project-detail-main container mt-5">
          <h6>project Detail</h6>

          <div className="project-detail-type-and-link">
            <span>
              Project type:{" "}
              <span className="project-detail-type-text text-muted">
                inperson sessions
              </span>
            </span>
            <span>
              Project link:{" "}
              <a href="https://project.org">
                {project.project_link ? (
                  <span>{project.project_link}</span>
                ) : (
                  <span>no link available</span>
                )}
              </a>
            </span>
          </div>
          <div className="project-detail-mini-image-card mt-4 mb-5 row">
            {imageUrls.map((item) => {
              return (
                <div className="col-sm-3 mt-3">
                  <ProjectMiniCard image={item} />
                </div>
              );
            })}
          </div>
          <br />
          {contributors ? (
            <div className="contributors mt-5 mb-3">
              <div className="mt-5">
                <h6>Contributors</h6>
              </div>
              <div className="row contributors">
                {contributors.map((contributer) => {
                  return (
                    <div className="col-sm-4 mt-3 contributors">
                      <Contributer contributer={contributer} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}

          <div className="d-flex justify-content-center">
            <a className="back-to-project-btn mb-5" href={`/projects`}>
              Back to Projects
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  return (
    <ProjectProvider>
      <Projectdetail />
    </ProjectProvider>
  );
};

export default ProjectDetail;
