import logo from "./logo.svg";
import "./App.css";

import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Header_Past from "./Components/Header/Header_Past";
import AboutUS from "./Components/AboutUs/AboutUS";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./Components/Events/Events";
import Team from "./Components/Team/Team";
import Mela from "./Components/PastEvents/mela/mela";
import Intro_header from "./Components/PastEvents/introEvent/Intro_header";
import IntroEvent from "./Components/PastEvents/introEvent/IntroEvent";

function App() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route exact path="/PastEvents/mela" element={ <Mela /> }/>
          <Route exact path="/PastEvents/introEvent" element={<IntroEvent />  } />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutUS />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/team" element={<Team />} />
          </Routes> 
      </Router>
    <Footer/>
    </>
  );
}

export default App;
