import React from "react";
import UpdateEventForm from "../Events/UpdateEventForm";
import Navbar from "../Navbar";

const UpdateEventPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UpdateEventForm />
      </div>
    </div>
  );
};

export default UpdateEventPage;
