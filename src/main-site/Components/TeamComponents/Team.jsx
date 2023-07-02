import React, { useState, useEffect, createContext, useContext } from "react";
import "../../../index.css";
import axios from "axios";
import MemberCard from "./MemberCard";
import { Accordion } from "react-bootstrap";
import { is } from "date-fns/locale";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://gdsc-main-site.onrender.com/v1/member")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const CardList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://gdsc-main-site.onrender.com/v1/member")
      .then((response) => {
        const filteredData = response.data.filter(
          (member) =>
            member.member_type !== "Contributor" &&
            member.member_type !== "Mentor"
          // Add additional conditions if needed for other member types
        );
        setData(filteredData);
      })

      
      .then((response) => setIsLoading(false) )
      .catch((error) => console.log(error));
  }, []);


 
  function groupBy(data, key) {
    return data.reduce((result, item) => {
      const group = item[key];
      result[group] = result[group] || [];
      result[group].push(item);
      return result;
    }, {});
  }

  const groupedByYear = groupBy(data, "year_joined");
  const groupedByYearAndPosition = {};

  Object.keys(groupedByYear).forEach((year) => {
    groupedByYearAndPosition[year] = groupBy(groupedByYear[year], "member_type");
  });
 
  return (
    
    isLoading ? (
 
        <div className="sm:w-[80%] sm:h-[100px] w-[80%] h-[150px] relative rounded-md animate-pulse my-5">
            <div className="bg-gray-200 rounded-lg w-full h-full my-2"></div>
            <div className="bg-gray-200 rounded-lg w-full h-full my-2"></div>
        </div>
    ) :  
    (
    <div className="max-w-[80%]">
      <div className="mb-4">
        <h5 
         style={{
          color: "#4486f4",
        }}
        className="text-left team-header">Meet our team</h5>
        <p npmclassName="text-left text-muted">
        Our team is comprised of enthusiastic students from diverse backgrounds who share a common 
        passion for technology and innovation. With their unique skill sets, they play a crucial role in
         fostering a vibrant community of developers within our university.

        </p>
      </div>
      <div className=" mx-auto">
        {Object.entries(groupedByYearAndPosition).map(([startYear, team]) => (
          <div  className="">
            <div className="collapse collapse-arrow container mx-auto ">
                  <input type="radio" name="my-accordion-2" /> 
                  <div className="collapse-title text-xl font-medium ">
                  <span>{startYear}</span>/
                  <span>{parseInt(startYear) + 1} year</span>
                  </div>
                  <div className="collapse-content"> 
                  <Accordion.Body
                    className="bg-gray-200"
               >
                {Object.entries(team).map(([position, members]) => (
                  <div >
                    <h4
                      style={{
                        color: "#4486f4",
                        fontSize: "1.2rem",
                      }}
                      className="text-left my-3 mx-3">
                      {position}
                    </h4>
                    <div className="flex flex-row flex-wrap mx-3 bg-gray-200">
                      {members.map((member) => {
                        return (
                          <div  >
                            <MemberCard key={member.id} member={member} isLoading = {isLoading} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </Accordion.Body>
                  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
          
         
  )

};

const Team = () => {
  return (
    <DataProvider>
      <CardList />
    </DataProvider>
  );
};

export default Team;
