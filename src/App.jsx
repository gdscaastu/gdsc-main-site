import "./App.css";
import react from "react"
import Projects from "../src/main-site/Components/ProjectsComponent/Projects";
import ClintProjectPage from "./main-site/Pages/ClientprojectPage";
import ProjectDetail from "../src/main-site/Components/ProjectsComponent/ProjectDetail";
import HomePage from "./main-site/Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavbar from "./main-site/Components/Navabar";
import EventPage from "./main-site/Pages/EventPage";
import EventDetailPage from "./main-site/Pages/EventDetailPage";
import ClientprojectDetailPage from "./main-site/Pages/ClientProjectDetailPage";
import TeamPage from "./main-site/Pages/TeamPage";

//admin side routings
import AddNewEventPage from "./admin-site/Components/Pages/AddNewEventPage";
import AddNewSponsorPage from "./admin-site/Components/Pages/AddNewSponsorPage";
import SingnIn from "./admin-site/Components/Pages/SingnIn";
import ProjectPage from "./admin-site/Components/Pages/ProjectPage";
import SponsorPage from "./admin-site/Components/Pages/SponsorPage";
import UpdateEventPage from "./admin-site/Components/Pages/UpdateEventPage";
import UpdateProjectPage from "./admin-site/Components/Pages/UpdateProjectPage";
import UpdateSponsorPage from "./admin-site/Components/Pages/UpdateSponsorPage";
import AddContributorModal from "./admin-site/Components/Project.jsx/AddContributorModal";
import AddNewProjectPage from "./admin-site/Components/Pages/AddNewProjectPage";
import UploadImagePage from "./admin-site/Components/Pages/UploadImagePage";
import UploadSponsorImage from "./admin-site/Components/Pages/UploadSponsorImagePage";
import Members from "./admin-site/Components/Team/Team";
import AdminTeamPage from "./admin-site/Components/Pages/TeamPage";
import UpdateMemberPage from "./admin-site/Components/Pages/UpdateMemberPage";
import AddMemberPage from "./admin-site/Components/Pages/AddMemberPPage";
import UploadMemberImagePage from "./admin-site/Components/Pages/UploadMemberImagePage";
import AdminEventPage from "./admin-site/Components/Pages/EventPage";
import UploadEventImagePage from "./admin-site/Components/Pages/UploadEventImagePage";
function App() {
  const isAdmin = localStorage.getItem("isAdmin");
  return (
    <div className="App dark:bg-white">
      <Router>
       
        <Routes>
          {/* client side routing */}
          <Route path="/" exact Component={HomePage} />
          <Route path="/projects" exact Component={ClintProjectPage} />
          <Route path="/team" exact Component={TeamPage} />
          <Route path="/project/:id" Component={ClientprojectDetailPage} />
          <Route path="/event/:id" Component={EventDetailPage} />
          <Route path="/events" exact Component={EventPage} />
        </Routes>
        <Routes>
          {/* admin side routing */}
          <Route exact path="/admin" element={<ProjectPage />} />
          <Route exact path="/admin/login" element={<SingnIn />} />
          <Route exact path="/admin/project" element={<ProjectPage />} />
          <Route
            exact
            path="/admin/project/new"
            element={<AddNewProjectPage />}
          />
          <Route
            path="/admin/project/edit/:id"
            element={<UpdateProjectPage />}
          />
          <Route
            path="/admin/project/imageupload/:id"
            element={<UploadImagePage />}
          />
          <Route
            path="/admin/sponsor/imageupload/:id"
            element={<UploadSponsorImage />}
          />
          <Route exact path="/admin/sponsor" element={<SponsorPage />} />
          <Route
            exact
            path="/admin/sponsor/new"
            element={<AddNewSponsorPage />}
          />
          <Route
            path="/admin/sponsor/edit/:id"
            element={<UpdateSponsorPage />}
          />
          <Route exact path="/admin/team/" element={<AdminTeamPage />} />
          <Route path="/admin/member/edit/:id" element={<UpdateMemberPage />} />
          <Route path="/admin/member/new" element={<AddMemberPage />} />
          <Route
            path="/admin/member/imageupload/:id"
            element={<UploadMemberImagePage />}
          />

          <Route exact path="/admin/event" element={<AdminEventPage />} />
          <Route exact path="/admin/event/new" element={<AddNewEventPage />} />
          <Route path="/admin/event/edit/:id" element={<UpdateEventPage />} />
          <Route  path="/admin/event/imageupload/:id" element={<UploadEventImagePage />} />   
        </Routes>

    
      </Router>
    </div>
  );
}

export default App;
