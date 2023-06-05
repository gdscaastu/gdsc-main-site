import { min } from "date-fns";
import React, { useState } from "react";
import { format } from "date-fns";
import Datepicker from "tailwind-datepicker-react";

const DatePicker = ({ setSelectedDate }) => {
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    setSelectedDate(format(selectedDate, "yyyy-MM-dd"));
    console.log(format(selectedDate, "yyyy-MM-dd"));
  };

  const handleClose = (state) => {
    setShow(state);
  };
  const options = {
    title: "Event Date",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    minDate: new Date(),
    theme: {
      background: "#fff", // Change the background color to white
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
  };
  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatePicker;
