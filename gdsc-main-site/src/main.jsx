import React from "react";
import ReactDOM from "react-dom/client";
import AddNewEventFom from "./admin-site/Components/Events/AddNewEventFom";
import Event from "./admin-site/Components/Events/Event";
import UpdateEventForm from "./admin-site/Components/Events/UpdateEventForm";
import Navbar from "./admin-site/Components/Navbar";
import AddNewEventPage from "./admin-site/Components/Pages/AddNewEventPage";
import AddNewSponsorPage from "./admin-site/Components/Pages/AddNewSponsorPage";
import EventPage from "./admin-site/Components/Pages/EventPage";
import AddContributorModal from "./admin-site/Components/Project.jsx/AddContributorModal";
import AddNewProjectForm from "./admin-site/Components/Project.jsx/AddNewProjectForm";
import AdminProject from "./admin-site/Components/Project.jsx/AdminProject";
import UpdateProjectForm from "./admin-site/Components/Project.jsx/UpdateProjectForm";
import AddNewSponsor from "./admin-site/Components/Sponsors/AddNewSponsor";
import Sponsors from "./admin-site/Components/Sponsors/Sponsors";
import UpdateSponsorForm from "./admin-site/Components/Sponsors/UpdateSponsor";
import UploadImages from "./admin-site/Components/UploadImages";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddNewSponsorPage />
  </React.StrictMode>
);
