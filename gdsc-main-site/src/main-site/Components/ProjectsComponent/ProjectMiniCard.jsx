import React from "react";
import projectImage from "../../../assets/project-image.jpg";
import "../../../projectCard.css";
import "../../../projectDetail.css";
const ProjectMiniCard = ({ image }) => {
  return (
    <div className="project-Mini-Card">
      <div className="container">
        <img src={image} alt="project-photos" />
      </div>
    </div>
  );
};

export default ProjectMiniCard;
