import React from "react";
import AddNewEventFom from "../Events/AddNewEventFom";
import Navbar from "../Navbar";

const AddNewEventPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AddNewEventFom />
      </div>
    </div>
  );
};

export default AddNewEventPage;
