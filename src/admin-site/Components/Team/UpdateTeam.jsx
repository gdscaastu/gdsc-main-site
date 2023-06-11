import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function MemberUpdateForm() {

  const { id } = useParams()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [linkedin_url, setLinkedin_url] = useState('')
  const [github_url, setGithub_url] = useState('');
  const [member_type, setMemebr_type] = useState('')
  const [year_joined, setYearJoind] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    // Fetch member data on component mount
    axios.get(`https://gdsc-main-site.onrender.com/v1/member/${id}`)
      .then(response => {
        setName(response.data[0]?.name);
        setEmail(response.data[0]?.email);
        setPosition(response.data[0]?.position);
        setStatus(response.data[0]?.status);
        setLinkedin_url(response.data[0]?.linkedin_url);
        setGithub_url(response.data[0]?.github_url);
        setMemebr_type(response.data[0]?.member_type);
        setYearJoind(response.data[0]?.year_joined)
      })
      .catch(error => {
        console.error(error);
       
      });
  }, [id]);

  

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`https://gdsc-main-site.onrender.com/v1/member/${id}`, 
    {
        name,
        email,
        position,
        status,
        linkedin_url,
        github_url,
        member_type,
        year_joined
    },
    {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}  
    )
      .then(response => {
        console.log(response.data);
        navigate('/admin/team');

      })
      .catch(error => {
        console.error(error);
      });
  }; 

        return (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mr-80">
                <div className="mb-10">
                    <h1 className="shadow-sm bg-white border w-[50vw] text-bold border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                    Update Member
                    </h1>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block text-gray-700 font-bold mb-2">Position:</label>
                    <input type="text" name="position" id="position" value={position} onChange={(event) => setPosition(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status:</label>
                    <input type="text" name="status" id="status" value={status} onChange={(event) => setStatus(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="linkedin_url" className="block text-gray-700 font-bold mb-2">LinkedIn URL:</label>
                    <input type="url" name="linkedin_url" id="linkedin_url" value={linkedin_url} onChange={(event) => setLinkedin_url(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="github_url" className="block text-gray-700 font-bold mb-2">GitHub URL:</label>
                    <input type="url" name="github_url" id="github_url" value={github_url} onChange={(event) => setGithub_url(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="member_type" className="block text-gray-700 font-bold mb-2">Member Type:</label>
                    <input type="text" name="member_type" id="member_type" value={member_type} onChange={(event) => setMemebr_type(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="year_joined" className="block text-gray-700 font-bold mb-2">Year Joined:</label>
                    <input type="number" name="year_joined" id="year_joined" value={year_joined} onChange={(event) => setYearJoind(event.target.value)} className="shadow appearance-none border rounded w-[50vw] py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update Member</button>
                    <button onClick={() => navigate(`/admin/member/imageupload/${id}`)} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">upload Image</button>
                </div>
        </form>
        );
        }

export default MemberUpdateForm;