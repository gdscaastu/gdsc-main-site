import React, { Children, useState } from "react";

function FAQsAccordion({ children, answer, style = "t" }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="
    "
    >
      <button
        type="button"
        className={`flex w-full text-sm items-center bg-white text-blue-500 justify-between px-5 py-4 text-left font-medium border border-${style}-black`}
        onClick={handleClick}
      >
        <span>{children}</span>
        {isOpen ? (
          <svg
            data-accordion-icon=""
            className="h-6 w-6 shrink-0 rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            data-accordion-icon=""
            className="h-6 w-6 shrink-0 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="px-5 w-full py-3 bg-gray-200 border border-t-black">
          <p className="text-sm dark:text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQsAccordion;
