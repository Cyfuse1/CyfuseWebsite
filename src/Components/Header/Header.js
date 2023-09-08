import { Link} from "react-router-dom";
import './Header.css'
import React, { useState, useEffect } from 'react';
const Header=(props)=>{
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");


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
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []);

    return(
      
        
        <div className={!isNavbarVisible?"header":"header header-active"}>
        <ul className="nav">
       <li className="item "  onClick={() => handleOptionClick('option1')}><Link to={"/"} className={selectedOption === 'option1' ? 'selected' : '' } id="home1"><i className="fa-solid fa-house"></i>  Home</Link></li>
       <li className="item" onClick={() => handleOptionClick('option2')}><Link to={"/about"} className={selectedOption === 'option2' ? 'selected' : ''}><i className="fa-solid fa-circle-info"></i>  About</Link></li>
       <li className="item" onClick={() => handleOptionClick('option3')}><Link to={"/events"} className={selectedOption === 'option3' ? 'selected' : ''}><i className="fa-regular fa-calendar-days"></i>  Events</Link></li>
       <li className="item" onClick={() => handleOptionClick('option4')}><Link to={"/team"} className={selectedOption === 'option4' ? 'selected' : ''}><i className="fa-solid fa-user-group"></i>  Members</Link></li>
       </ul>
       </div>
      // <h1> Header here</h1>
       
    );
}
export default Header