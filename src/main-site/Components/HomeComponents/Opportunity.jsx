import React from "react";

const Opportunity = () => {
  return (
    <div className="w-full p-8 bg-white flex flex-col justify-between gap-4">
      <div>
        <h1 className="text-blue-500">
          Opportunities GDSC'S Provides Students with
        </h1>
      </div>
      <div className="text-black text-xl font-bold tracking-wide">
        <p>Developer Student Clubs is a Google </p>
        <p>Developers program for a university students.</p>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <p>
          Grow their knowledge on developer technologies and more through peer
          to peer workshops and events. Showcase their prototypes and solutions
          to their local community and industry leaders. Gain relevant industry
        </p>
        <p>
          experience by solving problems for local organizations with technology
          based solutions. Getting inspiration to become world-class developers
          and changemakers from sharing others' success stories.
        </p>
      </div>
    </div>
  );
};

export default Opportunity;
