import "./App.css";
import Projects from "../src/main-site/Components/ProjectsComponent/Projects";
import ClintProjectPage from "./main-site/Pages/ClientprojectPage";
import ProjectDetail from "../src/main-site/Components/ProjectsComponent/ProjectDetail";
import HomePage from "./main-site/Pages/HomePage";
import Team from "../src/main-site/Components/TeamComponents/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavbar from "./main-site/Components/Navabar";
import Footer from "./main-site/Components/Footer";
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
import UploadImages from "./admin-site/Components/UploadImages";
import AddNewProjectPage from "./admin-site/Components/Pages/AddNewProjectPage";

function App() {
  return (
    <div className="App dark:bg-white">
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/projects" exact Component={ClintProjectPage} />
          <Route path="/team" exact Component={TeamPage} />
          <Route path="/project/:id" Component={ClientprojectDetailPage} />
          <Route path="/event/:id" Component={EventDetailPage} />
          <Route path="/events" exact Component={EventPage} />
          <Route path="/admin/project"  element={<ProjectPage />} />
          <Route path="/admin/project/new" element={<AddNewProjectPage  />} />
          <Route path='/admin/project/edit/:id' element = {<UpdateProjectPage />} />
          <Route path='/admin/project/imageupload/:id' element = {<UploadImages />} />
          <Route path="/admin/sponsor" element={<SponsorPage  />} />
          <Route path="/admin/sponsor/new" element={<AddNewSponsorPage  />} />
          <Route path="/admin/sponsor/edit/:id" element={<UpdateSponsorPage />} />
          <Route path="/admin/login" element={<SingnIn  />} /> 
          <Route exact path='/admin/team/' element = {<Team />} />
          {/* <Route exact path='/admin/member/new' element = {<MemberForm />} /> */}
          {/* <Route path='/admin/member/edit/:id' element = {<MemberUpdateForm />} /> */}
          {/* <Route path="/admin/unauthorized" element={<Unauthorized />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
