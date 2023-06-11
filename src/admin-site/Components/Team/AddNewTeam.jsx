import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
function MemberForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [memberType, setMemberType] = useState('');
  const [yearJoined, setYearJoined] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      position,
      status,
      memberType,
      yearJoined: parseInt(yearJoined),
      linkedin_url: linkedinUrl,
      github_url: githubUrl,
    };
    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/member', data,
      {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/admin/member/imageupload/${response.data.member.id}`);}
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-10">
            <h1 className="shadow-sm bg-white border w-[50vw] text-bold border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                Add New Member
        </h1>
                </div>
      <label className="block text-gray-700 font-bold mb-2">
        Name:
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
     
      <label className="block text-gray-700 font-bold mb-2">
        Email:
        </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      <label className="block text-gray-700 font-bold mb-2"> 
        Position:
        </label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      <label className="block text-gray-700 font-bold mb-2">
        Status:
        </label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      <label className="block text-gray-700 font-bold mb-2">
        Member Type:
        </label>
        <select value={memberType} onChange={(e) => setMemberType(e.target.value)} name="" id="" className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="Core Team">Core Team</option>
            <option value="Extended">Extended</option>
            <option value="Alumni">Alumni</option>
        </select>
      
      <label className="block text-gray-700 font-bold mb-2">
        Year Joined:
        </label>
        <input type="number" value={yearJoined} onChange={(e) => setYearJoined(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
    
      <label className="block text-gray-700 font-bold mb-2">
        LinkedIn User name:
        </label>
        <input type="text" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      <label className="block text-gray-700 font-bold mb-2">
        GitHub User name:
        </label>
        <input type="text" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)}className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      
      <div className='flex items-center justify-between'>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3">Submit</button>
      </div>
    </form>
  );
}

export default MemberForm;