import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-400 rounded"></div>
      <div className="h-6 bg-gray-400 rounded"></div>
      <div className="h-6 bg-gray-400 rounded"></div>
    </div>
  );
};

const AdminProject = () => {
  const navigate = useNavigate();
  const [project, setproject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handelDeleteProject = (id) => {
    console.log(id);
  };

  const handelEditProject = (id) => {
    navigate(`/admin/project/edit/${id}`);
  };

  useEffect(() => {
    fetch("https://gdsc-main-site.onrender.com/v1/project")
      .then((response) => response.json())
      .then((data) => {
        setproject(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handelEditbutton = () => {
    navigate(`/admin/project/new/`);
  };

  return (
    <div>
      <div className=" mb-6 flex h-12 justify-between shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <h1 className="text-lg items-center">project</h1>
        <button onClick={() => handelEditbutton()} className="flex items-center  justify-center py-0 px-2 bg-blue-500 rounded-md">
          <span className="text-white  dark:text-white flex items-center justify-center text-sm">
            Add
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white font-bold dark:text-white flex items-center justify-center "
            fill="#000"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        project.map((project, index) => (
          <div
            key={project.id}
            className={`flex py-2 px-5 border-l border-black justify-between border-t border-r ${
              index === project.length - 1 ? "border-b" : ""
            } `}>
            <div>
              <h1 className="">{project.name}</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handelEditProject(project.id)}
                className="ml-auto flex items-center px-4 rounded-md bg-blue-400 py-1">
                <svg
                  className="w-5 h-5 text-white font-bold dark:text-white flex items-center justify-center "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
              <button
                onClick={() => handelDeleteProject(project.id)}
                className="ml-auto flex items-center px-4 rounded-md bg-blue-400 py-1">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 12V17"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 12V17"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminProject;
