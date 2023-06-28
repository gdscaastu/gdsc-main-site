import React, { useState, useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

import axios from "axios";
import jwt_decode from "jwt-decode";

const SingnIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://gdsc-main-site.onrender.com/v1/admin/login",
        { email, password }
      );
      console.log(response);
      if (response.status === 200) {
        const token = response.data.accessToken;
        const decoded = jwt_decode(token);

        localStorage.setItem("token", token);
        localStorage.setItem("isAdmin", true);

        console.log(localStorage.getItem("token"));
        navigate('/admin')
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      console.error(error);
      setError("incorrect email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleLogin} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Log In
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default SingnIn;
