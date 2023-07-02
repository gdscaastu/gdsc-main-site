import React, { useState, useEffect } from "react";
import EventCard from "../Components/EventComponents/EventCard";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/Navabar";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://gdsc-main-site.onrender.com/v1/event")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full mb-2">
        <MainNavbar />
      </div>
      <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full mb-2"></div>
      <div className="w-[100%] justify-center flex  ">
        <div className="flex flex-col w-full sm:w-[80%] gap-12 m-4 sm:m-0">
          <div className="flex flex-col gap-2 dark:text-black">
            <h1 className="text-lg text-blue-400">Events</h1>
            <div className="text-base">
              <h1 className="text-sm">
              GDSC AASTU hosts a variety of exciting events that cater to the interests and needs of its community members. These events serve as valuable platforms for learning, collaboration, and networking within the field of technology.
              </h1>
           
            </div>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:grid-cols-3 gap-10">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 rounded-md h-40"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded-md"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:grid-cols-3 gap-10">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-[90%] w-[100%] lg:mt-10 lg:ml-10 ml-1 mr-1 ">
        <Footer />
      </div>
    </div>
  );
};

export default EventPage;
