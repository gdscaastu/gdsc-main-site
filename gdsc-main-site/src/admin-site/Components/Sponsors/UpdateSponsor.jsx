import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const UpdateSponsorForm = ({ id = 1 }) => {
  const [Sponsor, setSponsor] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Sponsor);
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://gdsc-main-site.onrender.com/v1/sponser/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSponsor(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="w-[100%] flex flex-col">
      <div className="mb-10">
        <h1 className="shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          Update Sponsor
        </h1>
      </div>
      <div>
        {loading ? (
          <div className="mb-10 flex">
            <label className="w-[15%] items-center flex " htmlFor="">
              <Skeleton width={100} />
            </label>
            <Skeleton width={200} height={40} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} action="">
            <div className="mb-10 flex">
              <label className="w-[15%] items-center flex " htmlFor="">
                Name:
              </label>
              <input
                placeholder="Sponsor Title"
                value={Sponsor?.name}
                onChange={(e) =>
                  setSponsor({ ...Sponsor, name: e.target.value })
                }
                className="w-[90%] shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="mr-2  py-1 px-7 rounded-md bg-gray-300 text-black">
                <span className="flex justify-center items-center">Cancel</span>
              </button>
              <button
                type="submit"
                className="mr-2  py-1 px-7 rounded-md bg-green-500 text-white font-bold">
                <span className="flex justify-center items-center">
                  Save Changes
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default UpdateSponsorForm;
