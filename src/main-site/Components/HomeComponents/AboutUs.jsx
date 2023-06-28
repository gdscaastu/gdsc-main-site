import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-3xl p-8 bg-white rounded-lg flex flex-col justify-between gap-5">
        <div>
          <h1 className="text-blue-500">About Us</h1>
        </div>
        <div>
          <h1 className="text-xl text-black font-bold">
            Developer Student Clubs is a Google Developers program for
            university students.
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">
            Our mission is to provide a space where students can learn, build,
            and grow their skills in technology. We organize workshops, events,
            and projects that are designed to help students gain hands-on
            experience with the latest technologies and tools.
          </p>
          <p className="text-gray-500">
            Our activities cover a wide range of topics, including web
            development, machine learning, mobile app development, and more. At
            our community, we believe that everyone should have access to the
            knowledge and resources needed to succeed in the technology
            industry. We also provide opportunities for students to network with
            industry professionals and connect with other like-minded
            individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
