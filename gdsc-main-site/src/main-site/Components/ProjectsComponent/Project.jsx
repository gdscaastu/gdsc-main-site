import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../projectDetail.css";
import "../../../projectCard.css";

const Project = ({ title, description, id, url }) => {
  let imageUrls = [""];
  if (url) {
    imageUrls = url.split(";");
  }

  return (
    <div className="mx-4">
      <div className="project">
        <Link to={`/project/${id}`} className="text-decoration-none">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${imageUrls[0]})` }}>
            <div className="title-and-link">
              <h6>{title}</h6>
              <a href="https://www.somewhere.com">
                View project<i class="fa-thin fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
