import React from 'react'
import { useNavigate } from "react-router";

const UnauthorizedPage = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center">
            <h1> <span className="red">X</span> Unauthorized Access</h1>
            <p>You must be logged in as an admin to access this page.</p>
            <button className="btn btn my-2" onClick={() => navigate('/admin/login')}>Login as an admin</button>
    </div>
  )
}

export default UnauthorizedPage