import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Project = ({ title, description, id, url }) => {
  let imageUrls = [""];
  if (url) {
    imageUrls = url.split(";");
  }

  return (
    <div className="mx-4">
      <div 
      style={{
        width: "250px",
        height: "400px"
      }}
      className="">
        <Link to={`/project/${id}`} className="text-decoration-none">
          <div
            className=""
            style={{ 
            backgroundImage: `url(${imageUrls[0]})`, 
            width: "250px",
            height: "250px",
            borderRadius: "7px",
            boxShadow: "10px 10px 5px 0px rgb(192, 190, 190)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            cursor: "pointer",
            transition: "0.5s"
            }}
            >
            <div 
         
           
            className="">  
              {/* <h6>{title}</h6>
              <a 

              href="https://www.somewhere.com">
                View project<i class="fasfa-arrow-right"></i>
              </a> */}
            </div>
          </div>
        </Link>
        <p
        style={{
          font: "optional",
          fontSize: "12px",
          textAlign: "left",
          marginTop: "20px",
          padding: "10px",
          fontWeight: "450"
        }}  
        >{description}</p>
      </div>
    </div>
  );
};

export default Project;
