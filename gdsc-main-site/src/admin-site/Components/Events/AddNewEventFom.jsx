import React, { useState } from "react";
import DatePicker from "../Date";
import TimePickerComponent from "../Time";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNewEventFom = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      name: title,
      description,
      location: place,
      time: selectedTime,
      date: selectedDate,
    };

    
    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/event', formData , 
      {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}

      );
      if (response.status === 200) {
        console.log(response.data);
        navigate(`/admin/event/imageUpload/${response.data.event.id}`);
    } 
    } catch (error) {
      console.log(error);
    }
  
    console.log(formData);
  };

  return (
    <div className="w-[100%] flex flex-col">
      <div className="mb-10">
        <h1 className="shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          New Event
        </h1>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              Title*
            </label>
            <input
              required
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex mb-10">
            <label className="w-[15%] items-center flex " htmlFor="">
              Description*
            </label>
            <textarea
              required
              id="message"
              rows={4}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              Place:
            </label>
            <input
              required
              placeholder="Event place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-10 flex">
            <div className="flex w-[15%]">
              <label className="flex justify-center items-center" htmlFor="">
                Date:
              </label>
            </div>
            <div className="w-[90%] flex justify-between">
              <div className="w-[25%]">
                <DatePicker required setSelectedDate={setSelectedDate} />
              </div>
              <div className="w-[40%] flex gap-10 justify-between">
                <label className="flex justify-center items-center" htmlFor="">
                  Time:
                </label>
                <TimePickerComponent required setSelectedTime={setSelectedTime} />
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
export default AddNewEventFom;
