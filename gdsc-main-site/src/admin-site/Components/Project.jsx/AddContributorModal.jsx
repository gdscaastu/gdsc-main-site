import React from "react";
import { useState } from "react";
import AddContributorForm from "./AddContributorForm";

const AddContributorModal = ({ isOpen, toggle, handleFormSubmit }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full flex justify-center ${
        isOpen ? "block bg-black bg-opacity-50 " : "hidden"
      }`}>
      <div className="relative w-full max-w-lg max-h-lg opacity-">
        <div className="relative bg-white rounded-lg dark:bg-gray-700  shadow-right-bottom-blur">
          <div className="flex items-start justify-between pt-3 px-10  rounded-t dark:border-gray-600">
            <h3 className="text-lg text-gray-900 dark:text-white">
              Add Contibutor
            </h3>
            <button
              onClick={toggle}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div>
            <AddContributorForm
              handleFormSubmit={handleFormSubmit}
              togglemodal={toggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContributorModal;
