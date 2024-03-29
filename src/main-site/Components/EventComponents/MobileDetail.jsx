import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../../index.css";

const MobileDetail = ({ id = 2 }) => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch(`https://gdsc-main-site.onrender.com/v1/event/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error(error));
    console.log(event);
  }, []);

  let imageurls = [""];
  if (event.image_url) {
    imageurls = event.image_url.split(";");
  }
  return (
    <div className="flex flex-col gap-5 p-4">
      <div>
        <h1 className="text-blue-500 text-lg">Events Detail</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span>
            <svg
              fill="#000000"
              className="w-6 h-6 shrink-0"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <title>calendar</title>
              <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-1.952-1.12-3.488t-2.88-2.144v2.624q0 1.248-0.864 2.144t-2.144 0.864-2.112-0.864-0.864-2.144v-3.008h-12v3.008q0 1.248-0.896 2.144t-2.112 0.864-2.144-0.864-0.864-2.144v-2.624q-1.76 0.64-2.88 2.144t-1.12 3.488v20zM4 26.016v-16h24v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-3.008h-1.984v3.008zM8 24h4v-4h-4v4zM8 18.016h4v-4h-4v4zM14.016 24h4v-4h-4v4zM14.016 18.016h4v-4h-4v4zM20 24h4v-4h-4v4zM20 18.016h4v-4h-4v4zM24 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.32-0.704v-3.008h-2.016v3.008z"></path>
            </svg>
          </span>
          <p className="text-base font-bold">{event.date}</p>
        </div>
        <div className="flex gap-2">
          <span>
            <svg
              fill="#000000"
              className="w-6 h-6 shrink-0"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <title>time</title>
              <path d="M0 16q0-3.232 1.28-6.208t3.392-5.12 5.12-3.392 6.208-1.28q3.264 0 6.24 1.28t5.088 3.392 3.392 5.12 1.28 6.208q0 3.264-1.28 6.208t-3.392 5.12-5.12 3.424-6.208 1.248-6.208-1.248-5.12-3.424-3.392-5.12-1.28-6.208zM4 16q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM14.016 16v-5.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v4h4q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-6.016q-0.832 0-1.408-0.576t-0.576-1.44z"></path>
            </svg>
          </span>
          <p className="text-lg font-bold">{event.time}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-lg">
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="w-6 h-6 shrink-0"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
              xml:space="preserve">
              <path
                fill="#231F20"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              />
            </svg>
          </span>
          <span className="text-lg font-bold">{event.location}</span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center">About This Event</h1>
      </div>
      <div>
        <p className="text-base">{event.description}</p>
      </div>
      <div className="flex lg:flex-wrap overflow-x-scroll p-5 w-full gap-8">
        {imageurls.map((imageurl, index) => (
          <div className=" min-w-[45%] h-24  overflow-hidden">
            <img className="w-full h-full object-cover" src={imageurl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDetail;
