import React from "react";

const Opportunity = () => {
  return (
    <div className="w-full p-8 bg-white flex flex-col justify-between gap-2">
      <div>
        <h1 className="text-blue-500 text-xl">
          Opportunities GDSC'S Provides Students with
        </h1>
      </div>
      <div className="text-lg font-bold tracking-wide leading-relaxed flex flex-col gap-0">
        <p>
          Developer Student Clubs is a Google Developers program for a
          university students.
        </p>
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
