import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./admin-site/Components/Pages/ProjectPage";
import EventPage from "./admin-site/Components/Pages/EventPage";
import SponsorPage from "./admin-site/Components/Pages/SponsorPage";
import UpdateProjectPage from "./admin-site/Components/Pages/UpdateProjectPage";
import UpdateEventPage from "./admin-site/Components/Pages/UpdateEventPage";
import UpdateSponsorPage from "./admin-site/Components/Pages/UpdateSponsorPage";
import AddNewEventPage from "./admin-site/Components/Pages/AddNewEventPage";
import AddNewProjectPage from "./admin-site/Components/Pages/AddNewProjectPage";
import AddNewSponsorPage from "./admin-site/Components/Pages/AddNewSponsorPage";
import UploadImages from "./admin-site/Components/UploadImages";
import SingnIn from "./admin-site/Components/Pages/SingnIn";
function App() {
  return (
    <div className="App dark:bg-white">
      <Router>
        <Routes>
          <Route path="/event" exact Component={EventPage} />
          <Route path="/project" exact Component={ProjectPage} />
          <Route path="/sponsor" exact Component={SponsorPage} />
          <Route path="/project/:id" Component={UpdateProjectPage} />
          <Route path="/event/:id" Component={UpdateEventPage} />
          <Route path="/sponsor/:id" exact Component={UpdateSponsorPage} />
          <Route path="/addevents" exact Component={AddNewEventPage} />
          <Route path="/addproject" exact Component={AddNewProjectPage} />
          <Route path="/addsponsor" exact Component={AddNewSponsorPage} />
          <Route path="/upload/:id/type" exact Component={UploadImages} />
          <Route path="/signin" exact Component={SingnIn} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
