import { Link, useLocation } from "react-router-dom";
import "./Intro_header.css";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // console.log(option);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div className={!isNavbarVisible ? "header" : "header header-active"}>
      <ul className="nav">
        <li className="item " >
          <HashLink
            smooth
            to="/PastEvents/introEvent#mela_home"
            className={selectedOption === "option1" ? "selected" : ""}
            id="home1"
          >
            <i className="fa-solid fa-house"></i> Home
          </HashLink>
        </li>
        <li className="item" >
          <HashLink
            smooth
            to="/PastEvents/introEvent#mela_about"
            className={selectedOption === "option2" ? "selected" : ""}
          >
            <i className="fa-solid fa-circle-info"></i> About
          </HashLink>
        </li>
        <li className="item">
          
        </li>
        <li className="item" >
          <HashLink
            smooth
            to="/PastEvents/introEvent#gallery"
            className={selectedOption === "option4" ? "selected" : ""}
          >
            <i className="fa-solid fa-photo-film"></i> Gallery
          </HashLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
