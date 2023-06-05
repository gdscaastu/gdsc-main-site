import React from "react";
import "../../../index.css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Sponsors = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://gdsc-main-site.onrender.com/v1/sponser")
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(data);
  }, []);
  return (
    <div className="lg:w-full w-[95%] p-6 px-10 bg-white rounded-lg shadow-right-bottom">
      <div>
        <h1 className="text-black text-lg  text-center">
          Supported by many Sponsors, including
        </h1>
        <br />
      </div>
      <div className="flex lg:flex-wrap overflow-x-scroll lg:lg:justify-evenly p-5 noscroll">
        {data
          .filter((item) => item.image_url)
          .map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden border border-black ${
                isDesktop ? "w-[90px] h-[75px] ml-5" : "min-w-[45%] h-24 ml-5  "
              }`}>
              <img
                className="w-full h-full object-fill"
                src={item.image_url}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sponsors;
