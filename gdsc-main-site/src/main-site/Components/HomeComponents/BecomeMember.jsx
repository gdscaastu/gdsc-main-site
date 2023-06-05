import React from "react";

const BecomeMemeber = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="w-full p-8 bg-white rounded-lg  flex flex-col justify-between gap-5">
        <div>
          <h1 className="text-black md:text-4xl text-2xl font-bold">
            Developer Student Club Addis Ababa Science and Technology
            University.
          </h1>
        </div>
        <div>
          <p className="text-gray-500 text-sm">
            Developer Student Clubs is a Google Developers program for
            university students to learn mobile and web development skills,
            design thinking skills and leadership skills.
          </p>
        </div>
        <div>
          <button className="bg-blue-500 text-white font-bold rounded-lg px-6 py-3">
            Become a member
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeMemeber;
