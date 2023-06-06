import React from "react";
import projectImage from "../../../assets/project-image.jpg";


const ProjectMiniCard = ({ image }) => {
  return (
    <div>
      <div className="container">
        <img 
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          boxShadow: "10px 10px 5px 0px rgb(192, 190, 190)",
        }}
        src={image} alt="project-photos" />
      </div>
    </div>
  );
};

export default ProjectMiniCard;
