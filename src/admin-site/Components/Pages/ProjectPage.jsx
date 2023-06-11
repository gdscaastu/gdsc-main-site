import React from "react";
import Navbar from "../Navbar";
import AdminProject from "../Project.jsx/AdminProject";
import UnauthorizedPage from "./UnauthorizedPage";
const ProjectPage = () => {
    
      if (!(localStorage.getItem('isAdmin'))) {
        return( <UnauthorizedPage />)
      }

    return(
      <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AdminProject />
      </div>
     </div>
    )
      
    
};

export default ProjectPage;
