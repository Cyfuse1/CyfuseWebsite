import logo from "./logo.svg";
import "./App.css";

import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Header_Past from "./Components/Header/Header_Past";
import AboutUS from "./Components/AboutUs/AboutUS";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Events from "./Components/Events/Events";
import Team from "./Components/Team/Team";
import Mela from "./Components/PastEvents/mela/mela";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/PastEvents/mela"
            element={
              <>
                <Header_Past />
                <Mela />
                <Footer />
              </>
            }
          />
         
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route exact path="/about" element={<AboutUS />} />
                  <Route exact path="/events" element={<Events />} />
                  <Route exact path="/team" element={<Team />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
