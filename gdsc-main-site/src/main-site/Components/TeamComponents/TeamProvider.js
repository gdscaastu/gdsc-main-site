import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "../../../teamPage.css";

export const TeamContext = createContext();
const TeamProvider = (props) => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://gdsc-main-site.onrender.com/v1/member")
      .then((response) => setTeams(response.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <TeamContext.Provider value={teams}>
        {props.children}
      </TeamContext.Provider>
    );
  }
};

export default TeamProvider;
