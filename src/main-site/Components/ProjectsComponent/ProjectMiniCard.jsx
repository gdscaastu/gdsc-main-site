import React from "react";
import projectImage from "../../../assets/project-image.jpg";
import "../../../index.css";

const ProjectMiniCard = ({ image }) => {
  return (
    <div>
      <div className="container mx-3">
        <img
          style={{

            width: "15vw",
            height: "20vh",
            borderRadius: "10px",
            boxShadow: "10px 10px 5px 0px rgb(192, 190, 190)",
          }}
          src={image}
          alt="project-photos"
        />
      </div>
    </div>
  );
};

export default ProjectMiniCard;
