import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./main-site/Components/TeamComponents/Team";
import AdminTeam from "./admin-site/Components/Team.jsx/Team";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
