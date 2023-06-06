import "./App.css";
import Projects from "../src/main-site/Components/ProjectsComponent/Projects";
import ProjectDetail from "../src/main-site/Components/ProjectsComponent/ProjectDetail";
import HomePage from "./main-site/Pages/HomePage";
import Team from "../src/main-site/Components/TeamComponents/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavbar from "./main-site/Components/Navabar";
import Footer from "./main-site/Components/Footer";
import EventPage from "./main-site/Pages/EventPage";
import EventDetailPage from "./main-site/Pages/EventDetailPage";
function App() {
  return (
    <div className="App dark:bg-white">
      <Router>
        <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full mb-2">
          <MainNavbar />
        </div>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/team" exact Component={Team} />
          <Route path="/project/:id" Component={ProjectDetail} />
          <Route path="/event/:id" Component={EventDetailPage} />
          <Route path="/events" exact Component={EventPage} />
        </Routes>
      </Router>
      <div className="lg:w-[90%] w-[100%] lg:mt-10 lg:ml-10 ml-1 mr-1 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
