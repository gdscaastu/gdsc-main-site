import React from "react";
import ReactDOM from "react-dom/client";

import AddNewEventPage from "./admin-site/Components/Pages/AddNewEventPage";
import AddNewSponsorPage from "./admin-site/Components/Pages/AddNewSponsorPage";
import SingnIn from "./admin-site/Components/Pages/SingnIn";
import ProjectPage from "./admin-site/Components/Pages/ProjectPage";
import SponsorPage from "./admin-site/Components/Pages/SponsorPage";
import UpdateEventPage from "./admin-site/Components/Pages/UpdateEventPage";
import UpdateProjectPage from "./admin-site/Components/Pages/UpdateProjectPage";
import UpdateSponsorPage from "./admin-site/Components/Pages/UpdateSponsorPage";
import AddContributorModal from "./admin-site/Components/Project.jsx/AddContributorModal";
import UploadImages from "./admin-site/Components/UploadImages";
import AddNewProjectPage from "./admin-site/Components/Pages/AddNewProjectPage";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
