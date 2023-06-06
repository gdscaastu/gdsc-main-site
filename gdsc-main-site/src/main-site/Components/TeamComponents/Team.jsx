import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import MemberCard from "./MemberCard";
import { Accordion } from "react-bootstrap";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gdsc-main-site.onrender.com/v1/member")
      .then((response) => setData(response.data))
      .then((response) => {})
      .catch((error) => console.log(error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const CardList = () => {
  const data = useContext(DataContext);
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
    groupedByYearAndPosition[year] = groupBy(groupedByYear[year], "position");
  });

  return (
    <div className="container">
      <div className="mb-4">
        <h5 className="text-left team-header">Meet our team</h5>
        <p npmclassName="text-left text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quidem
          vel aperiam animi cum, minima reiciendis amet numquam, deleniti iusto
          rerum velit nostrum aliquid eveniet sequi optio et fuga? Quod!
        </p>
      </div>
      <div>
        {Object.entries(groupedByYearAndPosition).map(([startYear, team]) => (
          <Accordion defaultActiveKey="0" className="">
            <Accordion.Item className="mt-3 mx-5 ">
              <Accordion.Header>
                <span>{startYear}</span>/
                <span>{parseInt(startYear) + 1} year</span>
              </Accordion.Header>
              <Accordion.Body 
              style={{
                backgroundColor:"rgb(234,234,234)"  }}
              className="flex flex-row flex-wrap">
                {Object.entries(team).map(([position, members]) => (
                  <div>
                    <h4
                    style={{
                      color: "#4486f4"
                    }}
                    className="text-left">{position}</h4>
                    <div className="flex">
                      {members.map((member) => {
                        return (
                          <div className="flex ">
                            <MemberCard key={member.id} member={member} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <DataProvider>
      <CardList />
    </DataProvider>
  );
};

export default Team;
