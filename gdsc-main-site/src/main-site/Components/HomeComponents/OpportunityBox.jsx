import React from "react";

const OpprtunityBox = ({ children }) => {
  return (
    <div className="lg:w-72 w-64 px-2 py-6 bg-white rounded-lg shadow-right-bottom border border-gray-200 flex flex-col gap-4">
      <div className="w-12 h-12 border border-black rounded-lg"></div>
      <div>
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};

export default OpprtunityBox;
