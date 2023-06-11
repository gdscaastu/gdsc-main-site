import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx

import pic from "../../../assets/SliderImages/pic2.jpeg";

const ProjectCard = ({ project, isLoading }) => {
  console.log(project)
=======
import pic from "../../../assets/SliderImages/pic2.jpeg";

<<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/EventComponents/EventCard.jsx
const EventCard = ({ event, isLoading }) => {
  const [description, setDescrition] = useState("");
========
const ProjectCard = ({ project, isLoading }) => {
  console.log(project)
>>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
  let imageurls = [""];
  if (project.image_url) {
    imageurls = project.image_url.split(";");
  } else {
    imageurls = [pic];
  }
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
=======
  useEffect(() => {
    if (event.description.length > 65) {
      setDescrition(event.description.substring(0, 60) + " " + ". . ");
    } else {
      setDescrition(event.description);
    }
  }, []);
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx

  return (
    <div className="flex w-full lg:gap-5 flex-col gap-3">
      {isLoading ? (
        <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] relative rounded-md animate-pulse">
          <div className="bg-gray-200 rounded-lg w-full h-full"></div>
        </div>
      ) : (
        <div className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] relative rounded-md shadow-right-bottom flex justify-center">
          <img
            src={imageurls[0]}
            className="w-full h-full object-cover rounded-lg"
          />
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
=======
<<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/EventComponents/EventCard.jsx
          <Link className="no-underline" to={`/event/${event.id}`}>
            <div className="flex flex-col items-center justify-center gap-3 absolute inset-0  w-full h-full bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur-lg rounded-lg">
              <h1 className="text-white hidden sm:block text-center text-xs">
                {event.name}
              </h1>

              <button className="flex gap-1 bg-white text-black text-sm px-4 py-1 rounded-2xl justify-center ">
                <span className="no-underline">View Event</span>
========
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
          <div className="flex flex-col items-center justify-center gap-3 absolute inset-0  w-full h-full bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-filter backdrop-blur-lg rounded-lg">
            <h1 className="text-white hidden sm:block text-center text-xs">
              {project.name}
            </h1>
            <Link to={`/project/${project.id}`}>
              <button className="flex gap-1 bg-white text-black text-sm px-4 py-1 rounded-2xl justify-center">
                <span>View Project</span>
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
=======
>>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
                <svg
                  className="w-5 h-5 shrink-0 justify-center"
                  viewBox="0 0 24 24"
                  fill="none"
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
                  xmlns="http://www.w3.org/2000/svg">
=======
                  xmlns="http://www.w3.org/2000/svg"
                >
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#000000"
                  />
                </svg>
              </button>
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
            </Link>
          </div>
=======
            </div>
          </Link>
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
        </div>
      )}
      <div className="w-[80%] ml-2">
        {isLoading ? (
          <div className="bg-gray-200 h-4 rounded-md animate-pulse w-4/5"></div>
        ) : (
          <>
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
=======
<<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/EventComponents/EventCard.jsx
            <h1 className="text-black text-sm sm:hidden block text-center ml-2">
              {event.name}
            </h1>
            <h1 className="text-black text-sm hidden sm:block">
              {description}
========
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
            <h1 className="text-black text-xs sm:hidden block text-center ml-2">
              {project.name}
            </h1>
            <h1 className="text-black text-xs hidden sm:block">
              {project.description}
<<<<<<< HEAD:gdsc-main-site/src/main-site/Components/ProjectsComponent/ProjectCard.jsx
=======
>>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
>>>>>>> main:src/main-site/Components/ProjectsComponent/ProjectCard.jsx
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
