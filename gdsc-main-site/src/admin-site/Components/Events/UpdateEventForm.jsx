import React from "react";
import DatePicker from "./che";
import TimePickerComponent from "./Time";
import ImageDropzone from "./ImageDrop";
import { useState, useEffect } from "react";
import { set } from "date-fns";

const UpdateEvent = ({ id = 1 }) => {
  const [event, setEvent] = useState(null); // Replace with the date value from the API response
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setEvent({
      ...event,
      time: time,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEvent({
      ...event,
      date: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the event object to the server
    console.log(event);
  };

  const validateFields = () => {
    if (!event?.title || !event?.description || !event?.date || !event?.time) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    fetch(`https://gdsc-main-site.onrender.com/v1/event/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error(error));
    console.log(event);
  }, [id]);

  return (
    <div className="w-[100%] flex flex-col">
      <div className="mb-10">
        <h1 className="shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Update Event
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} action="">
          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              Title*
            </label>
            <input
              placeholder="Event Title"
              value={event?.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex mb-10">
            <label className="w-[15%] items-center flex " htmlFor="">
              Description*
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Description..."
              value={event?.description}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
            />
          </div>

          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              Place:
            </label>
            <input
              placeholder="Event Name"
              value={event?.location}
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex mb-14">
            <div className="flex w-[15%]">
              <label className="flex justify-center items-center" htmlFor="">
                Date:
              </label>
            </div>
            <div className="w-[90%] flex justify-between">
              <div className="w-[25%]">
                <DatePicker setSelectedDate={handleDateChange} />
              </div>
              <div className="w-[40%] flex gap-10 justify-between">
                <label className="flex justify-center items-center" htmlFor="">
                  Time:
                </label>
                <TimePickerComponent setSelectedTime={handleTimeChange} />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button className="mr-2  py-1 px-7 rounded-md bg-gray-300 text-black">
              <span className="flex justify-center items-center">Cancel</span>
            </button>
            <button
              type="submit"
              className="mr-2  py-1 px-7 rounded-md bg-green-500 text-white font-bold">
              <span className="flex justify-center items-center">
                Save Changes
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateEvent;
