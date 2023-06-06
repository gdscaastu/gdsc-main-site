import React, { useState } from "react";
import DatePicker from "../Date";
import TimePicker from "../Time";

const AddNewSponsor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-[100%] flex flex-col">
      <div className="mb-10">
        <h1 className="shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          New Sponsor
        </h1>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              Name
            </label>
            <input
              placeholder="Event Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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

export default AddNewSponsor;
