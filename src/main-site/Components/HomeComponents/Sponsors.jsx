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
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return (
    <div className="lg:w-full w-[95%] p-6 px-10 bg-white rounded-lg shadow-right-bottom">
      <div>
        <h1 className="text-black text-lg  text-center">
          Supported by many Sponsors, including
        </h1>
        <br />
      </div>
      {loading ? (
        <div className="flex lg:flex-wrap overflow-x-scroll lg:lg:justify-evenly p-5 noscroll">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`overflow-hidden border border-black ${
                isDesktop ? "w-[90px] h-[75px] ml-5" : "min-w-[45%] h-24 ml-5  "
              }`}
            >
              <div className="animate-pulse w-full h-full bg-gray-200"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div>Error occurred while loading sponsors.</div>
      ) : (
        <div className="flex lg:flex-wrap overflow-x-scroll lg:lg:justify-evenly p-5 noscroll">
          {data
            .filter((item) => item.image_url)
            .map((item) => (
              <div
                key={item.id}
                className={`overflow-hidden border border-black ${
                  isDesktop
                    ? "w-[90px] h-[75px] ml-5"
                    : "min-w-[45%] h-24 ml-5  "
                }`}
              >
                <a href={item.sponser_link} target="_blank" rel="noreferrer">
                  <img
                    className="w-full h-full object-fill"
                    src={item.image_url}
                    alt=""
                  />
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sponsors;
