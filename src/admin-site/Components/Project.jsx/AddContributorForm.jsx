import React, { useEffect } from "react";
import { useState } from "react";

const AddContributorForm = ({ handleFormSubmit, togglemodal }) => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    fetch("https://gdsc-main-site.onrender.com/v1/member")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error(error));
  }, []);
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleInputChange = (event) => {
    setSelectedMember(event.target.value);
    console.log(selectedMember);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(selectedMember, selectedRole);
    togglemodal();
  };
  return (
    <form onSubmit={handleSubmit} action="" className="px-10 py-5">
      <div className="mb-4">
        <select
          id="member-select"
          name="member-select"
          value={selectedMember}
          onChange={handleInputChange}
          className="shadow-sm bg-white border border-gray-900 text-gray-900 placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          <option value="">Select Contributor</option>
          {members.map((member) => (
            <option key={member.id} value={member.id + " " + member.name}>
              {member.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <select
          id="role-select"
          name="role-select"
          value={selectedRole}
          onChange={handleRoleChange}
          className="shadow-sm bg-white border border-gray-900 text-gray-900 placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          <option value="">Select a role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Mobile Developer">Mobile Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Project Lead">Project Lead</option>
        </select>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="shadow-sm bg-green-500  text-white font-bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Save Changes
        </button>
      </div>
      <div className="">
        <button
          onClick={togglemodal}
          type="button"
          className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AddContributorForm;
