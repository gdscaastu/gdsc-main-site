import React, { useState, useEffect, createContext, useContext } from "react";
import ProjectMiniCard from "./ProjectMiniCard";
import Contributer from "./Contributer";
import { useParams } from "react-router-dom";


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
        className="container mt-3"
        style={{ 
          backgroundImage: `url(${imageUrls[0]})` ,
          width: "100%",
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
          }}>

        <div 
          style={{
            width: "300px",
            position: "relative",
            left:" 40%",
            top: "88%",
          }}
        className="">
          <h6
          style={{
            color:" #333",
            backgroundColor: "white",
            padding: "15px"
          }}
          >{project.name}</h6>
        </div>
      </div>
      <div className="container mt-5">
        <div 
        style={{
          marginTop: "20px",
          textAlign: "left"
        }}
        className="container">
          <p
          style={{
            fontSize:"13px"
          }}
          >
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
        <div 
        style={{
          textAlign: "left"
        }}
        className="container mt-5">
          <h6
          style={{ color: "#4486f4" }}
          >project Detail</h6>

          <div className="">
            <span
              style={{
              paddingRight: "10px",
              fontweight: "600"

            }}
            >
              Project type:{" "}
              <span 
                style={{ fontSize: "13px", 
                paddingRight: "10px",
                fontweight: "600" }}
                className="text-muted">
                {project.project_type }
              </span>
            </span>
            <span
            style={{
              paddingRight: "10px",
              fontweight: "600"
            }}
            >
              Project link:{" "}
              <a 
              style={{
                textDecoration: "none",
                fontsize: "13px",
                fontWeight: "200",
                
              }}
              href="https://project.org">
                 
                {project.project_link ? (
                  <span
                  style={{
                    paddingRight: "10px",
                    fontweight: "600"
                  }}
                  >{project.project_link}</span>
                ) : (
                  <span
                  style={{
                    paddingRight: "10px",
                    fontweight: "600"
                  }}
                  >no link available</span>
                )}
              </a>
            </span>
          </div>
          <div className="mt-4 mb-5 row">
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
            <div 
           
            className="mt-5 mb-3">
              <div className="mt-5">
                <h6>Contributors</h6>
              </div>
              <div className="row ">
                {contributors.map((contributer) => {
                  return (
                    <div 
                   
                    className="col-sm-4 mt-3 contributors">
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
            <a 
            style={{
              backgroundColor: "rgb(14, 14, 14)",
              color: "white",
              padding: "8px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              textDecoration: "none"
            }}
            className="mb-5" href={`/projects`}>
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
