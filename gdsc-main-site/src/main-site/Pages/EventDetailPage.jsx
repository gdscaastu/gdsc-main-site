import React from "react";
import EventDetail from "../Components/EventComponents/EventDetail";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/Navabar";
import { useParams } from "react-router-dom";

const EventDetailPage = ({ onClose }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full mb-2"></div>
      <div className="w-full flex justify-center items-center self-center">
        <EventDetail onClose={onClose} id={id} />
      </div>
    </div>
  );
};

export default EventDetailPage;
