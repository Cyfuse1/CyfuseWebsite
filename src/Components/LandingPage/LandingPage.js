import './LandingPage.css'
import React, { useEffect } from 'react';
import Records from './Events.json'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Chrono } from "react-chrono";

import AOS from 'aos';
import 'aos/dist/aos.css';
import ListItems from './ListItems';
const LandingPage=()=>{
   useEffect(()=>{
        AOS.init({duration:2000});
   },[]);

   const customContent = [
    <div>
      <p>Smart India Hackathon is the world's biggest open platform for the innovators or entrepreneurs of tomorrow to start today towards a smarter India. A total of 239 problem statements under 26 themes are presented. These problems have been posed by the state governments, the central ministry, the industry personnel and for student innovation.<br></br>
      

      <a href='https://forms.gle/HdoHeETczgYdiixS9'>click here</a> to register<br></br>
      For more details visit : <></>
        <a href='https://www.sih.gov.in/' target='_blank'>sih.gov.in</a><br></br>
        Team size : 6 (including atleast 1 female participant) 
       
     
        </p>
    </div>
  ];
    return(
      <>
       <div className="landing">
           
       <div className='imageContainer' >
       <img src="/whitelogo.png" alt="" data-aos="zoom-out" style={{
        backgroundImage: `url(/whitelogo.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '400px'
       }}/>

       </div>

           <h2 data-aos="zoom-out">CyFuse</h2>
            </div>
            <div className="aboutsec">
                <div className="content" data-aos="fade-up">
                        <h2>
                            About
                        </h2>
                        <p>
                        Our motive is to inspire a passion for the latest technology in the field of Mechatronics and Transhuman. We strive to stay informed and keep everyone updated about the latest advancements in these fields.
                        </p>
                </div>
                   
            </div>
            <div className="sub-heading" data-aos="fade-up">
                <h2>Upcoming Events</h2>
            </div>
            <div className="sessions">
            { <Chrono
            items={Records}
            mode="VERTICAL"

            >{customContent}</Chrono>
            }
        </div>
      </>
       
    );
}
export default LandingPage