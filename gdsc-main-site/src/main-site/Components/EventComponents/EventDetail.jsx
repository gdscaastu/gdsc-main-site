import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../../index.css";
import MobileDetail from "./MobileDetail";
import { Link } from "react-router-dom";

const EventDetail = ({ onClose, id }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [event, setEvent] = useState([]);
  const [ind, setInd] = useState(0);

  const [loading, setLoading] = useState(true); // add loading state
  useEffect(() => {
    fetch(`https://gdsc-main-site.onrender.com/v1/event/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        setLoading(false); // set loading to false once data has been fetched
      })
      .catch((error) => console.error(error));
    console.log(event);
  }, []);

  const handelImagesChange = (ind) => {
    setInd(ind);
  };

  let imageurls = [""];
  if (event.image_url) {
    imageurls = event.image_url.split(";");
  }

  if (!isDesktop) {
    return <MobileDetail id={id} />;
  }

  // render loading skeleton while loading is true
  if (loading) {
    return (
      <div className="flex flex-col w-[80%] gap-10 dark:text-black">
        <div className="animate-pulse">
          <h1 className="text-blue-500 text-lg">Loading...</h1>
        </div>
        <div className="flex w-full gap-5 h-[420px]">
          <div className="w-1/5 h-full animate-pulse overflow-y-scroll scrolly">
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <div className="w-4/5 h-4/5 flex gap-[70px]">
            <div
              style={{ backgroundColor: "#f1f1f1" }}
              className="h-full w-7/12  bg-gray-200 relative animate-pulse">
              <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 shadow-right-bottom"></div>
            </div>
            <div className="h-full w-7/12 flex flex-col gap-5">
              <div>
                <div className="text-2xl font-bold animate-pulse bg-gray-300 w-3/4 h-8"></div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <span></span>
                    <span className="text-gray-600 animate-pulse bg-gray-300 w-3/4 h-6"></span>
                  </div>
                  <div className="flex gap-2">
                    <span></span>
                    <span className="text-gray-600 animate-pulse bg-gray-300 w-3/4 h-6"></span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-gray-600 animate-pulse bg-gray-300 w-full h-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 h-full animate-pulse overflow-y-scroll scrolly">
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={`/event/${event.id}`}
            className="text-white font-bold bg-blue-500 px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-colors">
            View More
          </Link>
        </div>
      </div>
    );
  }

  if (!isDesktop) {
    return <MobileDetail id={id} />;
  }
  return (
    <div className="flex flex-col w-[80%]  gap-10 dark:text-black">
      <div>
        <h1 className="text-blue-500 text-lg">Events Detail</h1>
      </div>
      <div className="flex w-full gap-5 h-[420px]">
        <div className="w-1/5 h-full overflow-y-scroll scrolly">
          {imageurls.map((imageurl, index) => (
            <div className="w-4/6 h-[120px] box-sizing-border-box flex items-center justify-center mb-5 rounded-md shadow-right-bottom">
              <a
                onClick={(e) => handelImagesChange(index)}
                className="w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={imageurl}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
        <div className="w-4/5 h-4/5 flex gap-[70px]">
          <div
            style={{ backgroundColor: "#f1f1f1" }}
            className="h-full w-7/12  bg-gray-200 relative">
            <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 shadow-right-bottom">
              <img
                className="w-full h-full object-cover rounded-md"
                src={imageurls[ind]}
                alt=""
              />
            </div>
          </div>
          <div className="h-full w-7/12 flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-bold">{event.name}</h1>
            </div>
            <div className="flex gap-5">
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
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-lg font-bold text-center">
                  About This Event
                </h1>
              </div>
              <div>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>

            <div className="items-center justify-center flex mt-4">
              <Link to="/events">
                <button className=" px-3 py-1 bg-black text-white rounded-2xl text-sm">
                  Back to Events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
