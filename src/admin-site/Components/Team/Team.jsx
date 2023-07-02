import React, {useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
const Members = () => {
  const [members, setMembers] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();
<event className="preventDefaultx"></event>
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://gdsc-main-site.onrender.com/v1/member`
      );
      setMembers(result.data.filter(member => member.year_joined === parseInt(year)));
    };
    fetchData();
  }, [year]);

  const filterMember = (id) => {
    const newMember = members.filter((member) => member.id !== id);
    setMembers(newMember);
  };

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      handleDelete(id);
    }
  };


  const handleDelete = (id) => {
    {
      
    }
    fetch(`https://gdsc-main-site.onrender.com/v1/member/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        filterMember(id);
     
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const groupedMembers = members.reduce((groups, member) => {
    const position = member.member_type;
    if (!groups[position]) {
      groups[position] = [];
    }
    groups[position].push(member);
    return groups;
  }, {});

  return (
    <div className="mr-80">
    <div className="flex justify-center">
      <div className="ml-40">
      <div className=" mb-6 flex h-12 justify-between shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <h1 className="text-lg items-center">Team</h1>
        <button onClick={() => navigate("/admin/member/new")} className="flex items-center  justify-center py-0 px-2 bg-blue-500 rounded-md">
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
        <div className="mb-4 w-[55vw]">
          <select
            id="year"
            className = 'border border-gray-400 p-2 w-full px-4 py-2 rounded-md w-[50vw]'
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            <option value={2020}>2020 / 2021</option>
            <option value={2021}>2021 / 2022</option>
            <option value={2022}>2022 / 2023</option>
            <option value={2023}>2023 / 2024</option>
            <option value={2024}>2024 / 2025</option>
          </select>
        </div>
        {Object.keys(groupedMembers).map(position => (
          <div key={position} className="mb-4" >
            <h2 className=" font-bold mb-2  text-blue-500">{position}</h2>
            <div className="flex flex-col  gap-2 w-[50vw]">
              {groupedMembers[position].map(member => (
                <div key={member.id} className="border p-1 rounded-md flex justify-between">
                  <h4 className=" text-md p-3">{member.name}</h4>
                    <a className='p-3' href={`/admin/member/edit/${member.id}`}><i size="sm" class="fas fa-arrow-right"></i></a>
                    <button
                onClick={() => confirmDelete
                  (member.id)}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Members;