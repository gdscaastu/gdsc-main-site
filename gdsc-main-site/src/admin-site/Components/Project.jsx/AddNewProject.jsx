import React, { useState } from "react";
import Select from "react-select";
import AddContributorModal from "./AddContributorModal";

const AddNewProjectForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const [Contributor, setContributor] = useState([]);
  const [len, setLen] = useState(Contributor.length);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const handleDeleteContributor = (index) => {
    const newItems = Contributor.filter((item, i) => i !== index);
    setContributor(newItems);
  };

  const toggleAddModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleUpdateModal = () => {
    setIsopen(!isopen);
  };
  const handleFormSubmit = (contributor, role) => {
    const formData = {
      id: contributor.slice(0, 1),
      name: contributor.slice(2),
      role: role,
    };
    setContributor([...Contributor, formData]);
    setLen(Contributor.length);
  };
  const submit = (e) => {
    e.preventDefault();
    const formData = {
      name: projectName,
      description: projectDescription,
      project_link: projectLink,
      type: selectedOptions.value,
    };
    if (
      !formData.name ||
      !formData.description ||
      !formData.project_link ||
      !formData.type
    ) {
      console.error("Form data is invalid");
      alert("please fill out all fields");
      return;
    }
    console.log(formData);
    // Send the request to the API with the valid form data
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: projectName,
      description: projectDescription,
      project_link: projectLink,
      type: selectedOptions.value,
    };
    fetch("https://gdsc-main-site.onrender.com/v1/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
            .eyJpZCI6NiwibmFtZSI6IkdlbWVjaGVzIEFkaXN1IiwiZW1haWwiOiJ3dWJlemVsZWtlQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NDQ5MDU5MywiZXhwIjoxNjg0NTMzNzkzfQ
            .IFRkryhvC8sQlPfBc - MG3R9b7clyToUeLzE_ToEkZ5k
        }`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <AddContributorModal
        isOpen={isOpen}
        toggle={toggleAddModal}
        handleFormSubmit={handleFormSubmit}
      />
      <div className="w-[100%] flex flex-col">
        <div className="mb-10">
          <h1 className="shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
            Add Project
          </h1>
        </div>
        <div>
          <form onSubmit={submit} action="">
            <div className="mb-10 flex">
              <label className="w-[15%] items-center flex " htmlFor="">
                Title*
              </label>
              <input
                placeholder="Project Title"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="flex mb-10">
              <label className="w-[15%] items-center flex " htmlFor="">
                Description*
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Description..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </div>

            <div className="mb-10 flex justify-between">
              <label className="w-[15%] items-center flex" htmlFor="">
                Project Type*
              </label>
              <div className="w-[90%]">
                <Select
                  className="w-full rounded-md"
                  options={[
                    { value: "Web Development", label: "Web Development" },
                    {
                      value: "Mobile App Development",
                      label: "Mobile App Development",
                    },
                  ]}
                  value={selectedOptions}
                  onChange={(options) => setSelectedOptions(options)}
                  placeholder="Select project type"
                />
              </div>
            </div>
            <div className="mb-10 flex">
              <label className="w-[15%] items-center flex " htmlFor="">
                Project Link:
              </label>
              <input
                placeholder="Project Link"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>

            <div className=" mb-10 flex h-12 justify-between shadow-sm bg-white border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm border-t border-b focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 pr-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
              <h1 className="text-lg items-center">Contributor:</h1>
              <button
                onClick={toggleAddModal}
                className="flex items-center  justify-center py-0 px-2 bg-blue-500 rounded-md">
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
            {Contributor.length > 0 && (
              <div className="flex  mb-4 flex-col">
                {Contributor.map((contributor, index) => (
                  <div
                    className={`flex justify-between border-black border-t border-l border-r  px-5 py-3 ${
                      index === Contributor.length - 1 ? "border-b" : ""
                    }`}>
                    <div>
                      <h1 className="">{contributor.name}</h1>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteContributor(index)}
                        className="ml-auto flex items-center px-4 rounded-md bg-blue-400 py-1">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 12V17"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 12V17"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4 7H20"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex justify-between">
              <button className="mr-2  py-1 px-7 rounded-md bg-gray-300 text-black">
                <span className="flex justify-center items-center">Cancel</span>
              </button>
              <button
                type="submit"
                className="mr-2  py-1 px-7 rounded-md bg-green-500 text-white font-bold">
                <span className="flex justify-center items-center">
                  Save Changes
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProjectForm;