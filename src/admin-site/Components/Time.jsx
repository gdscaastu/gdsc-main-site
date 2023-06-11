import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const TimePicker = ({ setSelectedTime }) => {
  const [selectedTime, setSelectedTimeState] = useState(new Date());

  const handleTimeChange = (time) => {
    setSelectedTimeState(time);
    setSelectedTime(format(time, "HH:mm:ss"));
    console.log(format(time, "HH:mm:ss"));
  };

  return (
    <div className="relative mb-3 w-[70%]">
      <DatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className="w-full shadow-sm bg-white border border-gray-900 text-gray-900 placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4">
          <path
            fillRule="evenodd"
            d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18.75a8.75 8.75 0 118.75-8.75 8.76 8.76 0 01-8.75 8.75zm0-15a6.25 6.25 0 106.25 6.25A6.26 6.26 0 0010 3.75z"
            clipRule="evenodd"
          />
          <path d="M10 5a.5.5 0 01.5.5v4.25l2.75 1.5a.5.5 0 01-.5.87l-3-1.625a.5.5 0 010-.874l3-1.625a.5.5 0 01.25-.068.5.5 0 01.25.068l-2.75 1.5V5.5a.5.5 0 01.5-.5z" />
        </svg>
      </span>
    </div>
  );
};

export default TimePicker;
